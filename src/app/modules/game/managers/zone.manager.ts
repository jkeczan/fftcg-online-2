import FFTCGCard from '../gameobjects/cards/card_fftcg';
import {BaseZone} from '../gameobjects/zones/base.zone';
import Container = Phaser.GameObjects.Container;

export default class ZoneManager {
    constructor() {
    }

    static isSameZone(gameZone1: BaseZone | Container, gameZone2: BaseZone | Container): boolean {
        return gameZone1?.name === gameZone2.name;
    }

    static isCardInZone(cardToFind: FFTCGCard, zone: BaseZone): boolean {
        const cardFound = zone.cards.find((card) => {
            return card.gameCardID === cardToFind.gameCardID;
        });

        return !!cardFound;
    }

}
