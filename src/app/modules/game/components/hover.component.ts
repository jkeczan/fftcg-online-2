import {Scene} from 'phaser';
import {IComponent} from '../managers/component.manager';
import {BaseComponent} from './base.component';
import GameObject = Phaser.GameObjects.GameObject;
import GAMEOBJECT_POINTER_OUT = Phaser.Input.Events.GAMEOBJECT_POINTER_OUT;
import GAMEOBJECT_POINTER_OVER = Phaser.Input.Events.GAMEOBJECT_POINTER_OVER;
import Tween = Phaser.Tweens.Tween;


export class HoverComponent<T extends GameObject & { x: number, y: number, angle: number }> extends BaseComponent implements IComponent {
    protected gameObject: T;

    protected scene: Scene;
    private startingX: number;
    private startingY: number;
    private startingAngle: number;

    private upTween: Tween;
    private downTween: Tween;

    constructor(scene: Scene) {
        super();

        this.scene = scene;
    }

    awake() {
    }

    destroy() {
        this.gameObject.off(GAMEOBJECT_POINTER_OUT);
        this.gameObject.off(GAMEOBJECT_POINTER_OVER);

        this.scene.tweens.remove(this.upTween);
        this.scene.tweens.remove(this.downTween);
    }

    init(gameObject: T): IComponent {
        this.gameObject = gameObject;

        return this;
    }

    start() {
        this.startingX = this.gameObject.x;
        this.startingY = this.gameObject.y;
        this.startingAngle = this.gameObject.angle;

        this.gameObject.on(GAMEOBJECT_POINTER_OVER, this.onPointerOver, this);
        this.gameObject.on(GAMEOBJECT_POINTER_OUT, this.onPointerOut, this);
    }

    update(dt: number) {
    }

    onPointerOver() {
        this.upTween = this.scene.add.tween({
            targets: [this.gameObject],
            duration: 100,
            y: this.startingY - 125,
            angle: 0,
            scale: 2,
            ease: 'Sine'
        });
    }

    onPointerOut() {
        this.downTween = this.scene.add.tween({
            targets: [this.gameObject],
            duration: 100,
            y: this.startingY,
            angle: this.startingAngle,
            scale: 1,
            ease: 'Sine'
        });
    }
}
