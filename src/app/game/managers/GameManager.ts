import {Scene} from 'phaser';
import {GameZone} from '../gameobjects/GameZone';
import CardDraggable from '../gameobjects/CardDraggable';
import ZoneManager from './ZoneManager';

export default class GameManager {
    private _scene: Scene;

    constructor(scene) {
        this.scene = scene;
    }

    moveCard(card: CardDraggable, fromGameZone: GameZone, toGameZone: GameZone): void {
        if (ZoneManager.isSameZone(fromGameZone, toGameZone)) {
            card.snapBack();
            return;
        }
        if (fromGameZone) {
            fromGameZone.removeCard(card);
        }

        toGameZone.addCard(card);
        card.setData('currentZone', toGameZone.name);
    }

    get scene(): Phaser.Scene {
        return this._scene;
    }

    set scene(value: Phaser.Scene) {
        this._scene = value;
    }
}
