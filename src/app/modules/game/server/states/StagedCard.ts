// 
// THIS FILE HAS BEEN GENERATED AUTOMATICALLY
// DO NOT CHANGE IT MANUALLY UNLESS YOU KNOW WHAT YOU'RE DOING
// 
// GENERATED USING @colyseus/schema 1.0.34
// 

import { Schema, type, ArraySchema, MapSchema, SetSchema, DataChange } from '@colyseus/schema';


export class StagedCard extends Schema {
    @type("string") public cardID!: string;
    @type("string") public playerID!: string;
    @type("int8") public stagedCP!: number;
    @type("int8") public paidCP!: number;
}
