import {Scene} from 'phaser';
import StageZone from '../zones/stage.zone';
import CardBase from './card_base';
import FFTCGCard from './card_fftcg';
import GAMEOBJECT_POINTER_OUT = Phaser.Input.Events.GAMEOBJECT_POINTER_OUT;
import GAMEOBJECT_POINTER_OVER = Phaser.Input.Events.GAMEOBJECT_POINTER_OVER;
import GAMEOBJECT_DRAG_START = Phaser.Input.Events.GAMEOBJECT_DRAG_START;
import GAMEOBJECT_DRAG = Phaser.Input.Events.GAMEOBJECT_DRAG;
import GAMEOBJECT_DRAG_ENTER = Phaser.Input.Events.GAMEOBJECT_DRAG_ENTER;
import GAMEOBJECT_DRAG_LEAVE = Phaser.Input.Events.GAMEOBJECT_DRAG_LEAVE;
import GAMEOBJECT_DROP = Phaser.Input.Events.GAMEOBJECT_DROP;
import Pointer = Phaser.Input.Pointer;
import GAMEOBJECT_DRAG_END = Phaser.Input.Events.GAMEOBJECT_DRAG_END;

// tslint:disable-next-line:component-class-suffix
export default abstract class CardDraggable extends CardBase {
    private _originalX: number;
    private _originalY: number;
    private _originalAngle: number;
    private _draggable: boolean;
    private _dragging: boolean;
    private hoveringActive: boolean;

    startHover() {
        console.log('Activating Hover');
        if (!this.hoveringActive) {
            this.hoveringActive = true;
            this.on(GAMEOBJECT_POINTER_OVER, () => {
                if (this.scene.tweens.isTweening(this)) return;
                console.log('ON Pointer over');

                this.originalX = this.x;
                this.originalY = this.y;
                this.originalAngle = this.angle;

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
                if (this.scene.tweens.isTweening(this)) return;

                this.scene.add.tween({
                    targets: [this],
                    y: this.originalY,
                    angle: this.originalAngle,
                    duration: 100,
                    scale: 1,
                    ease: 'Sine',
                    onComplete: () => {
                        this.originalX = this.x;
                        this.originalY = this.y;
                        this.originalAngle = this.angle;
                    }
                });
            });
        }
    }

    endHover() {
        if (this.hoveringActive) {
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

    enableDrag() {
        this.scene.input.setDraggable(this, true);

        this.scene.input.on(GAMEOBJECT_DRAG_START, (pointer: Pointer, card: FFTCGCard) => {
            console.log('Drag Start');
            this.scene.children.bringToTop(card);
            this.originalX = this.x;
            this.originalY = this.y;
        });

        this.scene.input.on(GAMEOBJECT_DRAG, (pointer, gameObject, dragX, dragY) => {
            console.log('Drag');
            gameObject.x = dragX;
            gameObject.y = dragY;
        });

        this.scene.input.on(GAMEOBJECT_DRAG_ENTER, (pointer, gameObject, dropZone) => {

            // graphics.clear();
            // graphics.lineStyle(2, 0x00ffff);
            // graphics.strokeRect(zone.x - zone.input.hitArea.width / 2, zone.y - zone.input.hitArea.height / 2, zone.input.hitArea.width, zone.input.hitArea.height);

        });

        this.scene.input.on(GAMEOBJECT_DRAG_LEAVE, (pointer, gameObject, dropZone) => {

            // graphics.clear();
            // graphics.lineStyle(2, 0xffff00);
            // graphics.strokeRect(zone.x - zone.input.hitArea.width / 2, zone.y - zone.input.hitArea.height / 2, zone.input.hitArea.width, zone.input.hitArea.height);

        });

        this.scene.input.on(GAMEOBJECT_DROP, (pointer, gameObject, dropZone) => {
            console.log('On Drop')
            gameObject.x = dropZone.x;
            gameObject.y = dropZone.y;
        });

        this.scene.input.on(GAMEOBJECT_DRAG_END, (pointer, gameObject, dropped) => {
            console.log('On End', dropped)
            if (!dropped) {
                gameObject.x = gameObject.input.dragStartX;
                gameObject.y = gameObject.input.dragStartY;
            }

        });
    }

    disableDrag() {
        this.scene.input.setDraggable(this, false);
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
