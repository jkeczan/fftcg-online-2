import CardDraggable from './card_draggable';

export default abstract class CardActions extends CardDraggable {
    private _tapped: boolean;
    private _halfTapped: boolean;
    private _isHoverActive: boolean;

    tap() {
        this.rotateCard(90);
        this._tapped = true;
    }

    untap() {
        this.rotateCard(0);
        this._tapped = false;
        this.halfTapped = false;
    }

    halfTap() {
        this.rotateCard(45);
        this.halfTapped = true;
    }

    invert() {
        this.angle += 180;
    }

    showToken() {

    }

    hideToken() {
    }

    uninvert() {
        this.angle -= 180;
    }

    startShaking() {

    }

    stopShaking() {

    }

    get isTapped() {
        return this._tapped;
    }

    get tapped(): boolean {
        return this._tapped;
    }

    set tapped(value: boolean) {
        this._tapped = value;
    }

    get isHoverActive(): boolean {
        return this._isHoverActive;
    }

    set isHoverActive(value: boolean) {
        this._isHoverActive = value;
    }

    get halfTapped(): boolean {
        return this._halfTapped;
    }

    set halfTapped(value: boolean) {
        this._halfTapped = value;
    }
}
