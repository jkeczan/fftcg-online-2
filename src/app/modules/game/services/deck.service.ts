export interface GameDeck {
    cards: Array<GameDeckCard>;
}

export interface GameDeckCard {
    serial_number: string;
    quantity: number;
}

export default class DeckService {

    constructor() {
    }

    getTurksStarterDeck(): GameDeck {
        return {
            cards: [
                {
                    serial_number: '15-140S',
                    quantity: 3
                },
                {
                    serial_number: '15-135S',
                    quantity: 3
                },
                {
                    serial_number: '15-137S',
                    quantity: 3
                },
                {
                    serial_number: '15-138S',
                    quantity: 3
                },
                {
                    serial_number: '11-088R',
                    quantity: 3
                },
                {
                    serial_number: '11-104R',
                    quantity: 2
                },
                {
                    serial_number: '11-105R',
                    quantity: 2
                },
                {
                    serial_number: '11-027R',
                    quantity: 3
                },
                {
                    serial_number: '11-040C',
                    quantity: 2
                },
                {
                    serial_number: '11-042C',
                    quantity: 2
                },
                {
                    serial_number: '15-136S',
                    quantity: 3
                },
                {
                    serial_number: '1-138C',
                    quantity: 2
                },
                {
                    serial_number: '2-108C',
                    quantity: 2
                },
                {
                    serial_number: '8-095C',
                    quantity: 3
                },
                {
                    serial_number: '1-040C',
                    quantity: 2
                },
                {
                    serial_number: '4-027C',
                    quantity: 2
                }, {
                    serial_number: '4-030C',
                    quantity: 2
                }, {
                    serial_number: '8-029C',
                    quantity: 2
                }, {
                    serial_number: '6-102R',
                    quantity: 2
                }, {
                    serial_number: '6-038R',
                    quantity: 2
                },

            ]
        };
    }

    getAvalanceStarterDeck(): GameDeck {
        return {
            cards: [
                {
                    serial_number: '15-139S',
                    quantity: 3
                },
                {
                    serial_number: '15-131S',
                    quantity: 3
                },
                {
                    serial_number: '15-132S',
                    quantity: 3
                },
                {
                    serial_number: '15-133S',
                    quantity: 3
                },
                {
                    serial_number: '15-134S',
                    quantity: 3
                },
                {
                    serial_number: '15-132S',
                    quantity: 3
                },
                {
                    serial_number: '9-062H',
                    quantity: 3
                },
                {
                    serial_number: '1-016C',
                    quantity: 2
                },
                {
                    serial_number: '10-007H',
                    quantity: 3
                },
                {
                    serial_number: '10-009C',
                    quantity: 3
                },
                {
                    serial_number: '1-105C',
                    quantity: 2
                },
                {
                    serial_number: '5-082C',
                    quantity: 3
                },
                {
                    serial_number: '8-085C',
                    quantity: 2
                },
                {
                    serial_number: '9-071C',
                    quantity: 3
                },
                {
                    serial_number: '1-011C',
                    quantity: 2
                },
                {
                    serial_number: '2-005C',
                    quantity: 2
                }, {
                    serial_number: '5-017C',
                    quantity: 2
                }, {
                    serial_number: '11-010C',
                    quantity: 2
                }, {
                    serial_number: '6-075R',
                    quantity: 2
                }, {
                    serial_number: '6-017C',
                    quantity: 2
                },

            ]
        };
    }

}
