import GameObject = Phaser.GameObjects.GameObject;
import {IComponent} from '../managers/component.system';

export abstract class BaseComponent implements IComponent {
    protected gameObject: GameObject;

    abstract awake?();

    abstract destroy?();

    abstract start?();

    abstract update?(dt: number);

    abstract init(gameObject: Phaser.GameObjects.GameObject): IComponent;
}
