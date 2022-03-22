import {ICardConfig} from './card_base';
import CardActions from './card_actions';

export enum FFTCGCardType {
    Forward = 'Forward',
    Backup = 'Backup',
    Monster = 'Monster',
    Summon = 'Summon'
}

export enum FFTCGCardElement {
    FIRE = 'Fire',
    WIND = 'Wind',
    WATER = 'Water',
    EARTH = 'Earth',
    LIGHTNING = 'Lightning',
    ICE = 'Ice',
    LIGHT = 'Light',
    DARK = 'Dark'
}

export enum FFTCGCardRarity {
    COMMON = 'Common',
    RARE = 'Rare',
    HERO = 'Hero',
    LEGEND = 'Legend'
}

export interface IFFTCGCardConfig extends ICardConfig {
    gameCardID: string;
    id: string;
    cost: number;
    elements: Array<FFTCGCardElement>;
    cardType: FFTCGCardType;
    jobs: Array<string>;
    categories: Array<string>;
    powerLevel: number;
    effectText: string;
    effects: Array<any>;
    isExBurst: boolean;
    rarity: string;
    isMultiPlay: boolean;
}

export interface IFFTCGCard {
    generateCP(): number;

    canGenerateCP(): boolean;

    requiredCP(): number;

    onPlay(): boolean;

    onBreak(): boolean;

    onPutIntoBreak(): boolean;
}

export default class FFTCGCard extends CardActions implements IFFTCGCard {
    private _gameCardID: string;
    private _id: string;
    private _cost: number;
    private _element: Array<FFTCGCardElement>;
    private _cardType: FFTCGCardType;
    private _jobs: Array<string>;
    private _categories: Array<string>;
    private _powerLevel: number;
    private _effectText: string;
    private _effects: Array<any>;
    private _isExBurst: boolean;
    private _rarity: FFTCGCardRarity;
    private _isMultiPlay: boolean;

    constructor(data: IFFTCGCardConfig) {
        super(data);
        this.isExBurst = data.isExBurst;
        this.gameCardID = data.gameCardID;
        this.cardType = data.cardType;
        this.cost = data.cost;
        this.element = data.elements;
    }

    freeze() {
        this.rotateCard(180);
    }

    canGenerateCP(): boolean {
        return true;
    }

    generateCP(): number {
        return 2;
    }

    requiredCP(): number {
        return this._cost;
    }

    onBreak(): boolean {
        return false;
    }

    onPlay(): boolean {
        return false;
    }

    onPutIntoBreak(): boolean {
        return false;
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get cost(): number {
        return this._cost;
    }

    set cost(value: number) {
        this._cost = value;
    }

    get cardType(): FFTCGCardType {
        return this._cardType;
    }

    set cardType(value: FFTCGCardType) {
        this._cardType = value;
    }

    get jobs(): Array<string> {
        return this._jobs;
    }

    set jobs(value: Array<string>) {
        this._jobs = value;
    }

    get categories(): Array<string> {
        return this._categories;
    }

    set categories(value: Array<string>) {
        this._categories = value;
    }

    get powerLevel(): number {
        return this._powerLevel;
    }

    set powerLevel(value: number) {
        this._powerLevel = value;
    }

    get effectText(): string {
        return this._effectText;
    }

    set effectText(value: string) {
        this._effectText = value;
    }

    get effects(): Array<any> {
        return this._effects;
    }

    set effects(value: Array<any>) {
        this._effects = value;
    }

    get element(): Array<FFTCGCardElement> {
        return this._element;
    }

    set element(value: Array<FFTCGCardElement>) {
        this._element = value;
    }

    get isExBurst(): boolean {
        return this._isExBurst;
    }

    set isExBurst(value: boolean) {
        this._isExBurst = value;
    }

    get rarity(): FFTCGCardRarity {
        return this._rarity;
    }

    set rarity(value: FFTCGCardRarity) {
        this._rarity = value;
    }

    get isMultiPlay(): boolean {
        return this._isMultiPlay;
    }

    set isMultiPlay(value: boolean) {
        this._isMultiPlay = value;
    }

    get gameCardID(): string {
        return this._gameCardID;
    }

    set gameCardID(value: string) {
        this._gameCardID = value;
    }
}
