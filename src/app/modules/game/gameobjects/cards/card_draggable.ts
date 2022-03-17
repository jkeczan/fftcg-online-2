import CardBase, {ICardConfig} from './card_base';
import Tween = Phaser.Tweens.Tween;
import GAMEOBJECT_POINTER_OVER = Phaser.Input.Events.GAMEOBJECT_POINTER_OVER;
import GAMEOBJECT_POINTER_OUT = Phaser.Input.Events.GAMEOBJECT_POINTER_OUT;

// tslint:disable-next-line:component-class-suffix
export default class CardDraggable extends CardBase {
    private _originalX: number;
    private _originalY: number;
    private _draggable: boolean;
    private _dragging: boolean;
    private _tapped: boolean;
    private isHandHovered: boolean;
    private hoverActive: boolean;

    private hoverTween: Tween;

    constructor(data: ICardConfig) {
        super(data);
        this._originalX = this.x;
        this._originalY = this.y;
        this._draggable = true;
        this._dragging = false;
        this.hoverActive = true;
        this.setInteractive();
        this.scene.input.setDraggable(this);
    }

    onHover() {
        let delay = 0;
        if (this.hoverTween?.isPlaying()) {
            delay = 2000;
        }
        this.scene.time.delayedCall(delay, () => {
            this.hoverTween = this.scene.add.tween({
                targets: [this],
                ease: 'Cubic',
                duration: 250,
                y: this.y - 125
            });
        });

    }

    onHoverOut() {
        let delay = 0;
        if (this.hoverTween?.isPlaying()) {
            delay = 375;
        }
        this.scene.time.delayedCall(delay, () => {
            this.scene.add.tween({
                targets: [this],
                ease: 'Cubic',
                duration: 250,
                delay: 125,
                y: this.y + 125
            });
        });

    }

    activateHandHoverMode() {
        this.on(GAMEOBJECT_POINTER_OVER, () => {
            this.onHover();
        });
        this.on(GAMEOBJECT_POINTER_OUT, () => {
            this.onHoverOut();
        });
    }

    setStartDragPosition() {
        this.originalX = this.x;
        this.originalY = this.y;
    }

    deactivateHandHoverMode() {
        this.off(GAMEOBJECT_POINTER_OVER);
        this.off(GAMEOBJECT_POINTER_OUT);
    }

    public snapBack(): void {
        this.x = this.originalX;
        this.y = this.originalY;
    }

    tap() {
        this.rotateCard(90);
        this._tapped = true;
    }

    untap() {
        this.rotateCard(0);
        this._tapped = false;
    }

    invert() {
        this.angle += 180;
    }

    uninvert() {
        this.angle -= 180;
    }

    public updateGamePosition(x?: number, y?: number) {
        if (x) {
            this.x = x;
        }

        if (y) {
            this.y = y;
        }
    }

    get originalX(): number {
        return this._originalX;
    }

    set originalX(value: number) {
        this._originalX = value;
    }

    get originalY(): number {
        return this._originalY;
    }

    set originalY(value: number) {
        this._originalY = value;
    }

    get draggable(): boolean {
        return this._draggable;
    }

    set draggable(value: boolean) {
        this._draggable = value;
    }

    get dragging(): boolean {
        return this._dragging;
    }

    set dragging(value: boolean) {
        this._dragging = value;
    }

    get isTapped() {
        return this._tapped;
    }
}
