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
import RexUIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin.js';
import GameTurnUI from '../gameobjects/game_turn_ui';
import GameState, {GameStates} from '../states/game.state';
import CardActions from '../gameobjects/cards/card_actions';
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


export default class GameScene extends Scene {
    private rexUI: RexUIPlugin;
    private background: Sprite;
    private gameManager: GameManager;
    private deck: any;
    private deckService: DeckService;
    private cursors: CursorKeys;
    private player: Player;
    private opponent: Player;
    private gameState: GameState;

    constructor() {
        super('MainScene');

        this.deckService = new DeckService();
        this.deck = this.deckService.getDeck();
    }

    preload() {
        this.gameState = new GameState();

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
            y: screenHeight,
            width: screenWidth * .8,
            height: zoneHeight,
            borderColor: 0xffff00,
            opponent: false
        });

        this.opponent.hand = new HandZone({
            scene: this,
            name: 'Opponent_Hand',
            x: screenWidth / 2,
            y: 0,
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
            y: this.player.hand.y - this.player.hand.height - zoneSpacing - (zoneHeight / 4),
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
            y: this.opponent.hand.y + this.opponent.hand.height + zoneSpacing + (zoneHeight / 4),
            width: screenWidth * .8,
            height: zoneHeight * 1.2,
            borderColor: 0xA020F0,
            opponent: true
        });

        this.player.turnUI = new GameTurnUI({
            scene: this,
            x: screenWidth / 2,
            y: this.player.hand.y - (this.player.hand.height / 2) - (zoneHeight / 8),
            width: screenWidth * .1,
            height: zoneHeight / 4,
            opponent: false,
            borderColor: 0xff0000,
            name: 'Player Game Turn UI'
        });

        this.opponent.turnUI = new GameTurnUI({
            scene: this,
            x: screenWidth / 2,
            y: (this.opponent.hand.height / 2) + (zoneHeight / 8),
            width: screenWidth * .5,
            height: zoneHeight / 4,
            opponent: false,
            borderColor: 0xff0000,
            name: 'Opponent Game Turn UI'
        });


        this.input.mouse.disableContextMenu();

        this.input.keyboard.addKey('N', true, false);

        this.input.keyboard.on('keydown-' + 'N', (event) => {
            this.gameState.turnState.next();
        });

        this.input.keyboard.on('keydown-' + 'S', async (event) => {
            await this.createDeck(this.player.deck);
            await this.createDeck(this.opponent.deck);

            this.gameState.goto(GameStates.START_GAME);
        });


        this.input.on(POINTER_DOWN, (pointer: Pointer, cardTargets: CardActions[]) => {
            if (pointer.rightButtonDown()) {
                if (cardTargets[0].isTapped) {
                    cardTargets[0].untap();
                } else {
                    cardTargets[0].tap();
                }

            } else if (pointer.leftButtonDown()) {
                console.log('Left Button');
            }
        });

        this.input.on(DRAG_START, (pointer, card: CardDraggable) => {
            card.setStartDragPosition();
            card.endHover();
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

        this.input.on(DROP, (pointer, gameObject: FFTCGCard, dropZone: BaseZone) => {
            const currentZoneKey = gameObject.getData('currentZone');
            const currentZone = this.getZone(currentZoneKey);
            this.gameManager.moveCard(gameObject, currentZone, dropZone);
            dropZone.unhighlightZone();
            this.children.bringToTop(gameObject);

        });

        this.input.on(DRAG_END, (pointer, gameObject: CardDraggable, dropped) => {
            if (!dropped) {
                gameObject.snapBack();
            } else {
                gameObject.dragging = false;
            }

        });

        this.gameState.player = this.player;
        this.gameState.opponent = this.opponent;
        this.gameState.start(GameStates.LOADING_GAME);

        await this.gameStateHandlers();
    }

    async dealCards() {
        for (let i = 0; i < 5; i++) {
            this.gameManager.moveCard(this.opponent.deck.cards[0], this.opponent.deck, this.opponent.hand);
            this.gameManager.moveCard(this.player.deck.cards[0], this.player.deck, this.player.hand);

            await this.delayTime(250);
        }
    }

    async delayTime(delay: number) {
        return new Promise((resolve, reject) => {
            this.time.delayedCall(delay, () => {
                resolve(true);
            });
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
                card: 'playerCard',
                depth: 5,
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

    async gameStateHandlers() {
        this.gameState.on('enter_startGame', () => {
            console.log('Scene received start game event');
            this.dealCards();
            this.gameState.goto(GameStates.PLAYER_TURN);

            this.gameState.turnState.on('enter_drawPhase', () => {
                console.log('Scene received draw state');
                if (this.gameState.playerTurn) {
                    this.gameManager.moveCard(this.player.deck.cards[0], this.player.deck, this.player.hand);
                    this.gameManager.moveCard(this.player.deck.cards[0], this.player.deck, this.player.hand);
                } else {
                    this.gameManager.moveCard(this.opponent.deck.cards[0], this.opponent.deck, this.opponent.hand);
                    this.gameManager.moveCard(this.opponent.deck.cards[0], this.opponent.deck, this.opponent.hand);
                }
            });

            this.gameState.turnState.on('enter_endTurn', () => {
                console.log('**Game Scene received endTurn**');
                this.gameState.goto(GameStates.SWITCH_TURN);
            });
        });
    }

    async update() {
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
