import {BaseZone} from '../gameobjects/zones/base.zone';

export default class ZoneManager {
    constructor() {
    }

    static isSameZone(gameZone1: BaseZone, gameZone2: BaseZone): boolean {
        return gameZone1?.name === gameZone2.name;
    }

}
