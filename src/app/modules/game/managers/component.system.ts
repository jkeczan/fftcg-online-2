import GameObject = Phaser.GameObjects.GameObject;
import {generate as short} from 'short-uuid';

export type Constructor<T extends {} = {}> = new (...args: any[]) => T;

export interface IComponent {

    /**
     * Function called before after commit but before start. Use this method to execute one time component operations
     * like creating the emitters.
     */
    awake?: () => void;

    /**
     * Hook called to start the effect. Use the hook to implement and start your component logic such as event handler
     * binding
     */
    start?: () => void;

    /**
     * Hook Method for updating the component logic. This is called during Scene update
     * @param dt Delta Time since last frame
     */
    update?: (dt: number) => void;

    /**
     * Hook Method that is called when component is destroyed. Use this to remove event listeners and trash any singletons
     * on the scene needed
     */
    destroy?: () => void;

    /**
     * First Hook Method called in the cycle. Use this to setup instance variables.
     * @param gameObject Game object for this component
     */
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
