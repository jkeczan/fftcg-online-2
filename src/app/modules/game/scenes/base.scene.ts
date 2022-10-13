import {Scene} from 'phaser';
import TextBox from 'phaser3-rex-plugins/templates/ui/textbox/TextBox';
import RexUIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin';
import GameServer from '../server/server';
import {StateTextBuilder} from '../utils';

export abstract class BaseScene extends Scene {
    public rexUI: RexUIPlugin;
    protected stateBox: TextBox;
    public server: GameServer;

    protected constructor(id: string = 'BaseScene') {
        super(id);
    }

    create(data: { server: GameServer }) {
        this.server = data.server;

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

        this.input.keyboard.on('keyup-D', () => {
            this.showState();
            this.refreshState();
        });
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
            .addNewLine(`Cards in Deck: [color=yellow]${currentPlayer.deck.length}[/color]`);
        this.stateBox.setText(stb.text);
        this.stateBox.layout();
    }
}
