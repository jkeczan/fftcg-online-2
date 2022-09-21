// 
// THIS FILE HAS BEEN GENERATED AUTOMATICALLY
// DO NOT CHANGE IT MANUALLY UNLESS YOU KNOW WHAT YOU'RE DOING
// 
// GENERATED USING @colyseus/schema 1.0.34
// 

import { Schema, type, ArraySchema, MapSchema, SetSchema, DataChange } from '@colyseus/schema';
import { ZoneState } from './ZoneState'

export class PlayerState extends Schema {
    @type("string") public sessionID!: string;
    @type("int16") public seat!: number;
    @type("string") public userID!: string;
    @type("uint8") public damageTaken!: number;
    @type("boolean") public hasPriority!: boolean;
    @type("int8") public diceRoll!: number;
    @type("boolean") public confirmedHand!: boolean;
    @type("string") public deckID!: string;
    @type(ZoneState) public deckZone: ZoneState = new ZoneState();
    @type(ZoneState) public backupZone: ZoneState = new ZoneState();
    @type(ZoneState) public forwardZone: ZoneState = new ZoneState();
    @type(ZoneState) public handZone: ZoneState = new ZoneState();
    @type(ZoneState) public damageZone: ZoneState = new ZoneState();
    @type(ZoneState) public rfgZone: ZoneState = new ZoneState();
    @type(ZoneState) public voidZone: ZoneState = new ZoneState();
    @type(ZoneState) public breakZone: ZoneState = new ZoneState();
}
