import {Scene} from 'phaser';
import {BaseZone} from '../gameobjects/zones/base.zone';
import ZoneManager from './zone.manager';
import FFTCGCard from '../gameobjects/cards/fftcg_card';
import Container = Phaser.GameObjects.Container;
import BaseContainer from '../gameobjects/zones/base.container';

export default class GameManager {
    private _scene: Scene;

    constructor(scene) {
        this.scene = scene;
    }

    moveCard(card: FFTCGCard, fromGameZone: BaseZone, toGameZone: BaseZone | BaseContainer): void {
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
