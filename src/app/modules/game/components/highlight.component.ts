import {Scene} from 'phaser';
import {IComponent} from '../managers/component.manager';
import {BaseComponent} from './base.component';
import Container = Phaser.GameObjects.Container;
import ParticleEmitter = Phaser.GameObjects.Particles.ParticleEmitter;
import ParticleEmitterManager = Phaser.GameObjects.Particles.ParticleEmitterManager;

export class HighlightComponent extends BaseComponent implements IComponent {
    protected gameObject: Container;
    private particleManager: ParticleEmitterManager;
    private emitter: ParticleEmitter;

    constructor(scene: Scene) {
        super();

        this.scene = scene;
    }

    awake() {
        this.particleManager = this.scene.add.particles('flares');
    }

    destroy() {
        if (this.emitter) {
            this.emitter.stop();
            this.particleManager.emitters.destroy();
        }
    }

    init(gameObject: Container): IComponent {
        this.gameObject = gameObject;
        return this;
    }

    start() {
        const rect = this.gameObject.getBounds();

        const foundEmitter = this.particleManager.emitters.getByName('highlight_emitter');

        if (!foundEmitter) {
            this.emitter = this.particleManager.createEmitter({
                name: 'highlight_emitter',
                frame: ['red', 'yellow', 'green', 'blue'],
                speed: 20,
                lifespan: 50,
                frequency: 1,
                scale: {start: 0.4, end: 0},
                blendMode: 'ADD',
                quantity: 1,
                particleBringToTop: false,
                emitZone: {type: 'edge', source: rect, stepRate: 10, quantity: 100, seamless: true}
            });
        } else {
            this.emitter = foundEmitter;
        }

    }

    update(dt: number) {
    }


}
