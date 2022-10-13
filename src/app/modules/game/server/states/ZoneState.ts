// 
// THIS FILE HAS BEEN GENERATED AUTOMATICALLY
// DO NOT CHANGE IT MANUALLY UNLESS YOU KNOW WHAT YOU'RE DOING
// 
// GENERATED USING @colyseus/schema 1.0.34
//

import {ArraySchema, Schema, type} from '@colyseus/schema';
import {GameCard} from './GameCard';

export class ZoneState extends Schema {
    @type('string') public zoneID!: string;
    @type([GameCard]) public cards: ArraySchema<GameCard> = new ArraySchema<GameCard>();
}
