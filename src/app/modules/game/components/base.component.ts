import GameObject = Phaser.GameObjects.GameObject;
import {Scene} from 'phaser';
import {IComponent} from '../managers/component.manager';

export abstract class BaseComponent implements IComponent {
    protected gameObject: GameObject;
    protected scene: Scene;

    abstract awake?();

    abstract destroy?();

    abstract start?();

    abstract update?(dt: number);

    abstract init(gameObject: Phaser.GameObjects.GameObject): IComponent;
}
