import HandZone from './gameobjects/zones/hand.zone';
import BreakZone from './gameobjects/zones/break.zone';
import DamageZone from './gameobjects/zones/damage.zone';
import BackupZone from './gameobjects/zones/backup.zone';
import PlayerFowardZone from './gameobjects/zones/forward.zone';
import DeckZone from './gameobjects/zones/deck.zone';

export interface Gamestate {
    player1: PlayerState;
    player2: PlayerState;
    main: MainGameState;

}

export interface PlayerState {
    hand: HandZone;
    breakZone: BreakZone;
    damageZone: DamageZone;
    backupZone: BackupZone;
    forwardZone: PlayerFowardZone;
    removedFromPlay: DeckZone;
}

export interface MainGameState {
    id: string;
    player1ID: string;
    player2ID: string;
}
