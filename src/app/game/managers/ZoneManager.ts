import {GameZone} from '../gameobjects/GameZone';
import CardDraggable from '../gameobjects/CardDraggable';
import {ZONE_LAYOUT_SPECS} from '../scenes/GameScene';

export default class ZoneManager {
    constructor() {
    }

    static isSameZone(gameZone1: GameZone, gameZone2: GameZone): boolean {
        return gameZone1?.name === gameZone2.name;
    }

}
