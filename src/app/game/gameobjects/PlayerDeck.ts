import {GameZone, IGameZoneConfig} from './GameZone';

export interface ICardGameZone {
    shouldBeShown(): boolean;

    shouldStack(): boolean;

    shouldBeSideways(): boolean;
}

export default class PlayerDeck extends GameZone implements ICardGameZone {
    constructor(config: IGameZoneConfig) {
        super(config);
    }

    shouldBeShown(): boolean {
        return false;
    }

    shouldStack(): boolean {
        return true;
    }

    shouldBeSideways(): boolean {
        return false;
    }
}
