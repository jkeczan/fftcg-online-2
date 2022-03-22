import {BaseZone, ICardGameZone, IGameZoneConfig} from './base.zone';
import CardDraggable from '../cards/card_draggable';
import FFTCGCard from '../cards/fftcg_card';

export default class HandZone extends BaseZone implements ICardGameZone {
    protected cardScale = 1.1;

    constructor(config: IGameZoneConfig) {
        super(config);
    }

    shouldBeShown(): boolean {
        return true;
    }

    shouldStack(): boolean {
        return false;
    }

    alignCardsInZone(cardAdded: FFTCGCard) {
        console.log('Align Cards in Hand')
        for (let i = 0; i < this.cards.length; i++) {
            const card = this.cards[i];
            // if (cardAdded.gameCardID === card.gameCardID) {
            //     const path = {t: 0, vec: new Phaser.Math.Vector2()};
            //
            //     const startingPoint = new Phaser.Math.Vector2(card.x, card.y);
            //     const middleEndingPoint = new Phaser.Math.Vector2(this.scene.cameras.main.width / 2, this.scene.cameras.main.height / 2);
            //     const endingPoint = new Phaser.Math.Vector2(this.xTranslateOnDrop(card, i), this.yTranslateOnDrop(card, i));
            //
            //     const beizerCurveTween = new CubicBeizerTween({
            //         scene: this.scene,
            //         startingPoint,
            //         middleEndingPoint,
            //         endingPoint,
            //         target: card,
            //     });
            //
            //     beizerCurveTween.play();
            // } else {

            this.scene.add.tween({
                targets: [card],
                duration: 250,
                ease: 'Cubic',
                x: this.xTranslateOnDrop(card, i),
                y: this.yTranslateOnDrop(card, i),
                angle: this.angleTranslateOnDrop(card, i),
                onComplete: () => {
                    card.setStartDragPosition();
                }
            });
            // }
        }

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
            return shifts * shiftDirection * 7;
        }
    }

    yTranslateOnDrop(card: CardDraggable, index: number): number {
        const centerIndex = (this.cards.length - 1) / 2;
        const shifts = Math.abs(centerIndex - index);

        const shiftAmount = shifts * 30;
        let newY;
        let baseY;

        if (this.inverted) {
            baseY = this.y;
            newY = baseY - shiftAmount;
        } else {
            baseY = this.y - (card.height / 2);
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
}
