// 
// THIS FILE HAS BEEN GENERATED AUTOMATICALLY
// DO NOT CHANGE IT MANUALLY UNLESS YOU KNOW WHAT YOU'RE DOING
// 
// GENERATED USING @colyseus/schema 1.0.34
// 

import { Schema, type, ArraySchema, MapSchema, SetSchema, DataChange } from '@colyseus/schema';


export class PlayerState extends Schema {
    @type("string") public sessionID!: string;
    @type("int16") public seat!: number;
    @type("string") public userID!: string;
    @type("uint8") public damageTaken!: number;
    @type("boolean") public hasPriority!: boolean;
}
