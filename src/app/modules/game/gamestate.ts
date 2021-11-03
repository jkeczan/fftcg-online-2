import PlayerHand from './gameobjects/PlayerHand';
import PlayerBreakZone from './gameobjects/PlayerBreakZone';
import PlayerDamageZone from './gameobjects/PlayerDamageZone';
import PlayerBackupField from './gameobjects/PlayerBackupField';
import PlayerFowardZone from './gameobjects/PlayerFowardZone';
import PlayerDeck from './gameobjects/PlayerDeck';

export interface Gamestate {
    player1: PlayerState;
    player2: PlayerState;
    main: MainGameState;

}

export interface PlayerState {
    hand: PlayerHand;
    breakZone: PlayerBreakZone;
    damageZone: PlayerDamageZone;
    backupZone: PlayerBackupField;
    forwardZone: PlayerFowardZone;
    removedFromPlay: PlayerDeck;
}

export interface MainGameState {
    id: string;
    player1ID: string;
    player2ID: string;
}
