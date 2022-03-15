import {Scene} from 'phaser';
import CardDraggable from '../gameobjects/CardDraggable';
import HandZone from '../gameobjects/zones/Hand.zone';
import DeckZone from '../gameobjects/zones/Deck.zone';
import {BaseZone} from '../gameobjects/zones/Base.zone';
import GameManager from '../managers/GameManager';
import FFTCGCard from '../gameobjects/FftcgCard';
import DeckService from '../services/DeckService';
import {v4 as uuidv4} from 'uuid';
import PlayerFieldZone from '../gameobjects/zones/PlayerField.zone';
import BreakZone from '../gameobjects/zones/Break.zone';
import DamageZone from '../gameobjects/zones/Damage.zone';
import DRAG_END = Phaser.Input.Events.DRAG_END;
import DROP = Phaser.Input.Events.DROP;
import DRAG = Phaser.Input.Events.DRAG;
import Sprite = Phaser.GameObjects.Sprite;
import Pointer = Phaser.Input.Pointer;
import DRAG_START = Phaser.Input.Events.DRAG_START;
import DRAG_ENTER = Phaser.Input.Events.DRAG_ENTER;
import DRAG_LEAVE = Phaser.Input.Events.DRAG_LEAVE;
import CursorKeys = Phaser.Types.Input.Keyboard.CursorKeys;


export const ZONE_LAYOUT_SPECS = {
    HEIGHT: 250,
    WIDTH: 225,
    SPACING: 5
};


export default class GameScene extends Scene {
    private playerField: PlayerFieldZone;
    private playerHand: HandZone;
    private playerDeck: DeckZone;
    private playerBreakZone: BreakZone;
    private playerDamageZone: DamageZone;
    private background: Sprite;
    private gameManager: GameManager;
    private deck: any;
    private deckService: DeckService;
    private cursors: CursorKeys;

    constructor() {
        super('MainScene');

        this.deckService = new DeckService();
        this.deck = this.deckService.getDeck();
    }

    preload() {
        this.load.image('card9', '../../../assets/game/cards/12-119L.jpg');
        this.load.image('card-back', '../../../assets/game/cards/card_back.jpg');
        this.load.image('background', '../../../assets/background.jpg');
        this.load.image('card_border', '../../../assets/card_border_rpg.png');
        this.load.atlas('flares', 'assets/flares.png', 'assets/flares.json');
        // this.load.audio('ex-burst', '../../../assets/sounds/ex-burst.mp3');
        // this.load.audio('ex-burst-2', '../../../assets/sounds/ex-burst-2.mp3');
    }

    async create() {
        // this.socketManager = new SocketManager();
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;
        console.log(screenHeight, screenWidth);
        this.background = this.add.sprite(this.cameras.main.width / 2, this.cameras.main.height / 2, 'background');
        const scaleX = this.cameras.main.width / this.background.width;
        const scaleY = this.cameras.main.height / this.background.height;
        const scale = Math.max(scaleX, scaleY);
        this.background.setScale(scale).setScrollFactor(0);
        this.background.setAlpha(.3, .3, .3, .3);
        this.background.setSize(screenWidth, screenHeight);
        this.gameManager = new GameManager(this);

        const zoneWidth = screenWidth * .1;
        const zoneHeight = screenHeight * .25;
        const zoneSpacing = zoneHeight / 10;

        this.cursors = this.input.keyboard.createCursorKeys();
        this.playerDeck = new DeckZone({
            scene: this,
            name: 'Deck',
            x: screenWidth - (zoneWidth / 2),
            y: screenHeight - (zoneHeight / 2),
            width: zoneWidth / 2,
            height: zoneHeight / 2,
            borderColor: 0x00ffff
        });

        this.playerHand = new HandZone({
            scene: this,
            name: 'Hand',
            x: screenWidth / 2,
            y: screenHeight - (zoneHeight / 2),
            width: screenWidth * .8,
            height: zoneHeight,
            borderColor: 0xffff00
        });

        this.playerBreakZone = new BreakZone({
            scene: this,
            name: 'Break',
            x: screenWidth - (zoneWidth / 2),
            y: this.playerHand.y - (this.playerDeck.height) - zoneSpacing,
            width: zoneWidth / 2,
            height: zoneHeight / 2 ,
            borderColor: 0x00ffff
        });

        this.playerDamageZone = new DamageZone({
            scene: this,
            name: 'Damage',
            x: zoneWidth / 4,
            y: screenHeight - (zoneHeight),
            width: zoneHeight,
            height: zoneWidth * 2,
            borderColor: 0x00ffff
        });

        this.playerField = new PlayerFieldZone({
            scene: this,
            name: 'Players Field',
            x: screenWidth / 2,
            y: this.playerHand.y - (this.playerHand.height * 1.5) - zoneSpacing,
            width: screenWidth * .8,
            height: zoneHeight * 2,
            borderColor: 0xA020F0
        });

        await this.createDeck();

        this.input.on(DRAG_START, (pointer, card: CardDraggable) => {
            card.setStartDragPosition();
        });

        this.input.on(DRAG_ENTER, (pointer, card: CardDraggable, zone: BaseZone) => {
            if (zone.name !== this.getZone(card.getData('currentZone')).name) {
                zone.highlightZone();
            }
        });

        this.input.on(DRAG_LEAVE, (pointer, card: CardDraggable, zone: BaseZone) => {
            zone.unhighlightZone();
        });

        this.input.on(DRAG, (pointer, card: CardDraggable, dragX, dragY) => {
            if (!card.draggable) {
                return;
            }
            card.dragging = true;
            card.updateGamePosition(dragX, dragY);
        });

        this.input.on(DROP, (pointer, gameObject: CardDraggable, dropZone: BaseZone) => {
            gameObject.onDropped(pointer, gameObject, dropZone);
            dropZone.unhighlightZone();
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
            const newID = uuidv4();
            const newCard = new FFTCGCard({
                gameCardID: newID,
                scene: this,
                name: `card-${card.card.serial_number}`,
                image: 'card9',
                imageBack: 'card-back',
                card: 'playercard',
                depth: 5,
                ondragend: (pointer, cardTarget, dropped) => {
                    if (!dropped) {
                        cardTarget.snapBack();
                    }
                },
                ondropped: (pointer: Pointer, gameObject: FFTCGCard, dropZone: BaseZone) => {
                    gameObject.setStartDragPosition();
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

    update() {
        if (this.cursors.left.isDown) {
            this.cameras.main.x -= 6;
        }

        if (this.cursors.down.isDown) {
            this.cameras.main.y += 6;
        }

        if (this.cursors.right.isDown) {
            this.cameras.main.x += 6;
        }

        if (this.cursors.up.isDown) {
            this.cameras.main.y -= 6;
        }
    }

    getZone(zone: string): BaseZone {
        const zones: { [index: string]: BaseZone } = {
            Backup: this.playerField.backupZone,
            Hand: this.playerHand,
            Forward: this.playerField.forwardZone,
            Damage: this.playerDamageZone,
            Deck: this.playerDeck,
            Break: this.playerBreakZone
        };

        return zones[zone];
    }
}
