import CardBase from './card_base';

export default abstract class CardActions extends CardBase {
    tap() {
        this.rotateCard(90);
        this.tapped = true;
    }

    untap() {
        this.rotateCard(0);
        this.tapped = false;
    }
}
