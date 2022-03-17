import {IGameZoneConfig} from './base.zone';
import BreakZone from './break.zone';

export default class RemoveFromGameZone extends BreakZone {
    constructor(config: IGameZoneConfig) {
        super(config);
    }
}
