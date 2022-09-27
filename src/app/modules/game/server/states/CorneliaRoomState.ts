// 
// THIS FILE HAS BEEN GENERATED AUTOMATICALLY
// DO NOT CHANGE IT MANUALLY UNLESS YOU KNOW WHAT YOU'RE DOING
// 
// GENERATED USING @colyseus/schema 1.0.34
// 

import { Schema, type, ArraySchema, MapSchema, SetSchema, DataChange } from '@colyseus/schema';
import { StagedCard } from './StagedCard'
import { GameTurn } from './GameTurn'
import { RequestedPriority } from './RequestedPriority'
import { PlayerState } from './PlayerState'

export class CorneliaRoomState extends Schema {
    @type("uint8") public playerCount!: number;
    @type("string") public playerTurn!: string;
    @type("int8") public gamePhase!: number;
    @type("int16") public winningPlayer!: number;
    @type("string") public cardToPlay!: string;
    @type("int8") public playersReady!: number;
    @type("int8") public gameSceneLoaded!: number;
    @type("boolean") public dicedRolled!: boolean;
    @type("string") public playerGoingFirst!: string;
    @type("boolean") public isFirstTurn!: boolean;
    @type(StagedCard) public stagedCard: StagedCard = new StagedCard();
    @type(GameTurn) public turn: GameTurn = new GameTurn();
    @type([ RequestedPriority ]) public priorities: ArraySchema<RequestedPriority> = new ArraySchema<RequestedPriority>();
    @type({ map: PlayerState }) public players: MapSchema<PlayerState> = new MapSchema<PlayerState>();
}
