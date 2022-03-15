import CardBase, {ICardConfig} from './CardBase';
import {BaseZone} from './zones/Base.zone';
import Tween = Phaser.Tweens.Tween;
import Pointer = Phaser.Input.Pointer;
import Rectangle = Phaser.Geom.Rectangle;
import GAMEOBJECT_POINTER_OVER = Phaser.Input.Events.GAMEOBJECT_POINTER_OVER;
import GAMEOBJECT_POINTER_OUT = Phaser.Input.Events.GAMEOBJECT_POINTER_OUT;

export interface ICardDraggableConfig extends ICardConfig {
    ondragend?: (pointer: Pointer, gameObject: CardDraggable, dropped: boolean, dropZone?: BaseZone) => void;
    ondropped: (pointer: Pointer, gameObject: CardDraggable, dropZone: BaseZone) => void;
}

// tslint:disable-next-line:component-class-suffix
export default class CardDraggable extends CardBase {
    private _originalX: number;
    private _originalY: number;
    private _draggable: boolean;
    private _dragging: boolean;
    private _onDragEnd: (pointer, gameObject, dropped, dropZone) => void;
    private _onDropped: (pointer, gameObject, gameZone) => void;
    private rotationTween: Tween;
    private isHandHovered: boolean;
    private hoverActive: boolean;
    private _tapped: boolean;
    private hoverTween: Tween;

    constructor(data: ICardDraggableConfig) {
        super(data);
        const {ondragend, ondropped} = data;
        this._originalX = this.x;
        this._originalY = this.y;
        this._draggable = true;
        this._dragging = false;
        this._onDragEnd = ondragend;
        this._onDropped = ondropped;
        this.hoverActive = true;
        this.setInteractive();
        this.scene.input.setDraggable(this);
    }

    onHover() {
        if (!this.isHandHovered) {
            this.isHandHovered = true;
            this.hoverTween = this.scene.add.tween({
                targets: [this],
                ease: 'Cubic',
                duration: 250,
                y: this.y - 125
            });
        }
    }

    onHoverOut() {
        if (this.isHandHovered) {
            this.isHandHovered = false;
            this.scene.add.tween({
                targets: [this],
                ease: 'Cubic',
                duration: 250,
                delay: 125,
                y: this.y + 125
            });
        }
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

    get onDragEnd(): (pointer, gameObject, dropped, gameZone) => void {
        return this._onDragEnd;
    }

    set onDragEnd(value: (pointer, gameObject, dropped, gameZone) => void) {
        this._onDragEnd = value;
    }

    get onDropped(): (pointer, gameObject, dropped) => void {
        return this._onDropped;
    }

    set onDropped(value: (pointer, gameObject, dropped) => void) {
        this._onDropped = value;
    }
}
