import {Scene} from 'phaser';
import BorderContainer from '../gameobjects/border_container';
import FFTCGCard from '../gameobjects/cards/card_fftcg';

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

    moveCard(card: FFTCGCard, fromGameZone: BorderContainer, toGameZone: BorderContainer): void {
        // TODO implement when card tracking is enabled

        // if (ZoneManager.isSameZone(fromGameZone, toGameZone)) {
        //     // TODO Figure out programatical snap back
        //     // card.snapBack();
        // } else {
        //     if (fromGameZone) {
        //         fromGameZone.removeCard(card);
        //     }
        //
        //     if (toGameZone) {
        //         toGameZone.addCard(card);
        //         card.setData('currentZone', toGameZone.name);
        //     }
        // }
    }
}
