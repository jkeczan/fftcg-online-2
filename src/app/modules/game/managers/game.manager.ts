import {Scene} from 'phaser';
import {BaseZone} from '../gameobjects/zones/base.zone';
import ZoneManager from './zone.manager';
import FFTCGCard from '../gameobjects/cards/fftcg_card';
import BaseContainer from '../gameobjects/zones/base.container';

export default class GameManager {
    private _scene: Scene;

    constructor(scene) {
        this.scene = scene;
    }

    moveCard(card: FFTCGCard, fromGameZone: BaseZone, toGameZone: BaseZone): void {
        console.log('Move Card from: ', fromGameZone.name, ' to ', toGameZone.name);
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

    get scene(): Phaser.Scene {
        return this._scene;
    }

    set scene(value: Phaser.Scene) {
        this._scene = value;
    }
}
