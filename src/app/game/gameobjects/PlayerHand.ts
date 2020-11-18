import {ICardGameZone} from './PlayerDeck';
import {GameZone, IGameZoneConfig} from './GameZone';


export default class PlayerHand extends GameZone implements ICardGameZone {
    constructor(config: IGameZoneConfig) {
        super(config);
        this.cards = [];
        this.name = name;
        this.setRectangleDropZone(this.width, this.height);
        this.createBorder();
    }

    shouldBeShown(): boolean {
        return true;
    }

    shouldStack(): boolean {
        return false;
    }

    shouldBeSideways(): boolean {
        return false;
    }
}
