import {GameZone, IGameZoneConfig} from './GameZone';
import {ICardGameZone} from './PlayerDeck';
import CardDraggable from './CardDraggable';

export default class PlayerDamageZone extends GameZone implements ICardGameZone {
    constructor(config: IGameZoneConfig) {
        super(config);
    }

    alignCardsInZone(card: CardDraggable) {
        this.scene.add.tween({
            targets: [card],
            ease: 'Cubic',
            duration: 500,
            y: this.y + (this.height / 2) - (card.eigthHeight * this.cards.length)
        });
    }

    shouldBeShown(): boolean {
        return true;
    }

    shouldBeSideways(): boolean {
        return true;
    }

    shouldStack(): boolean {
        return false;
    }
}
