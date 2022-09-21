// 
// THIS FILE HAS BEEN GENERATED AUTOMATICALLY
// DO NOT CHANGE IT MANUALLY UNLESS YOU KNOW WHAT YOU'RE DOING
// 
// GENERATED USING @colyseus/schema 1.0.34
// 

import { Schema, type, ArraySchema, MapSchema, SetSchema, DataChange } from '@colyseus/schema';
import { CardState } from './CardState'

export class ZoneState extends Schema {
    @type("string") public zoneID!: string;
    @type([ CardState ]) public cards: ArraySchema<CardState> = new ArraySchema<CardState>();
}
