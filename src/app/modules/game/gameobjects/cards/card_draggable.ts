import {BaseZone, GameZoneDataKeys, GameZoneEvents} from '../zones/base.zone';
import CardBase from './card_base';
import FFTCGCard from './card_fftcg';
import Zone = Phaser.GameObjects.Zone;
import GAMEOBJECT_DRAG = Phaser.Input.Events.GAMEOBJECT_DRAG;
import GAMEOBJECT_DRAG_END = Phaser.Input.Events.GAMEOBJECT_DRAG_END;
import GAMEOBJECT_DRAG_ENTER = Phaser.Input.Events.GAMEOBJECT_DRAG_ENTER;
import GAMEOBJECT_DRAG_LEAVE = Phaser.Input.Events.GAMEOBJECT_DRAG_LEAVE;
import GAMEOBJECT_DRAG_START = Phaser.Input.Events.GAMEOBJECT_DRAG_START;
import GAMEOBJECT_DROP = Phaser.Input.Events.GAMEOBJECT_DROP;
import GAMEOBJECT_POINTER_OUT = Phaser.Input.Events.GAMEOBJECT_POINTER_OUT;
import GAMEOBJECT_POINTER_OVER = Phaser.Input.Events.GAMEOBJECT_POINTER_OVER;
import Pointer = Phaser.Input.Pointer;

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
                if (this.scene.tweens.isTweening(this)) {
                    return;
                }

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
                if (this.scene.tweens.isTweening(this)) {
                    return;
                }

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

        this.scene.input.on(GAMEOBJECT_DRAG_ENTER, (pointer, gameObject: FFTCGCard, dropZone: BaseZone) => {
            if (dropZone.name === 'FieldZone') {
                dropZone.highlightZone();
            }
        });

        this.scene.input.on(GAMEOBJECT_DRAG_LEAVE, (pointer, gameObject: FFTCGCard, dropZone: BaseZone) => {
            dropZone.unhighlightZone();
        });

        this.scene.input.on(GAMEOBJECT_DROP, (pointer: Pointer, gameObject: FFTCGCard, dropZone: Zone) => {
            console.log('On Drop');

            if (dropZone.getData(GameZoneDataKeys.STAGE_CARD_ON_DROP) === true) {
                this.scene.events.emit(GameZoneEvents.RequestStageCard, gameObject);
            }

            // gameObject.x = dropZone.x;
            // gameObject.y = dropZone.y;
        });

        this.scene.input.on(GAMEOBJECT_DRAG_END, (pointer, gameObject, dropped) => {
            console.log('On End', dropped);
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
