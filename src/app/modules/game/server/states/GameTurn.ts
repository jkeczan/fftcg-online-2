// 
// THIS FILE HAS BEEN GENERATED AUTOMATICALLY
// DO NOT CHANGE IT MANUALLY UNLESS YOU KNOW WHAT YOU'RE DOING
// 
// GENERATED USING @colyseus/schema 1.0.34
// 

import { Schema, type, ArraySchema, MapSchema, SetSchema, DataChange } from '@colyseus/schema';
import { PlayerState } from './PlayerState'

export class GameTurn extends Schema {
    @type(PlayerState) public player: PlayerState = new PlayerState();
    @type("int8") public turnPhase!: number;
}
