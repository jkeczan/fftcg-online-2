import {BaseZone} from '../gameobjects/zones/Base.zone';
import CardDraggable from '../gameobjects/CardDraggable';
import {ZONE_LAYOUT_SPECS} from '../scenes/GameScene';

export default class ZoneManager {
    constructor() {
    }

    static isSameZone(gameZone1: BaseZone, gameZone2: BaseZone): boolean {
        return gameZone1?.name === gameZone2.name;
    }

}
