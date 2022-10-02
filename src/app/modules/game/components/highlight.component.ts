import {Scene} from 'phaser';
import {IComponent} from '../managers/component.system';
import {BaseComponent} from './base.component';
import GameObject = Phaser.GameObjects.GameObject;
import ParticleEmitter = Phaser.GameObjects.Particles.ParticleEmitter;
import ParticleEmitterManager = Phaser.GameObjects.Particles.ParticleEmitterManager;

export class HighlightComponent extends BaseComponent implements IComponent {
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
        }
    }

    init(gameObject: GameObject): IComponent {
        this.gameObject = gameObject;
        return this;
    }

    start() {
        // const rect = this.spriteImage.getBounds();

        const foundEmitter = this.particleManager.emitters.getByName('highlight_emitter');

        if (!foundEmitter) {
            this.emitter = this.particleManager.createEmitter({
                name: 'highlight_emitter',
                frame: ['red', 'yellow', 'green', 'blue'],
                speed: 48,
                lifespan: 1500,
                quantity: 12,
                frequency: 4,
                scale: {start: 0.4, end: 0},
                blendMode: 'ADD',
                particleBringToTop: true,
                emitZone: {type: 'edge', source: this.scene.add.rectangle(500, 500, 400, 300).getBounds(), quantity: 48}
            });
        } else {
            this.emitter = foundEmitter;
        }

    }

    update(dt: number) {
    }


}
