import FFTCGCard from '../gameobjects/cards/card_fftcg';
import GameScene from '../scenes/game.scene';
import {GameMessages} from '../server/messages/game_messages';
import {CommandHandler, GameCommand, IGameCommand} from './command.system';

export interface IDrawAnimationCommandInput {
    player: string;
    card: string;
}

@CommandHandler({messageType: GameMessages.DrawCard})
export class DrawCardsAnimation extends GameCommand implements IGameCommand<GameScene, IDrawAnimationCommandInput> {
    public scene: GameScene;

    constructor() {
        super();
    }

    execute(payload: IDrawAnimationCommandInput): void {
        if (this.scene.server.getCurrentPlayer().sessionID === payload.player) {
            const cardToMove = this.scene.playerBoard.deckZone.cards.find((card: FFTCGCard) => {
                return card.gameCardID === payload.card;
            });

            if (cardToMove) {
                this.scene.gameManager.moveCard(
                    cardToMove,
                    this.scene.playerBoard.deckZone,
                    this.scene.playerBoard.handZone
                );
            }

        } else {
            const cardToMove = this.scene.opponentBoard.deckZone.cards.find((card: FFTCGCard) => {
                return card.gameCardID === payload.card;
            });

            if (cardToMove) {
                this.scene.gameManager.moveCard(
                    cardToMove,
                    this.scene.opponentBoard.deckZone,
                    this.scene.opponentBoard.handZone
                );
            }
        }
    }

    follow(payload: unknown): {} {
        return {};
    }
}
