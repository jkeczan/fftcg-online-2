import CubicBeizerTween from '../../animations/cubic_beizer.tween';
import CardDraggable from '../cards/card_draggable';
import FFTCGCard from '../cards/card_fftcg';
import {BaseZone, ICardGameZone, IGameZoneConfig} from './base.zone';
import DRAG = Phaser.Input.Events.DRAG;
import DRAG_ENTER = Phaser.Input.Events.DRAG_ENTER;
import DRAG_LEAVE = Phaser.Input.Events.DRAG_LEAVE;
import DROP = Phaser.Input.Events.DROP;
import DRAG_START = Phaser.Physics.Matter.Events.DRAG_START;

export default class HandZone extends BaseZone implements ICardGameZone {
    protected cardScale = 0.9;

    constructor(config: IGameZoneConfig) {
        super(config);
    }

    shouldBeShown(): boolean {
        return true;
    }

    shouldStack(): boolean {
        return false;
    }

    async alignCardsInZone(cardAdded: FFTCGCard) {
        for (let i = 0; i < this.cards.length; i++) {
            const card = this.cards[i];
            const path = {t: 0, vec: new Phaser.Math.Vector2()};

            console.log('Card to Align in Hand: ', card, i)

            const startingPoint = new Phaser.Math.Vector2(card.x, card.y);
            const middleEndingPoint = new Phaser.Math.Vector2(this.scene.cameras.main.width / 2, this.scene.cameras.main.height / 2);
            const endingPoint = new Phaser.Math.Vector2(this.xTranslateOnDrop(card, i), this.yTranslateOnDrop(card, i));

            const beizerCurveTween = new CubicBeizerTween({
                scene: this.scene,
                startingPoint,
                middleEndingPoint,
                endingPoint,
                target: card,
            });
            beizerCurveTween.play();
            await this.timeout();
        }
    }

    timeout() {
        return new Promise((resolve, reject) => {
            this.scene.time.delayedCall(800, () => {
                resolve(true);
            })
        })
    }

    onCardAdded(card: FFTCGCard) {
        super.onCardAdded(card);
        if (!this.inverted) {
            card.startHover();
        }
        // this.activateHandHover(card);
    }

    onCardRemoved(card: FFTCGCard) {
        super.onCardRemoved(card);
        // this.deactivateHandHover(card);
    }

    orientCard(card: FFTCGCard) {
        if (this.inverted) {
            card.flipBack();
            card.rotateCard(180);

        } else {
            card.flipForward();
            card.rotateCard(0);
        }
    }

    angleTranslateOnDrop(card: CardDraggable, index: number): number {
        super.angleTranslateOnDrop(card, index);

        const centerIndex = (this.cards.length - 1) / 2;
        let shiftDirection = index < centerIndex ? -1 : 1;
        const shifts = Math.abs(centerIndex - index);

        if (this.inverted) {
            shiftDirection *= -1;
        }

        if (index === centerIndex) {
            return 0;
        } else {
            return shifts * shiftDirection * 4;
        }
    }

    yTranslateOnDrop(card: CardDraggable, index: number): number {
        const centerIndex = (this.cards.length - 1) / 2;
        const shifts = Math.abs(centerIndex - index);

        const shiftAmount = shifts * 20;
        let newY;
        let baseY;

        if (this.inverted) {
            baseY = this.y;
            newY = baseY - shiftAmount;
        } else {
            baseY = this.y;
            newY = baseY + shiftAmount;
        }

        if (shifts === 0 && this.inverted) {
            newY = baseY - 15;
        } else if (shifts === 0) {
            newY = baseY + 15;
        }

        return newY;
    }

    shouldBeSideways(): boolean {
        return false;
    }

    activateDrag() {

    }

    deactivateDrag() {
        for (const card of this.cards) {
            card.off(DRAG);
            card.off(DRAG_START);
            card.off(DROP);
            card.off(DRAG_ENTER);
            card.off(DRAG_LEAVE);
        }
    }
}
