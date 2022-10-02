import GameObject = Phaser.GameObjects.GameObject;
import {generate as short} from 'short-uuid';

export type Constructor<T extends {} = {}> = new (...args: any[]) => T;

export interface IComponent {

    awake?: () => void;
    start?: () => void;
    update?: (dt: number) => void;
    destroy?: () => void;

    init(gameObject: GameObject): IComponent;
}


export class ComponentSystem {

    private componentsByGameObject = new Map<string, IComponent[]>();
    private queuedForStart: IComponent[];

    constructor() {
        this.queuedForStart = [];
    }

    addComponent(gameObject: GameObject, component: IComponent) {
        if (!gameObject.name) {
            gameObject.name = short();
        }

        if (!this.componentsByGameObject.has(gameObject.name)) {
            this.componentsByGameObject.set(gameObject.name, []);
        }

        const list = this.componentsByGameObject.get(gameObject.name);
        list.push(component);

        component.init(gameObject);

        if (component.awake) {
            component.awake();
        }

        if (component.start) {
            this.queuedForStart.push(component);
        }
    }

    findComponent<ComponentType>(gameObject: GameObject, componentType: Constructor<ComponentType>) {
        const components = this.componentsByGameObject.get(gameObject.name);
        if (!components) {
            return null;
        }

        return components.find((component) => {
            return component instanceof componentType;
        });
    }

    update(dt: number) {
        while (this.queuedForStart?.length > 0) {
            const component = this.queuedForStart.shift();
            if (component?.start) {
                component.start();
            }
        }

        const entries = this.componentsByGameObject.entries();
        for (const [, components] of entries) {
            components.forEach((component) => {
                if (component?.update) {
                    component.update(dt);
                }
            });
        }
    }

    /**
     * Removes component a specific game object by running destroy and removing it from the list of components
     *
     * @param gameObject Object to remove component from
     * @param componentType Component Type to Find and Remove
     */
    removeComponent<ComponentType>(gameObject: GameObject, componentType: Constructor<ComponentType>) {
        const component = this.findComponent(gameObject, componentType);

        if (component) {
            component.destroy();
        }

        const components = this.componentsByGameObject.get(gameObject.name);

        const index = components.findIndex((comp: IComponent) => {
            return comp instanceof componentType;
        });

        this.componentsByGameObject.set(gameObject.name, components.splice(index, 1));


    }

    /**
     * This destroys the entire component system for all game objects
     */
    destroy() {
        const entries = this.componentsByGameObject.entries();
        for (const [, components] of entries) {
            components.forEach((component) => {
                component.destroy();
            });
        }
    }
}
