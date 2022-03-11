import HandZone from './gameobjects/zones/Hand.zone';
import BreakZone from './gameobjects/zones/Break.zone';
import DamageZone from './gameobjects/zones/Damage.zone';
import BackupZone from './gameobjects/zones/Backup.zone';
import PlayerFowardZone from './gameobjects/zones/Forward.zone';
import DeckZone from './gameobjects/zones/Deck.zone';

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
