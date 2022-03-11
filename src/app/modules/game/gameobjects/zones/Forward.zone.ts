import {BaseZone, IGameZoneConfig} from './Base.zone';
import {ICardGameZone} from './Deck.zone';

export default class ForwardZone extends BaseZone implements ICardGameZone {
    constructor(config: IGameZoneConfig) {
        super(config);
    }

    shouldBeShown(): boolean {
        return true;
    }
}
