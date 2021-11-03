import {Scene} from 'phaser';
import CardDraggable from '../gameobjects/CardDraggable';
import PlayerHand from '../gameobjects/PlayerHand';
import PlayerDeck from '../gameobjects/PlayerDeck';
import PlayerBackupField from '../gameobjects/PlayerBackupField';
import PlayerDamageZone from '../gameobjects/PlayerDamageZone';
import PlayerBreakZone from '../gameobjects/PlayerBreakZone';
import {GameZone} from '../gameobjects/GameZone';
import PlayerFowardZone from '../gameobjects/PlayerFowardZone';
import GameManager from '../managers/GameManager';
import FFTCGCard from '../gameobjects/FftcgCard';
import {SocketManager} from '../managers/SocketManager';
import DeckService from '../services/DeckService';
import DRAG_END = Phaser.Input.Events.DRAG_END;
import DROP = Phaser.Input.Events.DROP;
import DRAG = Phaser.Input.Events.DRAG;
import Sprite = Phaser.GameObjects.Sprite;
import Pointer = Phaser.Input.Pointer;


export const ZONE_LAYOUT_SPECS = {
    HEIGHT: 150,
    WIDTH: 125,
    SPACING: 5
};


export default class GameScene extends Scene {
    private playerHand: PlayerHand;
    private playerDeck: PlayerDeck;
    private playerBackupZone: PlayerBackupField;
    private playerDamageZone: PlayerDamageZone;
    private playerBreakZone: PlayerBreakZone;
    private playerForwardZone: PlayerFowardZone;
    private background: Sprite;
    private gameManager: GameManager;
    private socketManager: SocketManager;
    private deck: any;
    private deckService: DeckService;

    constructor() {
        super('MainScene');

        this.deckService = new DeckService();
        this.deck = this.deckService.getDeck();
    }

    preload() {
        // this.load.image('card0', '../../../assets/game/cards/12-004R.jpg');
        // this.load.image('card1', '../../../assets/game/cards/12-025H.jpg');
        // this.load.image('card2', '../../../assets/game/cards/12-039C.jpg');
        // this.load.image('card3', '../../../assets/game/cards/12-074H.jpg');
        // this.load.image('card4', '../../../assets/game/cards/12-095R.jpg');
        // this.load.image('card5', '../../../assets/game/cards/12-109L.jpg');
        // this.load.image('card6', '../../../assets/game/cards/12-110L.jpg');
        // this.load.image('card7', '../../../assets/game/cards/12-113C.jpg');
        // this.load.image('card8', '../../../assets/game/cards/12-116L.jpg');
        this.load.image('card9', '../../../assets/game/cards/12-119L.jpg');
        this.load.image('card-back', '../../../assets/game/cards/card_back.jpg');
        this.load.image('background', '../../../assets/background.jpg');
        // this.load.audio('ex-burst', '../../../assets/sounds/ex-burst.mp3');
        // this.load.audio('ex-burst-2', '../../../assets/sounds/ex-burst-2.mp3');
    }

    async create() {
        this.socketManager = new SocketManager();
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        this.background = this.add.sprite(this.cameras.main.width / 2, this.cameras.main.height / 2, 'background');
        const scaleX = this.cameras.main.width / this.background.width;
        const scaleY = this.cameras.main.height / this.background.height;
        const scale = Math.max(scaleX, scaleY);
        this.background.setScale(scale).setScrollFactor(0);
        this.background.setAlpha(.3, .3, .3, .3);
        this.background.setSize(screenWidth, screenHeight);
        this.gameManager = new GameManager(this);

        this.playerHand = new PlayerHand({
            scene: this,
            name: 'Hand',
            x: screenWidth / 2,
            y: screenHeight - (ZONE_LAYOUT_SPECS.HEIGHT) + ZONE_LAYOUT_SPECS.HEIGHT / 2,
            width: screenWidth * .7,
            height: ZONE_LAYOUT_SPECS.HEIGHT
        });

        this.playerBackupZone = new PlayerBackupField({
            scene: this,
            name: 'Backup',
            x: screenWidth / 2,
            y: screenHeight - ((ZONE_LAYOUT_SPECS.HEIGHT * 2) + ZONE_LAYOUT_SPECS.SPACING) + ZONE_LAYOUT_SPECS.HEIGHT / 2,
            width: screenWidth * .7,
            height: ZONE_LAYOUT_SPECS.HEIGHT
        });

        this.playerForwardZone = new PlayerFowardZone({
            scene: this,
            name: 'Forward',
            x: screenWidth / 2,
            y: screenHeight - ((ZONE_LAYOUT_SPECS.HEIGHT * 3) + ZONE_LAYOUT_SPECS.SPACING * 2) + ZONE_LAYOUT_SPECS.HEIGHT / 2,
            width: screenWidth * .7,
            height: ZONE_LAYOUT_SPECS.HEIGHT
        });

        this.playerDeck = new PlayerDeck({
            scene: this,
            name: 'Deck',
            x: screenWidth - ZONE_LAYOUT_SPECS.WIDTH,
            y: screenHeight - ((ZONE_LAYOUT_SPECS.HEIGHT * 2) + ZONE_LAYOUT_SPECS.SPACING),
            width: ZONE_LAYOUT_SPECS.WIDTH,
            height: ZONE_LAYOUT_SPECS.HEIGHT
        });

        const damageZoneHeight = (this.playerHand.height * 2) + (this.playerHand.y - this.playerBackupZone.y) / 2;

        this.playerDamageZone = new PlayerDamageZone({
            scene: this,
            name: 'Damage',
            x: 125,
            y: window.screen.height - damageZoneHeight - ZONE_LAYOUT_SPECS.SPACING,
            width: ZONE_LAYOUT_SPECS.WIDTH + ZONE_LAYOUT_SPECS.SPACING,
            height: damageZoneHeight
        });

        this.playerBreakZone = new PlayerBreakZone({
            scene: this,
            name: 'BreakZone',
            x: screenWidth - ZONE_LAYOUT_SPECS.WIDTH,
            y: screenHeight - ZONE_LAYOUT_SPECS.HEIGHT,
            width: ZONE_LAYOUT_SPECS.WIDTH,
            height: ZONE_LAYOUT_SPECS.HEIGHT
        });

        await this.createDeck();

        this.input.on(DRAG, (pointer, gameObject, dragX, dragY) => {
            if (!gameObject.draggable) {
                return;
            }
            gameObject.dragging = true;
            gameObject.x = dragX;
            gameObject.y = dragY;
        });

        this.input.on(DROP, (pointer, gameObject: CardDraggable, dropZone: GameZone) => {
            gameObject.onDropped(pointer, gameObject, dropZone);

            this.children.bringToTop(gameObject);
        });

        this.input.on(DRAG_END, (pointer, gameObject: CardDraggable, dropped) => {
            if (!dropped) {
                gameObject.snapBack();
            }
            gameObject.dragging = false;
            gameObject.onDragEnd(pointer, gameObject, dropped, null);
        });
    }

    async createDeck(): Promise<Array<FFTCGCard>> {
        const deck = new Array(50);


        for (const card of this.deck.cards) {
            const newCard = new FFTCGCard({
                scene: this,
                name: `card-${card.card.serial_number}`,
                x: this.playerDeck.x,
                y: this.playerDeck.y,
                // x: 500,
                // y: row,
                image: 'card9',
                imageBack: 'card-back',
                card: 'playercard',
                depth: 5,
                ondragend: (pointer, gameObject, dropped, gameZone) => {
                    console.log('End Drag');
                },
                ondropped: (pointer: Pointer, gameObject: FFTCGCard, dropZone: GameZone) => {
                    const currentZoneKey = gameObject.getData('currentZone');
                    const currentZone = this.getZone(currentZoneKey);
                    this.gameManager.moveCard(gameObject, currentZone, dropZone);

                },
                id: card.card.serial_number,
                cost: card.card.cost,
                elements: card.card.elements,
                cardType: card.card.type,
                jobs: [card.card.job],
                categories: [card.card.category],
                powerLevel: card.card.power,
                effectText: card.card.abilities.join(','),
                effects: [],
                isExBurst: card.card.is_ex_burst,
                rarity: card.card.rarity,
                isMultiPlay: card.card.is_multi_playable,
            });

            newCard.setData('currentZone', 'Deck');
            deck.push(newCard);
        }

        // this.load.once(Phaser.Loader.Events.COMPLETE, (data) => {
        //     // for (const card of (deck || [])) {
        //     //     card.updateImage(card.id);
        //     // }
        //
        //     for (let c = 0; c < deck.length; c++) {
        //         const card: FFTCGCard = deck[c];
        //         card.updateCardImage(card.id);
        //     }
        // });
        // this.load.start();

        return deck;
    }

    getZone(zone: string): GameZone {
        const zones: { [index: string]: GameZone } = {
            Backup: this.playerBackupZone,
            Hand: this.playerHand,
            Forward: this.playerForwardZone,
            Damage: this.playerDamageZone,
            Deck: this.playerDeck,
            Break: this.playerBreakZone
        };

        return zones[zone];
    }
}
