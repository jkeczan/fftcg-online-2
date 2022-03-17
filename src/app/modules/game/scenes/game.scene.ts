import {Scene} from 'phaser';
import CardDraggable from '../gameobjects/cards/card_draggable';
import HandZone from '../gameobjects/zones/hand.zone';
import DeckZone from '../gameobjects/zones/deck.zone';
import {BaseZone} from '../gameobjects/zones/base.zone';
import GameManager from '../managers/game.manager';
import FFTCGCard from '../gameobjects/cards/fftcg_card';
import DeckService from '../services/deck.service';
import {v4 as uuidv4} from 'uuid';
import PlayerFieldZone from '../gameobjects/zones/player_field.zone';
import BreakZone from '../gameobjects/zones/break.zone';
import DamageZone from '../gameobjects/zones/damage.zone';
import RemoveFromGameZone from '../gameobjects/zones/remove_from_game.zone';
import Player from '../gameobjects/players/player.gameobject';
import DRAG_END = Phaser.Input.Events.DRAG_END;
import DROP = Phaser.Input.Events.DROP;
import DRAG = Phaser.Input.Events.DRAG;
import Sprite = Phaser.GameObjects.Sprite;
import Pointer = Phaser.Input.Pointer;
import DRAG_START = Phaser.Input.Events.DRAG_START;
import DRAG_ENTER = Phaser.Input.Events.DRAG_ENTER;
import DRAG_LEAVE = Phaser.Input.Events.DRAG_LEAVE;
import CursorKeys = Phaser.Types.Input.Keyboard.CursorKeys;
import POINTER_DOWN = Phaser.Input.Events.POINTER_DOWN;
import GameObject = Phaser.GameObjects.GameObject;

export default class GameScene extends Scene {
    private background: Sprite;
    private gameManager: GameManager;
    private deck: any;
    private deckService: DeckService;
    private cursors: CursorKeys;
    private player: Player;
    private opponent: Player;

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

        this.player = new Player({});
        this.opponent = new Player({});

        this.opponent.deck = new DeckZone({
            scene: this,
            name: 'Opponent_Deck',
            x: (zoneWidth / 2),
            y: (zoneHeight / 4),
            width: zoneWidth / 2,
            height: zoneHeight / 2,
            borderColor: 0x00ffff,
            opponent: true
        });

        this.player.deck = new DeckZone({
            scene: this,
            name: 'Deck',
            x: screenWidth - (zoneWidth / 2),
            y: screenHeight - (zoneHeight / 4),
            width: zoneWidth / 2,
            height: zoneHeight / 2,
            borderColor: 0x00ffff,
            opponent: false
        });

        this.player.hand = new HandZone({
            scene: this,
            name: 'Hand',
            x: screenWidth / 2,
            y: screenHeight - (zoneHeight / 4),
            width: screenWidth * .8,
            height: zoneHeight,
            borderColor: 0xffff00,
            opponent: false
        });

        this.opponent.hand = new HandZone({
            scene: this,
            name: 'Opponent_Hand',
            x: screenWidth / 2,
            y: (zoneHeight / 4),
            width: screenWidth * .8,
            height: zoneHeight,
            borderColor: 0xffff00,
            opponent: true
        });

        this.player.breakZone = new BreakZone({
            scene: this,
            name: 'Break',
            x: screenWidth - (zoneWidth / 2),
            y: this.player.deck.y - (this.player.deck.height) - zoneSpacing,
            width: zoneWidth / 2,
            height: zoneHeight / 2,
            borderColor: 0x00ffff,
            opponent: false
        });

        this.opponent.breakZone = new BreakZone({
            scene: this,
            name: 'Opponent_Break',
            x: (zoneWidth / 2),
            y: this.opponent.deck.y + (this.opponent.deck.height) + zoneSpacing,
            width: zoneWidth / 2,
            height: zoneHeight / 2,
            borderColor: 0x00ffff,
            opponent: true
        });

        this.player.removedFromGame = new RemoveFromGameZone({
            scene: this,
            name: 'RFG',
            x: screenWidth - (zoneWidth / 2),
            y: this.player.breakZone.y - (this.player.breakZone.height) - zoneSpacing,
            width: zoneWidth / 2,
            height: zoneHeight / 2,
            borderColor: 0x00ffff,
            opponent: false
        });

        this.opponent.removedFromGame = new RemoveFromGameZone({
            scene: this,
            name: 'Opponent_RFG',
            x: (zoneWidth / 2),
            y: this.opponent.breakZone.y + (this.opponent.breakZone.height) + zoneSpacing,
            width: zoneWidth / 2,
            height: zoneHeight / 2,
            borderColor: 0x00ffff,
            opponent: true
        });

        this.player.damageZone = new DamageZone({
            scene: this,
            name: 'Damage',
            x: zoneWidth / 4,
            y: screenHeight - (zoneHeight / 2),
            width: zoneHeight,
            height: zoneWidth * 2,
            borderColor: 0x00ffff,
            opponent: false
        });

        this.opponent.damageZone = new DamageZone({
            scene: this,
            name: 'Opponent_Damage',
            x: screenWidth - zoneWidth / 4,
            y: (zoneHeight / 2),
            width: zoneHeight,
            height: zoneWidth * 2,
            borderColor: 0x00ffff,
            opponent: true
        });

        this.player.field = new PlayerFieldZone({
            scene: this,
            name: 'Players Field',
            x: screenWidth / 2,
            y: this.player.hand.y - this.player.hand.height - (zoneHeight / 4) + zoneSpacing,
            width: screenWidth * .8,
            height: zoneHeight * 1.2,
            borderColor: 0xA020F0,
            opponent: false
        });

        this.opponent.field = new PlayerFieldZone({
            scene: this,
            name: 'Opponents_Players Field',
            x: screenWidth / 2,
            // y: 500,
            y: this.opponent.hand.y + (this.opponent.hand.height) + (zoneHeight / 4) - zoneSpacing,
            width: screenWidth * .8,
            height: zoneHeight * 1.2,
            borderColor: 0xA020F0,
            opponent: true
        });

        await this.createDeck(this.player.deck);
        await this.createDeck(this.opponent.deck);

        this.input.on(POINTER_DOWN, (pointer: Pointer, cardTargets: CardDraggable[]) => {
            if (pointer.rightButtonDown()) {
                if (cardTargets[0].isTapped) {
                    cardTargets[0].untap();
                } else {
                    cardTargets[0].tap();
                }

            } else if (pointer.leftButtonDown()) {

            }
        });

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

        this.input.on(DRAG_END, (pointer, gameObject: CardDraggable, dropped, zone: GameObject) => {
            if (!dropped) {
                gameObject.snapBack();
            } else {
                gameObject.dragging = false;
                gameObject.onDragEnd(pointer, gameObject, dropped, null);
            }

        });
    }

    async createDeck(deck: DeckZone) {
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
            deck.addCard(newCard);
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
            Backup: this.player.field.backupZone,
            Hand: this.player.hand,
            Forward: this.player.field.forwardZone,
            Damage: this.player.damageZone,
            Deck: this.player.deck,
            Break: this.player.breakZone,
            RFG: this.player.removedFromGame,
            Opponent_Backup: this.opponent.field.backupZone,
            Opponent_Hand: this.opponent.hand,
            Opponent_Forward: this.opponent.field.forwardZone,
            Opponent_Damage: this.opponent.damageZone,
            Opponent_Deck: this.opponent.deck,
            Opponent_Break: this.opponent.breakZone,
            Opponent_RFG: this.opponent.removedFromGame
        };

        return zones[zone];
    }
}
