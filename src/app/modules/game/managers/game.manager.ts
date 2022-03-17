import {Scene} from 'phaser';
import {BaseZone} from '../gameobjects/zones/base.zone';
import ZoneManager from './zone.manager';
import FFTCGCard from '../gameobjects/cards/fftcg_card';

export default class GameManager {
    private _scene: Scene;

    constructor(scene) {
        this.scene = scene;
    }

    moveCard(card: FFTCGCard, fromGameZone: BaseZone, toGameZone: BaseZone): void {
        if (ZoneManager.isSameZone(fromGameZone, toGameZone)) {
            card.snapBack();
        } else {
            if (fromGameZone) {
                fromGameZone.removeCard(card);
            }

            if (toGameZone) {
                toGameZone.onDropped(card);
                card.setData('currentZone', toGameZone.name);
            }
        }
    }

    get scene(): Phaser.Scene {
        return this._scene;
    }

    set scene(value: Phaser.Scene) {
        this._scene = value;
    }
}
