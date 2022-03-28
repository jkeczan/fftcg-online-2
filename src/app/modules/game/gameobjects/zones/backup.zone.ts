import FFTCGCard from '../cards/fftcg_card';
import {BaseZone, ICardGameZone} from './base.zone';

export default class BackupZone extends BaseZone implements ICardGameZone {
    protected cardScale = .7;

    constructor(data) {
        super(data);
    }

    orientCard(card: FFTCGCard) {
        super.orientCard(card);
        card.flipForward();
        card.tap();
        if (this.inverted) {
            card.rotateCard(180);
        } else {
            card.rotateCard(0);
        }
    }

    payComittedCP() {
        this.cards.filter((card) => {
            return card.halfTapped;
        }).forEach((card) => {
            card.tap();
        });
    }

    createBorder(color: number = 0x3e3e3e, lineWidth: number = 10, alpha: number = .5) {

    }

    createLabel() {
        
    }

    onCardAdded(card: FFTCGCard) {
        super.onCardAdded(card);
        card.draggable = false;

        this.orientCard(card);
    }

    shouldBeShown(): boolean {
        return true;
    }

    shouldBeSideways(): boolean {
        return false;
    }

    shouldStack(): boolean {
        return false;
    }
}
