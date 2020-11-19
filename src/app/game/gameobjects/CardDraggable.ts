import CardBase from './CardBase';
import Tween = Phaser.Tweens.Tween;

export default class CardDraggable extends CardBase {
    private _originalX: number;
    private _originalY: number;
    private _draggable: boolean;
    private _dragging: boolean;
    private _onDragEnd: any;
    private rotationTween: Tween;

    constructor(data) {
        const {ondragend} = data;
        super(data);
        this._originalX = this.x;
        this._originalY = this.y;
        this._draggable = true;
        this._dragging = false;
        this._onDragEnd = ondragend;
        this.setScale(.7, .7);
        this.setSize(this.spriteImage.width, this.spriteImage.height);
        this.setInteractive();
        this.scene.input.setDraggable(this);
    }

    tap() {
        this.rotateCard(90);
    }

    untap() {
        this.rotateCard(0);
    }


    private rotateCard(angle) {
        this.scene.add.tween({
            targets: [this],
            ease: 'Power1',
            duration: 250,
            angle: angle
        });
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

    get onDragEnd(): any {
        return this._onDragEnd;
    }

    set onDragEnd(value: any) {
        this._onDragEnd = value;
    }
}
