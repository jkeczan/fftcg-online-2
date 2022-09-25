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

    timeout() {
        return new Promise((resolve, reject) => {
            this.scene.time.delayedCall(800, () => {
                resolve(true);
            });
        });
    }

    onCardAdded(card: FFTCGCard) {
        super.onCardAdded(card);
        card.setInteractive();
        card.enableDrag();
        card.startHover();
    }

    onCardRemoved(card: FFTCGCard) {
        super.onCardRemoved(card);

        card.disableInteractive();
        card.endHover();
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


    alignCardsInZone(cardAdded: FFTCGCard) {
        // super.alignCardsInZone(cardAdded);
        for (let i = 0; i < this.cards.length; i++) {
            const card = this.cards[i];
            this.scene.add.tween({
                targets: [card],
                duration: 500,
                ease: 'Cubic',
                x: this.xTranslateOnDrop(card, i),
                y: this.yTranslateOnDrop(card, i),
                angle: this.angleTranslateOnDrop(card, i),
                scale: this.cardScale
            });
        }
    }


    xTranslateOnDrop(card: CardDraggable, index: number): undefined | number {
        if (!card) return;
        const centerIndex = (this.cards.length - 1) / 2;
        const shiftDirection = index < centerIndex ? -1 : 1;
        const shifts = Math.abs(centerIndex - index);
        return this.x + (shifts * shiftDirection * (card.width * .8));
    }

    angleTranslateOnDrop(card: CardDraggable, index: number): number {
        // super.angleTranslateOnDrop(card, index);

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

        const shiftAmount = shifts * 10;
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
            newY = baseY - 5;
        } else if (shifts === 0) {
            newY = baseY + 5;
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
