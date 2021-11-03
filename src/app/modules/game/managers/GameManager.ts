import {Scene} from 'phaser';
import {GameZone} from '../gameobjects/GameZone';
import CardDraggable from '../gameobjects/CardDraggable';
import ZoneManager from './ZoneManager';
import FFTCGCard from '../gameobjects/FftcgCard';

export default class GameManager {
    private _scene: Scene;

    constructor(scene) {
        this.scene = scene;
    }

    moveCard(card: FFTCGCard, fromGameZone: GameZone, toGameZone: GameZone): void {
        if (ZoneManager.isSameZone(fromGameZone, toGameZone)) {
            card.snapBack();
            return;
        }
        if (fromGameZone) {
            fromGameZone.removeCard(card);
        }

        toGameZone.addCard(card);
        toGameZone.onDropped(card);
        card.setData('currentZone', toGameZone.name);
    }

    get scene(): Phaser.Scene {
        return this._scene;
    }

    set scene(value: Phaser.Scene) {
        this._scene = value;
    }
}
