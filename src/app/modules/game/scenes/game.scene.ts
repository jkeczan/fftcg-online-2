import {uuid4} from '@capacitor/core/dist/esm/util';
import {Scene} from 'phaser';
import Label from 'phaser3-rex-plugins/templates/ui/label/Label';
import CardFactory from '../gameobjects/cards/fftcg_cards/card_factory';
import PlayerBoard from '../gameobjects/players/player.gameobject';
import {BaseZone} from '../gameobjects/zones/base.zone';
import BreakZone from '../gameobjects/zones/break.zone';
import DamageZone from '../gameobjects/zones/damage.zone';
import DeckZone from '../gameobjects/zones/deck.zone';
import HandZone from '../gameobjects/zones/hand.zone';
import PlayerFieldZone from '../gameobjects/zones/player_field.zone';
import RemoveFromGameZone from '../gameobjects/zones/remove_from_game.zone';
import StageZone from '../gameobjects/zones/stage.zone';
import GameManager from '../managers/game.manager';
import GameServer from '../server/server';
import Server from '../server/server';
import {CorneliaRoomState} from '../server/states/CorneliaRoomState';
import DeckService, {GameDeck} from '../services/deck.service';
import {GamePhases} from '../states/game.state';
import GameButton from '../ui/button';
import GameTurnUI from '../ui/game_turn_ui';
import ParticleEmitterManager = Phaser.GameObjects.Particles.ParticleEmitterManager;
import Sprite = Phaser.GameObjects.Sprite;
import DRAG = Phaser.Input.Events.DRAG;
import DRAG_ENTER = Phaser.Input.Events.DRAG_ENTER;
import DRAG_LEAVE = Phaser.Input.Events.DRAG_LEAVE;
import DRAG_START = Phaser.Input.Events.DRAG_START;
import DROP = Phaser.Input.Events.DROP;
import GAMEOBJECT_POINTER_DOWN = Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN;
import CursorKeys = Phaser.Types.Input.Keyboard.CursorKeys;

export default class GameScene extends Scene {
    private background: Sprite;
    private gameManager: GameManager;
    private deck: GameDeck;
    private deckService: DeckService;
    private cursors: CursorKeys;
    private playerBoard: PlayerBoard;
    private opponentBoard: PlayerBoard;
    private particles: ParticleEmitterManager;
    public output: Label;
    private actionButton: GameButton;
    private server!: Server;

    constructor() {
        super('GameScene');

        this.deckService = new DeckService();
    }


    preload() {
        this.load.image('card-back', 'assets/game/cards/card_back.jpg');
        this.load.image('background', 'assets/cornelia_bg.jpg');
        this.load.image('card_border', 'assets/card_border_rpg.png');
        this.load.image('wind_cp', 'assets/icon/wind_cp.png');
        this.load.atlas('flares', 'assets/flares.png', 'assets/flares.json');
        this.load.atlasXML('blueUI', 'assets/uipack/Spritesheet/blueSheet.png', 'assets/uipack/Spritesheet/blueSheet.xml');
        this.load.atlasXML('greyUI', 'assets/uipack/Spritesheet/greySheet.png', 'assets/uipack/Spritesheet/greySheet.xml');
        this.load.atlasXML('redUI', 'assets/uipack/Spritesheet/redSheet.png', 'assets/uipack/Spritesheet/redSheet.xml');

        // this.load.audio('ex-burst', '../../../assets/sounds/ex-burst.mp3');
        // this.load.audio('ex-burst-2', '../../../assets/sounds/ex-burst-2.mp3');
    }

    async create(data: { server: GameServer }) {
        this.server = data.server;
        await this.server.joinGame();

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

        this.playerBoard = new PlayerBoard({id: uuid4()});
        this.opponentBoard = new PlayerBoard({id: uuid4()});

        this.playerBoard.hand = new HandZone({
            scene: this,
            name: 'Hand',
            x: screenWidth / 2,
            y: screenHeight,
            width: screenWidth * 0.7,
            height: zoneHeight,
            borderColor: 0xffff00,
            opponent: false
        });

        this.opponentBoard.hand = new HandZone({
            scene: this,
            name: 'Hand',
            x: screenWidth / 2,
            y: 0,
            width: screenWidth * 0.7,
            height: zoneHeight,
            borderColor: 0xffff00,
            opponent: true
        });

        this.opponentBoard.deck = new DeckZone({
            scene: this,
            name: 'Deck',
            x: this.opponentBoard.hand.getBounds().left - zoneWidth / 4,
            y: (zoneHeight / 4),
            width: zoneWidth / 2,
            height: zoneHeight / 2,
            borderColor: 0x00ffff,
            opponent: true
        });

        this.playerBoard.deck = new DeckZone({
            scene: this,
            name: 'Deck',
            x: this.playerBoard.hand.getBounds().right + zoneWidth / 4,
            y: screenHeight - (zoneHeight / 4),
            width: zoneWidth / 2,
            height: zoneHeight / 2,
            borderColor: 0x00ffff,
            opponent: false
        });

        this.playerBoard.breakZone = new BreakZone({
            scene: this,
            name: 'Break',
            x: this.playerBoard.deck.getBounds().right + zoneWidth / 4,
            y: this.playerBoard.deck.y,
            width: zoneWidth / 2,
            height: zoneHeight / 2,
            borderColor: 0x00ffff,
            opponent: false
        });

        this.opponentBoard.breakZone = new BreakZone({
            scene: this,
            name: 'Break',
            x: this.opponentBoard.deck.getBounds().left - zoneWidth / 4,
            y: this.opponentBoard.deck.y,
            width: zoneWidth / 2,
            height: zoneHeight / 2,
            borderColor: 0x00ffff,
            opponent: true
        });

        this.playerBoard.removedFromGame = new RemoveFromGameZone({
            scene: this,
            name: 'RFG',
            x: this.playerBoard.breakZone.getBounds().right + zoneWidth / 4,
            y: this.playerBoard.breakZone.y,
            width: zoneWidth / 2,
            height: zoneHeight / 2,
            borderColor: 0x00ffff,
            opponent: false
        });

        this.opponentBoard.removedFromGame = new RemoveFromGameZone({
            scene: this,
            name: 'RFG',
            x: this.opponentBoard.breakZone.getBounds().left - zoneWidth / 4,
            y: this.opponentBoard.breakZone.y,
            width: zoneWidth / 2,
            height: zoneHeight / 2,
            borderColor: 0x00ffff,
            opponent: true
        });

        this.playerBoard.damageZone = new DamageZone({
            scene: this,
            name: 'Damage',
            x: zoneWidth / 4,
            y: screenHeight - (zoneHeight / 2),
            width: zoneHeight,
            height: zoneWidth * 2,
            borderColor: 0x00ffff,
            opponent: false
        });

        this.opponentBoard.damageZone = new DamageZone({
            scene: this,
            name: 'Damage',
            x: screenWidth - zoneWidth / 4,
            y: (zoneHeight / 2),
            width: zoneHeight,
            height: zoneWidth * 2,
            borderColor: 0x00ffff,
            opponent: true
        });

        this.playerBoard.field = new PlayerFieldZone({
            scene: this,
            name: 'Field',
            x: screenWidth / 2,
            y: this.playerBoard.hand.y - this.playerBoard.hand.height - zoneSpacing - (zoneHeight / 4),
            width: screenWidth * 0.7,
            height: zoneHeight * 1.2,
            borderColor: 0xA020F0,
            opponent: false
        });

        this.opponentBoard.field = new PlayerFieldZone({
            scene: this,
            name: 'Field',
            x: screenWidth / 2,
            // y: 500,
            y: this.opponentBoard.hand.y + this.opponentBoard.hand.height + zoneSpacing + (zoneHeight / 4),
            width: screenWidth * 0.7,
            height: zoneHeight * 1.2,
            borderColor: 0xA020F0,
            opponent: true
        });

        this.playerBoard.turnUI = new GameTurnUI({
            playerID: this.playerBoard.id,
            scene: this,
            x: this.playerBoard.hand.getBounds().right - zoneWidth * 2,
            y: this.playerBoard.hand.y - (this.playerBoard.hand.height / 2) - (zoneHeight / 8),
            width: zoneWidth * 3,
            height: zoneHeight / 4,
            opponent: false,
            borderColor: 0xff0000,
            name: 'Player Game Turn UI'
        });

        this.opponentBoard.turnUI = new GameTurnUI({
            playerID: this.opponentBoard.id,
            scene: this,
            x: this.playerBoard.hand.getBounds().left + zoneWidth * 3,
            y: (this.opponentBoard.hand.height / 2) + (zoneHeight / 8),
            width: zoneWidth * 3,
            height: zoneHeight / 4,
            opponent: false,
            borderColor: 0xff0000,
            name: 'Opponent Game Turn UI'
        });

        this.playerBoard.stagingArea = new StageZone({
            name: 'Staging Area',
            opponent: false,
            scene: this,
            x: screenWidth - zoneWidth,
            y: screenHeight / 2,
            width: zoneWidth,
            height: zoneHeight
        });

        this.actionButton = new GameButton(this, this.playerBoard.breakZone.x, this.playerBoard.turnUI.y - 10, 'Next', {
            textureDown: 'redUI',
            frameDown: 'red_button00.png',
            textureUp: 'blueUI',
            frameUp: 'blue_button05.png',
            textureOver: 'greyUI',
            frameOver: 'grey_button05.png'
        });

        this.actionButton.on(GAMEOBJECT_POINTER_DOWN, () => {
            // this.server.room.send(Mess)
            // this.server.room.send(0, {newState});
        });

        // this.server.room.send(4, {playerData: this.player})

        // this.gameState.player = this.player;
        // this.gameState.opponent = this.opponentBoard;
        // this.gameState.startGame();

        this.server.room.onStateChange((state: CorneliaRoomState) => {
            switch (state.gamePhase) {
                case GamePhases.WAITING_FOR_PLAYERS:
                    const {width, height} = this.scale;
                    this.add.text(width / 2, height / 2, `${GamePhases.WAITING_FOR_PLAYERS} - Waiting on Players`);
            }
        });
    }

    inputHandlers() {
        // this.input.on(POINTER_DOWN, (pointer: Pointer, cardTargets: FFTCGCard[]) => {
        //     if (pointer.rightButtonDown()) {
        //         if (cardTargets[0].isTapped) {
        //             cardTargets[0].untap();
        //         } else {
        //             cardTargets[0].tap();
        //         }
        //
        //     } else if (pointer.leftButtonDown()) {
        //         const card = cardTargets[0];
        //         if (card instanceof FFTCGCard && this.gameState.state === TurnStates.PLAY_A_CARD) {
        //             if (ZoneManager.isCardInZone(card, this.getZone('Hand'))) {
        //                 card.endHover();
        //                 this.gameState.generatedCP += card.generateCP();
        //                 for (let c = 0; c < card.generateCP(); c++) {
        //                     this.playerBoard.stagingArea.fillCP();
        //                 }
        //
        //                 this.gameManager.moveCard(card, this.playerBoard.hand, this.playerBoard.stagingArea);
        //             } else if (ZoneManager.isCardInZone(card, this.getZone('Backup'))) {
        //                 if (!card.halfTapped) {
        //                     card.halfTap();
        //                     this.gameState.generatedCP++;
        //                     this.playerBoard.stagingArea.fillCP();
        //                     const path = {t: 0, vec: new Phaser.Math.Vector2()};
        //
        //                     const startPoint = new Phaser.Math.Vector2(card.x, card.y);
        //                     const controlPoint1 = new Phaser.Math.Vector2(card.x - 100, card.y - 300);
        //                     const controlPoint2 = new Phaser.Math.Vector2(
        //                         Phaser.Math.Between(card.x, this.playerBoard.stagingArea.x),
        //                         Phaser.Math.Between(card.y, this.playerBoard.stagingArea.y)
        //                     );
        //                     const endPoint = new Phaser.Math.Vector2(this.playerBoard.stagingArea.x, this.playerBoard.stagingArea.y);
        //
        //                     const curve = new Phaser.Curves.CubicBezier(startPoint, controlPoint1, controlPoint2, endPoint);
        //
        //                     const pathEffect = this.particles.createEmitter({
        //                         frame: {frames: ['red', 'green', 'blue']},
        //                         scale: {start: 0.5, end: 0},
        //                         blendMode: 'ADD',
        //                         emitZone: {type: 'edge', source: curve, quantity: 48, yoyo: false},
        //                         lifespan: 1250,
        //                         speed: 250
        //                     });
        //
        //                     this.time.delayedCall(900, () => {
        //                         pathEffect.explode(-1, 0, 0);
        //
        //                         this.particles.removeEmitter(pathEffect);
        //                     });
        //                 } else {
        //                     card.untap();
        //                     this.gameState.generatedCP--;
        //                     this.playerBoard.stagingArea.unfillCP();
        //                 }
        //             }
        //
        //         }
        //     }
        // });
        // this.input.mouse.disableContextMenu();
        //
        // this.input.keyboard.addKey('N', true, false);

        // this.input.keyboard.on('keydown-' + 'N', () => {
        //     console.log('Turn State Changed Request');
        //     this.turnState.next();
        // });
        //
        // this.input.keyboard.on('keydown-' + 'G', () => {
        //     console.log('Game State Changed Request');
        //     this.gameState.next();
        // });
        //
        // this.input.keyboard.on('keydown-' + 'SHIFT', () => {
        //     this.playerBoard.deck.shuffle();
        // });
        //
        // this.input.keyboard.on('keydown-' + 'S', async () => {
        //     this.gameState.toggleEnable();
        // });
    }

    activateDragHandlers() {
        // this.input.on(DRAG_START, (pointer, card: CardDraggable) => {
        //     if (this.gameState.state !== TurnStates.PLAY_A_CARD && card.draggable) {
        //         card.setStartDragPosition();
        //         card.endHover();
        //     }
        // });
        //
        // this.input.on(DRAG_ENTER, (pointer, card: CardDraggable, zone: BaseZone) => {
        // });
        //
        // this.input.on(DRAG_LEAVE, (pointer, card: CardDraggable, zone: BaseZone) => {
        // });
        //
        // this.input.on(DRAG, (pointer, card: CardDraggable, dragX, dragY) => {
        //     if (!card.draggable) {
        //         return;
        //     }
        //     card.dragging = true;
        //     card.updateGamePosition(dragX, dragY);
        // });
        //
        // this.input.on(DROP, (pointer, card: FFTCGCard) => {
        //     if (this.gameState.state !== TurnStates.PLAY_A_CARD) {
        //         this.gameState.cardToPlay = card;
        //         this.gameState.goto(TurnStates.PLAY_A_CARD);
        //     }
        // });
        //
        // this.input.on(DRAG_END, (pointer, card: CardDraggable, dropped) => {
        //     console.log('Drag End');
        //     if (!card.draggable) {
        //         return;
        //     } else {
        //         if (!dropped) {
        //             console.log('Did not drop');
        //             card.snapBack();
        //         } else {
        //             card.dragging = false;
        //         }
        //     }
        //
        // });
    }

    deactivateDragHandlers() {
        this.input.off(DRAG);
        this.input.off(DRAG_START);
        this.input.off(DROP);
        this.input.off(DRAG_ENTER);
        this.input.off(DRAG_LEAVE);
    }

    async dealCards(cards) {
        for (const card of cards) {
            this.gameManager.moveCard(card, this.opponentBoard.deck, this.opponentBoard.hand);
            this.gameManager.moveCard(card, this.playerBoard.deck, this.playerBoard.hand);

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
        for (const deckCard of this.deck.cards) {
            for (let i = 0; i < deckCard.quantity; i++) {
                // const newCard = new FFTCGCard(deckCard);
                const newCard = CardFactory.getCard(this, deckCard.serial_number);
                if (newCard) {
                    newCard.setData('currentZone', 'Deck');
                    deck.addCard(newCard);
                }
            }
        }
    }

    gameStateHandlers() {
        // this.gameState.on(GameStateEvents.ENTER_START_GAME, async () => {
        //     console.log('Scene received start game event');
        //     this.time.delayedCall(1000, () => {
        //         this.gameState.goto(GameStates.SWITCH_TURN);
        //     });
        //
        //     // this.turnState.on('test', (state: TurnState) => {
        //     //     const cardsToMove = this.playerBoard.stagingArea.cards;
        //     //     for (let c = 0; c < cardsToMove.length; c++) {
        //     //         const card = cardsToMove[c];
        //     //         if (c === 0) {
        //     //             this.gameManager.moveCard(card, this.playerBoard.stagingArea, this.playerBoard.field);
        //     //         } else {
        //     //             this.gameManager.moveCard(card, this.playerBoard.stagingArea, this.playerBoard.breakZone);
        //     //         }
        //     //     }
        //     //
        //     //     this.playerBoard.field.backupZone.payComittedCP();
        //     //     this.gameState.cardToPlay.draggable = false;
        //     //     this.gameState.cardToPlay.stopZoneParticleEffect();
        //     //     this.gameState.cardToPlay = null;
        //     //     this.gameState.generatedCP = 0;
        //     //     this.playerBoard.stagingArea.unstage();
        //     //     this.gameState.goto(TurnStates.ATTACK);
        //     //     this.cameras.main.setBackgroundColor('#125555');
        //     //     this.activateDragHandlers();
        //     // });
        // });
        //
        // this.gameState.on(GameStateEvents.ENTER_CHOOSE_DECK, async () => {
        //     console.log('Scene responding to choose deck');
        //     await this.createDeck(this.playerBoard.deck);
        //     await this.createDeck(this.opponentBoard.deck);
        //
        //     this.playerBoard.deck.shuffle();
        //     this.opponentBoard.deck.shuffle();
        //
        //     this.gameState.goto(GameStates.DETERMINE_HAND);
        //
        // });
        //
        // this.gameState.on(GameStateEvents.ENTER_DETERMINE_HAND, () => {
        //     console.log('Scene responding to determine hand');
        //     const modalWidth = this.cameras.main.width;
        //     const modalHeight = this.cameras.main.height;
        //
        //     const cardModal = new CardModal(this, {
        //         x: this.cameras.main.width / 2,
        //         y: this.cameras.main.height / 2,
        //         width: modalWidth,
        //         height: modalHeight,
        //         background: this.add.rectangle(0, 0, 100, 100, 0x3e3e3e, .7),
        //         actions: [
        //             new Label(this, {
        //                 name: 'YES',
        //                 space: {
        //                     left: 40,
        //                     right: 40,
        //                     top: 5,
        //                     bottom: 5
        //                 },
        //                 background: this.add.sprite(0, 0, 'blueUI', 'blue_button04.png'),
        //                 text: this.add.text(0, 0, 'Yes', {fontSize: '40pt', fontFamily: 'Ken Vector'}),
        //             }),
        //             new Label(this, {
        //                 name: 'NO',
        //                 space: {
        //                     left: 40,
        //                     right: 40,
        //                     top: 5,
        //                     bottom: 5
        //                 },
        //                 background: this.add.sprite(0, 0, 'redUI', 'red_button01.png'),
        //                 text: this.add.text(0, 0, 'Mulligan', {fontSize: '40pt', fontFamily: 'Ken Vector'}),
        //             })
        //         ],
        //         title: new Label(this, {
        //             text: this.add.text(0, 0, 'Do you want to keep?', {fontSize: '40pt', fontFamily: 'Ken Vector'}),
        //         }),
        //
        //         space: {
        //             titleLeft: 500,
        //             titleTop: 100,
        //             content: 25,
        //             action: 150,
        //
        //             left: 20,
        //             right: 20,
        //             top: 20,
        //             bottom: 20,
        //         },
        //
        //         align: {
        //             actions: 'center', // 'center'|'left'|'right'
        //             title: 'center'
        //         },
        //
        //         expand: {
        //             title: false,
        //             actions: false,
        //             content: false,  // Content is a pure text object
        //         }
        //     });
        //
        //
        //     const first5Cards = this.playerBoard.deck.drawCard(5);
        //     cardModal.addCards(first5Cards);
        //     cardModal.layoutCards();
        //     cardModal.layout();
        //
        //     cardModal.on('button.click', (button, groupName, index, pointer, event) => {
        //         if (button.name === 'YES') {
        //             this.dealCards(first5Cards);
        //             cardModal.destroy();
        //             this.gameState.next();
        //         } else {
        //
        //         }
        //     });
        //
        // });
        //
        // this.gameState.on(GameStateEvents.ENTER_ROLL_DICE, () => {
        //     this.gameState.enable = false;
        //     console.log('Scene responding to enter roll dice');
        //     const toast = new Toast(this, {
        //         x: this.cameras.main.width / 2,
        //         y: window.innerHeight / 2,
        //         text: this.add.text(0, 0, 'Test')
        //     });
        //
        //     const playerRoll = Phaser.Math.Between(1, 6);
        //     const opponentRoll = Phaser.Math.Between(1, 6);
        //
        //     toast.showMessage(`Player Dice Roll: ${playerRoll}`);
        //     this.time.delayedCall(2000, () => {
        //         toast.showMessage(`Opponent Dice Roll: ${opponentRoll}`);
        //
        //         if (playerRoll < opponentRoll) {
        //             toast.showMessage('Opponent Wins');
        //         } else if (playerRoll > opponentRoll) {
        //             toast.showMessage('Player Wins');
        //         } else {
        //             toast.showMessage('Tie');
        //         }
        //
        //         toast.showMessage('Good Luck, Have Fun!!');
        //         toast.setTransitOutCallback(() => {
        //             this.gameState.enable = true;
        //         });
        //
        //     });
        // });
        //
        // this.turnState.on(TurnStateEvents.ENTER_MAIN_1_PHASE, () => {
        //     this.activateDragHandlers();
        //     // this.playerBoard.hand.activateDrag();
        // });
        //
        // this.turnState.on(TurnStateEvents.ENTER_PLAY_CARD, () => {
        //     this.cameras.main.setBackgroundColor('#000000');
        //     this.deactivateDragHandlers();
        //     this.gameManager.moveCard(this.gameState.cardToPlay, this.playerBoard.hand, this.playerBoard.stagingArea);
        // });
        //
        // this.turnState.on(TurnStateEvents.ENTER_DRAW_PHASE, () => {
        //     console.log('Scene received draw state');
        //
        //     if (this.gameState.playerTurn) {
        //         this.gameManager.moveCard(this.playerBoard.deck.cards[0], this.playerBoard.deck, this.playerBoard.hand);
        //         if (!this.gameState.isFirstTurn) {
        //             this.gameManager.moveCard(this.playerBoard.deck.cards[0], this.playerBoard.deck, this.playerBoard.hand);
        //         }
        //     } else {
        //         this.gameManager.moveCard(this.opponentBoard.deck.cards[0], this.opponentBoard.deck, this.opponentBoard.hand);
        //         this.gameManager.moveCard(this.opponentBoard.deck.cards[0], this.opponentBoard.deck, this.opponentBoard.hand);
        //     }
        // });
        //
        // this.gameState.on(GameStateEvents.ENTER_PLAYER_TURN, (state: GameState) => {
        //     console.log('Scene responding to: ', GameStateEvents.ENTER_PLAYER_TURN);
        //     this.turnState.player = this.playerBoard;
        //     this.turnState.start(TurnStates.START_TURN);
        //     this.turnState.next();
        // });
        //
        // this.gameState.on(GameStateEvents.ENTER_OPPONENT_TURN, (state: GameState) => {
        //     console.log('Scene responding to: ', GameStateEvents.ENTER_OPPONENT_TURN);
        //     this.turnState.player = this.opponentBoard;
        //     this.turnState.start(TurnStates.START_TURN);
        // });
        //
        // this.gameState.on(TurnStateEvents.ENTER_END_TURN, () => {
        //     console.log('**Game Scene received endTurn**');
        //     this.gameState.goto(GameStates.SWITCH_TURN);
        // });
    }

    async update() {

    }

    getZone(zone: string): BaseZone {
        const zones: { [index: string]: BaseZone } = {
            Backup: this.playerBoard.field.backupZone,
            Hand: this.playerBoard.hand,
            Forward: this.playerBoard.field.forwardZone,
            Damage: this.playerBoard.damageZone,
            Deck: this.playerBoard.deck,
            Break: this.playerBoard.breakZone,
            RFG: this.playerBoard.removedFromGame,
            Opponent_Backup: this.opponentBoard.field.backupZone,
            Opponent_Hand: this.opponentBoard.hand,
            Opponent_Forward: this.opponentBoard.field.forwardZone,
            Opponent_Damage: this.opponentBoard.damageZone,
            Opponent_Deck: this.opponentBoard.deck,
            Opponent_Break: this.opponentBoard.breakZone,
            Opponent_RFG: this.opponentBoard.removedFromGame
        };

        return zones[zone];
    }
}
