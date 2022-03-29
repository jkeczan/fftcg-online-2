import {Scene} from 'phaser';
import CardBase from './card_base';
import GAMEOBJECT_POINTER_OUT = Phaser.Input.Events.GAMEOBJECT_POINTER_OUT;
import GAMEOBJECT_POINTER_OVER = Phaser.Input.Events.GAMEOBJECT_POINTER_OVER;

// tslint:disable-next-line:component-class-suffix
export default abstract class CardDraggable extends CardBase {
    private _originalX: number;
    private _originalY: number;
    private _originalAngle: number;
    private _draggable: boolean;
    private _dragging: boolean;
    private hoveringActive: boolean;

    constructor(scene: Scene) {
        super(scene);
        this._originalX = this.x;
        this._originalY = this.y;
        this._draggable = true;
        this._dragging = false;
        this.setInteractive();
        this.scene.input.setDraggable(this);
    }

    startHover() {
        if (!this.hoveringActive) {
            this.hoveringActive = true;
            this.on(GAMEOBJECT_POINTER_OVER, () => {
                this.scene.add.tween({
                    targets: [this],
                    duration: 100,
                    y: this.y - 125,
                    angle: 0,
                    scale: 2,
                    ease: 'Sine'
                });
            });

            this.on(GAMEOBJECT_POINTER_OUT, () => {
                this.scene.add.tween({
                    targets: [this],
                    y: this.originalY,
                    angle: this.originalAngle,
                    duration: 100,
                    scale: 1,
                    ease: 'Sine'
                });
            });
        }
    }

    endHover() {
        if (this.hoveringActive) {
            console.log('Stop Hovering');
            this.off(GAMEOBJECT_POINTER_OUT);
            this.off(GAMEOBJECT_POINTER_OVER);
            this.hoveringActive = false;
        }
    }


    setStartDragPosition() {
        this.originalX = this.x;
        this.originalY = this.y;
        this._originalAngle = this.angle;
    }

    public snapBack(): void {
        this.x = this.originalX;
        this.y = this.originalY;
        this.angle = this.originalAngle;
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

    get originalAngle(): number {
        return this._originalAngle;
    }

    set originalAngle(value: number) {
        this._originalAngle = value;
    }
}
