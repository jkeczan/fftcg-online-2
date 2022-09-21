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
}
