import CardBase, {ICardConfig} from './CardBase';
import {GameZone} from './GameZone';
import Tween = Phaser.Tweens.Tween;
import POINTER_OVER = Phaser.Input.Events.POINTER_OVER;
import POINTER_OUT = Phaser.Input.Events.POINTER_OUT;
import Pointer = Phaser.Input.Pointer;

export interface ICardDraggableConfig extends ICardConfig {
    ondragend?: (pointer: Pointer, gameObject: CardDraggable, dropped: boolean, dropZone?: GameZone) => void;
    ondropped: (pointer: Pointer, gameObject: CardDraggable, dropZone: GameZone) => void;
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
        this.setScale(.7, .7);
        this.setSize(this.spriteImage.width, this.spriteImage.height);
        this.setInteractive();
        this.scene.input.setDraggable(this);
        this.on(POINTER_OVER, (pointer, localx, localy) => {
            this.onHover();
        });
        this.on(POINTER_OUT, () => {
            this.onHoverOut();
        });
    }

    tap() {
        this.rotateCard(90);
    }

    untap() {
        this.rotateCard(0);
    }

    freeze() {
        this.rotateCard(180);
    }

    async onHover() {
        console.log('Hovered');
    }

    onHoverOut() {
        console.log('Hover Out');
    }

    activateHandHoverMode() {
        this.on(POINTER_OVER, () => {
            if (!this.isHandHovered) {
                this.isHandHovered = true;
                this.y -= 30;
            }
        });
        this.on(POINTER_OUT, () => {
            if (this.isHandHovered) {
                this.y += 30;
                this.isHandHovered = false;
            }
        });
    }

    deactivateHandHoverMode() {
        this.off(POINTER_OVER);
        this.off(POINTER_OUT);
    }

    public snapBack(): void {
        this.x = this.originalX;
        this.y = this.originalY;
    }

    public rotateCard(angle) {
        this.scene.add.tween({
            targets: [this],
            ease: 'Power1',
            duration: 250,
            angle
        });
    }

    public updateGamePosition(x?: number, y?: number) {
        if (x) {
            this.originalX = this.x;
            this.x = x;
        }

        if (y) {
            this.originalY = this.y;
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
