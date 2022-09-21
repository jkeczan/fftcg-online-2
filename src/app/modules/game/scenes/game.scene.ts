import {Scene} from 'phaser';
import Label from 'phaser3-rex-plugins/templates/ui/label/Label';
import TextBox from 'phaser3-rex-plugins/templates/ui/textbox/TextBox';
import RexUIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin';
import FFTCGCard from '../gameobjects/cards/card_fftcg';
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
import {GameMessages, GamePhases} from '../server/messages/game_messages';
import GameServer from '../server/server';
import Server from '../server/server';
import {PlayerState} from '../server/states/PlayerState';
import DeckService, {GameDeck} from '../services/deck.service';
import GameButton from '../ui/button';
import GameTurnUI from '../ui/game_turn_ui';
import {StateTextBuilder} from '../utils';
import ParticleEmitterManager = Phaser.GameObjects.Particles.ParticleEmitterManager;
import Sprite = Phaser.GameObjects.Sprite;
import DRAG = Phaser.Input.Events.DRAG;
import DRAG_ENTER = Phaser.Input.Events.DRAG_ENTER;
import DRAG_LEAVE = Phaser.Input.Events.DRAG_LEAVE;
import DRAG_START = Phaser.Input.Events.DRAG_START;
import DROP = Phaser.Input.Events.DROP;
import GAMEOBJECT_POINTER_UP = Phaser.Input.Events.GAMEOBJECT_POINTER_UP;
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
    public server!: Server;
    private rexUI: RexUIPlugin;
    public stateBox: TextBox;

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
        console.log('Game Scene, Game Phase - ', this.server.room.state.gamePhase);

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

        this.playerBoard = new PlayerBoard({id: 'player_board'});
        this.opponentBoard = new PlayerBoard({id: 'opponent_board'});

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

        this.stateBox = this.rexUI.add.textBox({
            x: 0,
            y: 300,
            background: this.rexUI.add.roundRectangle(0, 0, 0, 0, 1).setStrokeStyle(2, 0xFFFFFF),
            text: this.rexUI.add.BBCodeText(0, 0, '', {
                fontSize: '20px',
                wrap: {
                    mode: 'word',
                },
                maxLines: 15
            })
        }).setOrigin(0, 0).layout();

        this.actionButton.on(GAMEOBJECT_POINTER_UP, () => {
            this.server.room.send(GameMessages.NextPhase);
        });

        this.input.keyboard.on('keyup-S', () => {
            this.showState();
            this.refreshState();
        });

        this.server.room.state.turn.listen('turnPhase', (currentValue, previousValue) => {
            console.log('Phase Changed: ', currentValue, previousValue);
            if (this.server.isPlayersTurn) {
                this.playerBoard.turnUI.activatePhase(currentValue);
                this.playerBoard.turnUI.deactivatePhase(previousValue);
            } else {
                this.opponentBoard.turnUI.activatePhase(currentValue);
                this.opponentBoard.turnUI.deactivatePhase(previousValue);
            }
        });

        this.server.room.onMessage(GameMessages.DrawCard, (params) => {
            if (this.server.getCurrentPlayer().sessionID === params.player) {
                const cardToMove = this.playerBoard.deck.cards.find((card: FFTCGCard) => {
                    return card.gameCardID === params.card;
                });

                if (cardToMove) {
                    console.log("card to hand", cardToMove)
                    this.gameManager.moveCard(
                        cardToMove,
                        this.playerBoard.deck,
                        this.playerBoard.hand
                    );
                }

            } else {
                // TODO Build opponents deck
                // const cardToMove = this.opponentBoard.deck.cards.find((card: FFTCGCard) => {
                //     return card.gameCardID === params.cardID;
                // });
                //
                // this.gameManager.moveCard(
                //     cardToMove,
                //     this.opponentBoard.deck,
                //     this.opponentBoard.hand
                // );
            }
        });

        this.showState();

        const p1Cards = await this.createDeck(this.server.getCurrentPlayer());
        const p2Cards = await this.createDeck(this.server.getOpposingPlayer());

        this.playerBoard.deck.addCards(p1Cards, 'top');
        this.opponentBoard.deck.addCards(p2Cards, 'top');
    }

    deactivateDragHandlers() {
        this.input.off(DRAG);
        this.input.off(DRAG_START);
        this.input.off(DROP);
        this.input.off(DRAG_ENTER);
        this.input.off(DRAG_LEAVE);
    }

    createDeck(player: PlayerState): FFTCGCard[] {
        console.log('create deck')
        const cards: FFTCGCard[] = [];

        console.log('Deck Length: ', player.deckZone.cards.length)

        for (const cardState of player.deckZone.cards) {
            console.log('create: ', cardState.serialNumber)
            const newCard = CardFactory.getCard(this, cardState.serialNumber, cardState);
            if (newCard) {
                console.log(newCard)
                newCard.gameCardID = cardState.gameCardID;
                newCard.setData('currentZone', 'Deck');
                cards.push(newCard);
            } else {
                console.log('card not found')
            }
        }

        return cards;
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

    showState() {
        if (this.stateBox.visible) {
            this.stateBox.setVisible(false);
        } else {
            this.stateBox.setVisible(true);
        }
    }

    refreshState() {
        const currentPlayer = this.server.getCurrentPlayer();

        const stb = new StateTextBuilder();
        stb.addNewLine(`Game Phase: [color=yellow]${this.server.room.state.gamePhase?.toString()}[/color]`)
            .addNewLine(`Client: [color=yellow]${this.server.getCurrentPlayer().sessionID}[/color]`)
            .addNewLine(`# of Players: [color=yellow]${this.server.room.state.players.size}[/color]`)
            .addNewLine(`Current Phase: [color=yellow]${this.server.room.state.turn?.turnPhase}[/color]`)
            .addNewLine(`Player Turn: [color=yellow]${this.server.room.state.playerTurn}[/color]`)
            .addNewLine(`Player Going First: [color=yellow]${this.server.room.state.playerGoingFirst}[/color]`)
            .addNewLine(`Dice Roll: [color=yellow]${currentPlayer.diceRoll}[/color]`)
            .addNewLine(`Dice Have Been Rolled: [color=yellow]${this.server.room.state.dicedRolled}[/color]`)
            .addNewLine(`Deck Chosen: [color=yellow]${currentPlayer.deckID}[/color]`)
            .addNewLine(`Cards in Deck: [color=yellow]${currentPlayer.deckZone.cards.length}[/color]`)
            .addNewLine(`Cards in Hand: [color=yellow]${currentPlayer.handZone.cards.length}[/color]`);
        this.stateBox.setText(stb.text);
        this.stateBox.layout();
    }
}
