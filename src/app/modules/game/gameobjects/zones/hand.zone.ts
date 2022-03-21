import {BaseZone, ICardGameZone, IGameZoneConfig} from './base.zone';
import CardDraggable from '../cards/card_draggable';
import FFTCGCard from '../cards/fftcg_card';
import GAMEOBJECT_POINTER_OVER = Phaser.Input.Events.GAMEOBJECT_POINTER_OVER;
import GAMEOBJECT_POINTER_OUT = Phaser.Input.Events.GAMEOBJECT_POINTER_OUT;


export default class HandZone extends BaseZone implements ICardGameZone {
    protected cardScale = 1.2;

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
                duration: 500,
                ease: 'Cubic',
                x: this.xTranslateOnDrop(card, i),
                y: this.yTranslateOnDrop(card, i)
            });
            // }
        }
    }

    onCardAdded(card: FFTCGCard) {
        super.onCardAdded(card);
        // this.activateHandHover(card);
    }

    onCardRemoved(card: FFTCGCard) {
        super.onCardRemoved(card);
        // this.deactivateHandHover(card);
    }

    activateHandHover(card: FFTCGCard) {
        card.on(GAMEOBJECT_POINTER_OVER, () => {
            card.y -= 125;
        });

        card.on(GAMEOBJECT_POINTER_OUT, () => {
            card.y += 125;
        });
    }

    deactivateHandHover(card: FFTCGCard) {
        card.off(GAMEOBJECT_POINTER_OVER);
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

    yTranslateOnDrop(card: CardDraggable, index: number): number {
        const centerIndex = (this.cards.length - 1) / 2;
        const shifts = Math.abs(centerIndex - index);

        if (this.inverted) {
            return this.y - (shifts * 25);
        } else {
            return this.y + (shifts * 25);
        }
    }

    shouldBeSideways(): boolean {
        return false;
    }
}
