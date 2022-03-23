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
import StageZone from '../gameobjects/zones/stage.zone';
import Player from '../gameobjects/players/player.gameobject';
import RexUIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin.js';
import GameTurnUI from '../gameobjects/game_turn_ui';
import GameState, {GameStates, TurnStates} from '../states/game.state';
import ZoneManager from '../managers/zone.manager';
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
import ParticleEmitterManager = Phaser.GameObjects.Particles.ParticleEmitterManager;

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
    private particles: ParticleEmitterManager;

    constructor() {
        super('MainScene');

        this.deckService = new DeckService();
        this.deck = this.deckService.getDeck();
    }

    preload() {
        this.gameState = new GameState();

        this.load.image('15-045', '../../../assets/game/cards/15-045.jpeg');
        this.load.image('15-048', '../../../assets/game/cards/15-048.jpeg');
        this.load.image('15-052', '../../../assets/game/cards/15-052.jpeg');
        this.load.image('15-053', '../../../assets/game/cards/15-053.jpeg');
        this.load.image('15-056', '../../../assets/game/cards/15-056.jpeg');
        this.load.image('15-058', '../../../assets/game/cards/15-058.jpeg');
        this.load.image('card-back', '../../../assets/game/cards/card_back.jpg');
        this.load.image('background', '../../../assets/background.jpg');
        this.load.image('card_border', '../../../assets/card_border_rpg.png');
        this.load.image('wind_cp', '../../../assets/icon/wind_cp.png');
        this.load.atlas('flares', 'assets/flares.png', 'assets/flares.json');
        this.load.atlasXML('blueUI', 'assets/uipack/Spritesheet/blueSheet.png', 'assets/uipack/Spritesheet/blueSheet.xml');
        this.load.atlasXML('greyUI', 'assets/uipack/Spritesheet/greySheet.png', 'assets/uipack/Spritesheet/greySheet.xml');
        this.load.atlasXML('redUI', 'assets/uipack/Spritesheet/redSheet.png', 'assets/uipack/Spritesheet/redSheet.xml');

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
        this.particles = this.add.particles('flares');
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
            opponent: false,
            gameState: this.gameState
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
            x: this.player.hand.getBounds().right - zoneWidth,
            y: this.player.hand.y - (this.player.hand.height / 2) - (zoneHeight / 8),
            width: zoneWidth * 2,
            height: zoneHeight / 4,
            opponent: false,
            borderColor: 0xff0000,
            name: 'Player Game Turn UI'
        });

        this.opponent.turnUI = new GameTurnUI({
            scene: this,
            x: this.player.hand.getBounds().left + zoneWidth,
            y: (this.opponent.hand.height / 2) + (zoneHeight / 8),
            width: zoneWidth * 2,
            height: zoneHeight / 4,
            opponent: false,
            borderColor: 0xff0000,
            name: 'Opponent Game Turn UI'
        });

        this.player.stagingArea = new StageZone({
            name: 'Staging Area',
            opponent: false,
            scene: this,
            x: screenWidth - zoneWidth,
            y: screenHeight / 2,
            width: zoneWidth,
            height: zoneHeight,
            gameState: this.gameState
        });

        this.input.mouse.disableContextMenu();

        this.input.keyboard.addKey('N', true, false);

        this.input.keyboard.on('keydown-' + 'N', (event) => {
            this.gameState.next();
        });

        this.input.keyboard.on('keydown-' + 'SHIFT', (event) => {
            this.player.deck.shuffle();
        });

        this.input.keyboard.on('keydown-' + 'S', async (event) => {
            await this.createDeck(this.player.deck);
            await this.createDeck(this.opponent.deck);

            this.player.deck.shuffle();
            this.opponent.deck.shuffle();

            this.gameState.goto(GameStates.START_GAME);
        });


        this.input.on(POINTER_DOWN, (pointer: Pointer, cardTargets: FFTCGCard[]) => {
            if (pointer.rightButtonDown()) {
                if (cardTargets[0].isTapped) {
                    cardTargets[0].untap();
                } else {
                    cardTargets[0].tap();
                }

            } else if (pointer.leftButtonDown()) {
                const card = cardTargets[0];
                if (card instanceof FFTCGCard && this.gameState.state === TurnStates.PLAY_A_CARD) {
                    if (ZoneManager.isCardInZone(card, this.getZone('Hand'))) {
                        card.endHover();
                        this.gameState.generatedCP += card.generateCP();
                        for (let c = 0; c < card.generateCP(); c++) {
                            this.player.stagingArea.fillCP();
                        }

                        this.gameManager.moveCard(card, this.player.hand, this.player.stagingArea);
                    } else if (ZoneManager.isCardInZone(card, this.getZone('Backup'))) {
                        if (!card.halfTapped) {
                            card.halfTap();
                            this.gameState.generatedCP++;
                            this.player.stagingArea.fillCP();
                            const path = {t: 0, vec: new Phaser.Math.Vector2()};

                            const startPoint = new Phaser.Math.Vector2(card.x, card.y);
                            const controlPoint1 = new Phaser.Math.Vector2(card.x - 100, card.y - 300);
                            const controlPoint2 = new Phaser.Math.Vector2(
                                Phaser.Math.Between(card.x, this.player.stagingArea.x),
                                Phaser.Math.Between(card.y, this.player.stagingArea.y)
                            );
                            const endPoint = new Phaser.Math.Vector2(this.player.stagingArea.x, this.player.stagingArea.y);

                            const curve = new Phaser.Curves.CubicBezier(startPoint, controlPoint1, controlPoint2, endPoint);

                            const pathEffect = this.particles.createEmitter({
                                frame: {frames: ['red', 'green', 'blue']},
                                scale: {start: 0.5, end: 0},
                                blendMode: 'ADD',
                                emitZone: {type: 'edge', source: curve, quantity: 48, yoyo: false},
                                lifespan: 1250,
                                speed: 250
                            });

                            this.time.delayedCall(900, () => {
                                pathEffect.explode(-1, 0, 0);

                                this.particles.removeEmitter(pathEffect);
                            });
                        } else {
                            card.untap();
                            this.gameState.generatedCP--;
                            this.player.stagingArea.unfillCP();
                        }
                    }

                }
            }
        });

        this.gameState.player = this.player;
        this.gameState.opponent = this.opponent;
        this.gameState.start(GameStates.LOADING_GAME);

        await this.gameStateHandlers();
    }

    activateDragHandlers() {
        this.input.on(DRAG_START, (pointer, card: CardDraggable) => {
            if (this.gameState.state !== TurnStates.PLAY_A_CARD && card.draggable) {
                card.setStartDragPosition();
                card.endHover();
            }
        });

        this.input.on(DRAG_ENTER, (pointer, card: CardDraggable, zone: BaseZone) => {
        });

        this.input.on(DRAG_LEAVE, (pointer, card: CardDraggable, zone: BaseZone) => {
        });

        this.input.on(DRAG, (pointer, card: CardDraggable, dragX, dragY) => {
            if (!card.draggable) {
                return;
            }
            card.dragging = true;
            card.updateGamePosition(dragX, dragY);
        });

        this.input.on(DROP, (pointer, card: FFTCGCard) => {
            if (this.gameState.state !== TurnStates.PLAY_A_CARD) {
                this.gameState.cardToPlay = card;
                this.gameState.goto(TurnStates.PLAY_A_CARD);
            }
        });

        this.input.on(DRAG_END, (pointer, card: CardDraggable, dropped) => {
            console.log('Drag End');
            if (!card.draggable) {
                return;
            } else {
                if (!dropped) {
                    console.log('Did not drop');
                    card.snapBack();
                } else {
                    card.dragging = false;
                }
            }

        });
    }

    deactivateDragHandlers() {
        this.input.off(DRAG);
        this.input.off(DRAG_START);
        this.input.off(DROP);
        this.input.off(DRAG_ENTER);
        this.input.off(DRAG_LEAVE);
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
            for (let i = 0; i < card.quantity; i++) {
                const newID = uuidv4();
                const newCard = new FFTCGCard({
                    gameCardID: newID,
                    scene: this,
                    name: `card-${card.card.serial_number}`,
                    image: card.card.serial_number,
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
    }

    async gameStateHandlers() {
        this.gameState.on('enter_startGame', () => {
            console.log('Scene received start game event');
            this.dealCards();
            this.gameState.goto(GameStates.PLAYER_TURN);

            this.gameState.on('enter_drawPhase', () => {
                console.log('Scene received draw state');
                if (this.gameState.playerTurn) {
                    this.gameManager.moveCard(this.player.deck.cards[0], this.player.deck, this.player.hand);
                    if (!this.gameState.isFirstTurn) {
                        this.gameManager.moveCard(this.player.deck.cards[0], this.player.deck, this.player.hand);
                    }
                } else {
                    this.gameManager.moveCard(this.opponent.deck.cards[0], this.opponent.deck, this.opponent.hand);
                    this.gameManager.moveCard(this.opponent.deck.cards[0], this.opponent.deck, this.opponent.hand);
                }
            });

            this.gameState.on('enter_mainPhase1', () => {
                this.activateDragHandlers();
                // this.player.hand.activateDrag();
            });


            this.gameState.on('enter_playCard', () => {
                this.cameras.main.setBackgroundColor('#000000');
                this.deactivateDragHandlers();
                this.gameManager.moveCard(this.gameState.cardToPlay, this.player.hand, this.player.stagingArea);
            });

            this.gameState.on('exit_playCard', () => {

                const cardsToMove = this.player.stagingArea.cards;
                for (let c = 0; c < cardsToMove.length; c++) {
                    const card = cardsToMove[c];
                    if (c === 0) {
                        this.gameManager.moveCard(card, this.player.stagingArea, this.player.field);
                    } else {
                        this.gameManager.moveCard(card, this.player.stagingArea, this.player.breakZone);
                    }
                }

                this.player.field.backupZone.payComittedCP();
                this.gameState.cardToPlay.draggable = false;
                this.gameState.cardToPlay.stopZoneParticleEffect();
                this.gameState.cardToPlay = null;
                this.gameState.generatedCP = 0;
                this.player.stagingArea.unstage();
                this.gameState.goto(TurnStates.ATTACK);
                this.cameras.main.setBackgroundColor('#125555');
                this.activateDragHandlers();
            });

            this.gameState.on('enter_endTurn', () => {
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
