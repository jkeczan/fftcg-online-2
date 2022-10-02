import {IComponent} from '../managers/component.system';

export class ClickComponent implements IComponent {

    private gameObject!: Phaser.GameObjects.GameObject;

    awake(): void {
        console.log('Awake Component');
    }

    start(): void {
        console.log('Start Component');
        this.gameObject.on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, this.handleClick, this);
    }

    init(gameObject: Phaser.GameObjects.GameObject): IComponent {
        this.gameObject = gameObject;

        return this;
    }

    destroy() {
        this.gameObject.off(Phaser.Input.Events.GAMEOBJECT_POINTER_UP);
    }

    private handleClick() {
        console.log('Clicked on: ', this.gameObject.name);
    }

}
