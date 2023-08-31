// 
// THIS FILE HAS BEEN GENERATED AUTOMATICALLY
// DO NOT CHANGE IT MANUALLY UNLESS YOU KNOW WHAT YOU'RE DOING
// 
// GENERATED USING @colyseus/schema 1.0.34
// 

import { Schema, type, ArraySchema, MapSchema, SetSchema, DataChange } from '@colyseus/schema';


export class GameCard extends Schema {
    @type("string") public owner!: string;
    @type("string") public gameCardID!: string;
    @type("int8") public expectedQuantity!: number;
    @type("string") public zoneID!: string;
    @type("string") public serialNumber!: string;
    @type("string") public active!: string;
    @type("string") public frozen!: string;
}
