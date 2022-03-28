import {Scene} from 'phaser';
import FFTCGCard from '../gameobjects/cards/fftcg_card';
import {BaseZone} from '../gameobjects/zones/base.zone';
import ZoneManager from './zone.manager';

export default class GameManager {
    constructor(scene) {
        this.scene = scene;
    }

    private _scene: Scene;

    get scene(): Phaser.Scene {
        return this._scene;
    }

    set scene(value: Phaser.Scene) {
        this._scene = value;
    }

    moveCard(card: FFTCGCard, fromGameZone: BaseZone, toGameZone: BaseZone): void {
        if (ZoneManager.isSameZone(fromGameZone, toGameZone)) {
            card.snapBack();
        } else {
            if (fromGameZone) {
                fromGameZone.removeCard(card);
            }

            if (toGameZone) {
                toGameZone.addCard(card);
                card.setData('currentZone', toGameZone.name);
            }
        }
    }
}
