import {Scene} from 'phaser';
import {IComponent} from '../managers/component.manager';
import {BaseComponent} from './base.component';
import GameObject = Phaser.GameObjects.GameObject;
import Zone = Phaser.GameObjects.Zone;
import GAMEOBJECT_DRAG = Phaser.Input.Events.GAMEOBJECT_DRAG;
import GAMEOBJECT_DRAG_END = Phaser.Input.Events.GAMEOBJECT_DRAG_END;
import GAMEOBJECT_DRAG_ENTER = Phaser.Input.Events.GAMEOBJECT_DRAG_ENTER;
import GAMEOBJECT_DRAG_LEAVE = Phaser.Input.Events.GAMEOBJECT_DRAG_LEAVE;
import GAMEOBJECT_DRAG_START = Phaser.Input.Events.GAMEOBJECT_DRAG_START;
import GAMEOBJECT_DROP = Phaser.Input.Events.GAMEOBJECT_DROP;
import Pointer = Phaser.Input.Pointer;

export class DragComponent<T extends GameObject & { x: number, y: number }> extends BaseComponent implements IComponent {
    protected scene: Scene;
    protected gameObject: T;
    private x: number;
    private y: number;

    constructor(scene: Scene) {
        super();
        this.scene = scene;

    }

    awake(): void {
    }

    destroy(): void {
        this.gameObject.off(GAMEOBJECT_DRAG_START);
        this.gameObject.off(GAMEOBJECT_DRAG);
        this.gameObject.off(GAMEOBJECT_DRAG_ENTER);
        this.gameObject.off(GAMEOBJECT_DRAG_LEAVE);
        this.gameObject.off(GAMEOBJECT_DROP);
        this.gameObject.off(GAMEOBJECT_DRAG_END);

        this.scene.input.setDraggable(this.gameObject, false);
    }

    start(): void {
        this.gameObject.setInteractive();

        this.scene.input.setDraggable(this.gameObject);
        this.gameObject.on(GAMEOBJECT_DRAG_START, this.onDragStart, this);
        this.gameObject.on(GAMEOBJECT_DRAG, this.onDrag, this);
        this.gameObject.on(GAMEOBJECT_DRAG_ENTER, this.dragEnterZone, this);
        this.gameObject.on(GAMEOBJECT_DRAG_LEAVE, this.dragLeaveZone, this);
        this.gameObject.on(GAMEOBJECT_DROP, this.handleDrop, this);
        this.gameObject.on(GAMEOBJECT_DRAG_END, this.handleDragEnd, this);
    }

    update(dt: number): void {
        if (this.x && this.y) {
            this.gameObject.x = this.x;
            this.gameObject.y = this.y;
        }
    }

    init(gameObject: T): IComponent {
        this.gameObject = gameObject;

        return this;
    }

    private onDragStart(pointer: Pointer, gameObject: T) {
        console.log('On Start');
        // TODO needs scene
        // this.gameObject.children.bringToTop(card);
    }

    private onDrag(pointer, dragX, dragY) {
        this.x = dragX;
        this.y = dragY;
    }

    private dragEnterZone(pointer: Pointer, dropZone) {

    }

    private dragLeaveZone(pointer: Pointer, dropZone) {

    }

    private handleDrop(pointer: Pointer, dropZone: Zone) {
        this.x = dropZone.x;
        this.y = dropZone.y;
    }

    private handleDragEnd(pointer: Pointer, dragX: number, dragY: number, dropped: boolean) {
        console.log('Drag End: ', pointer, dragX, dragY, dropped);
        if (!dropped) {
            this.x = this.gameObject.input.dragStartX;
            this.y = this.gameObject.input.dragStartY;
        }
    }
}
