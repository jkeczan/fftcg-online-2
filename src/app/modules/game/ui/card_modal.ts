import {Scene} from 'phaser';
import {Dialog} from 'phaser3-rex-plugins/templates/ui/ui-components';
import FFTCGCard from '../gameobjects/cards/card_fftcg';

export default class CardModal extends Dialog {
    private cards: Array<FFTCGCard>;

    constructor(scene: Scene, config: any) {
        super(scene, config);

        scene.add.existing(this);
        this.cards = [];
    }

    addCards(cards: FFTCGCard[]) {
        this.cards = this.cards.concat(cards);

        this.layoutCards();
        this.layout();
    }

    layoutCards() {
        for (let c = 0; c < this.cards.length; c++) {
            const card = this.cards[c];
            card.x = this.scene.cameras.main.width / 2;
            card.y = this.scene.cameras.main.height / 2;
            card.x = this.xTranslate(card, c);
            card.y = this.yTranslate(card, c);
            card.angle = this.angleTranslate(card, c);
            card.setCardScale(0.5);
            card.flipForward();
            card.depth = c + 1;
        }
    }

    xTranslate(card, index) {
        const centerIndex = (this.cards.length - 1) / 2;
        const shiftDirection = index < centerIndex ? -1 : 1;
        const shifts = Math.abs(centerIndex - index);
        return this.x + (shifts * shiftDirection * (card.width * 1.5));
    }

    yTranslate(card, index) {
        const centerIndex = (this.cards.length - 1) / 2;
        const shifts = Math.abs(centerIndex - index);

        const shiftAmount = shifts * 20;
        return index === centerIndex ? (this.y - (card.height / 2)) + shiftAmount : (this.y - (card.height / 2)) + shiftAmount;
    }

    angleTranslate(card, index) {
        const centerIndex = (this.cards.length - 1) / 2;
        const shiftDirection = index < centerIndex ? -1 : 1;
        const shifts = Math.abs(centerIndex - index);

        if (index === centerIndex) {
            return 0;
        } else {
            return shifts * shiftDirection * 4;
        }
    }
}
