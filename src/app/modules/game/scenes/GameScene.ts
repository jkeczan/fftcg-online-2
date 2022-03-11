import {Scene} from 'phaser';
import CardDraggable from '../gameobjects/CardDraggable';
import HandZone from '../gameobjects/zones/Hand.zone';
import DeckZone from '../gameobjects/zones/Deck.zone';
import {BaseZone} from '../gameobjects/zones/Base.zone';
import GameManager from '../managers/GameManager';
import FFTCGCard from '../gameobjects/FftcgCard';
import DeckService from '../services/DeckService';
import {uuid4} from '@capacitor/core/dist/esm/util';
import PlayerFieldZone from '../gameobjects/zones/PlayerField.zone';
import DRAG_END = Phaser.Input.Events.DRAG_END;
import DROP = Phaser.Input.Events.DROP;
import DRAG = Phaser.Input.Events.DRAG;
import Sprite = Phaser.GameObjects.Sprite;
import Pointer = Phaser.Input.Pointer;


export const ZONE_LAYOUT_SPECS = {
    HEIGHT: 250,
    WIDTH: 225,
    SPACING: 5
};


export default class GameScene extends Scene {
    private playerField: PlayerFieldZone;
    private playerHand: HandZone;
    private playerDeck: DeckZone;
    private background: Sprite;
    private gameManager: GameManager;
    private deck: any;
    private deckService: DeckService;

    constructor() {
        super('MainScene');

        this.deckService = new DeckService();
        this.deck = this.deckService.getDeck();
    }

    preload() {
        this.load.image('card9', '../../../assets/game/cards/12-119L.jpg');
        this.load.image('card-back', '../../../assets/game/cards/card_back.jpg');
        this.load.image('background', '../../../assets/background.jpg');
        // this.load.audio('ex-burst', '../../../assets/sounds/ex-burst.mp3');
        // this.load.audio('ex-burst-2', '../../../assets/sounds/ex-burst-2.mp3');
    }

    async create() {
        // this.socketManager = new SocketManager();
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

        this.playerDeck = new DeckZone({
            scene: this,
            name: 'Deck',
            // x: screenWidth / 2,
            x: screenWidth - (ZONE_LAYOUT_SPECS.WIDTH / 2),
            // y: screenHeight / 2,
            y: screenHeight - (ZONE_LAYOUT_SPECS.HEIGHT / 2),
            width: ZONE_LAYOUT_SPECS.WIDTH,
            height: ZONE_LAYOUT_SPECS.HEIGHT,
            borderColor: 0x00ffff
        });

        this.playerField = new PlayerFieldZone({
            scene: this,
            name: 'Players Field',
            // x: screenWidth / 2,
            x: screenWidth / 2,
            y: (screenHeight / 2) + ZONE_LAYOUT_SPECS.HEIGHT / 2,
            width: screenWidth * .7,
            height: ZONE_LAYOUT_SPECS.HEIGHT * 2,
            borderColor: 0xA020F0
        });

        this.playerHand = new HandZone({
            scene: this,
            name: 'Hand',
            x: screenWidth / 2,
            y: screenHeight - (ZONE_LAYOUT_SPECS.HEIGHT / 2),
            width: screenWidth * .7,
            height: ZONE_LAYOUT_SPECS.HEIGHT,
            borderColor: 0xffff00
        });

        await this.createDeck();

        this.input.on(DRAG, (pointer, gameObject: CardDraggable, dragX, dragY) => {
            if (!gameObject.draggable) {
                return;
            }
            gameObject.dragging = true;
            gameObject.updateGamePosition(dragX, dragY);
        });

        this.input.on(DROP, (pointer, gameObject: CardDraggable, dropZone: BaseZone) => {
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

    async createDeck() {
        for (const card of this.deck.cards) {
            const newCard = new FFTCGCard({
                gameCardID: uuid4(),
                scene: this,
                name: `card-${card.card.serial_number}`,
                image: 'card9',
                imageBack: 'card-back',
                card: 'playercard',
                depth: 5,
                ondragend: () => {
                    console.log('End Drag');
                },
                ondropped: (pointer: Pointer, gameObject: FFTCGCard, dropZone: BaseZone) => {
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
            this.playerDeck.addCard(newCard);
        }
    }

    getZone(zone: string): BaseZone {
        const zones: { [index: string]: BaseZone } = {
            Backup: this.playerField.backupZone,
            Hand: this.playerHand,
            Forward: this.playerField.forwardZone,
            // Damage: this.playerDamageZone,
            Deck: this.playerDeck,
            // Break: this.playerBreakZone
        };

        return zones[zone];
    }
}
