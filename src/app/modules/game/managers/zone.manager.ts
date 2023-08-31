import BorderContainer from '../gameobjects/border_container';
import FFTCGCard from '../gameobjects/cards/card_fftcg';
import Container = Phaser.GameObjects.Container;

export default class ZoneManager {
    constructor() {
    }

    static isSameZone(gameZone1: BorderContainer | Container, gameZone2: BorderContainer | Container): boolean {
        return gameZone1?.name === gameZone2.name;
    }

    static isCardInZone(cardToFind: FFTCGCard, zone: BorderContainer): boolean {
        // TODO Implement when new sprite tracking is implemented
        // const cardFound = zone.cards.find((card) => {
        //     return card.gameCardID === cardToFind.gameCardID;
        // });
        //
        // return !!cardFound;

        return false;
    }

}
