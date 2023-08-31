import {GameSceneV2} from '../../scenes/gamev2.scene';
import {GameMessages, PriorityMessageInput} from '../../server/messages/game_messages';
import GameTurnUI, {TurnPriorityEvent, TurnUIEvent} from '../../ui/game_turn_ui';
import BorderContainer from '../border_container';

export interface IPlayerConfig {
    id: string;
    scene: GameSceneV2;
    opponent: boolean;
    boardWidth: number;
    boardHeight: number;
    zoneWidth: number;
    zoneHeight: number;
    zoneSpacing: number;
}

export default class PlayerBoard {
    private readonly handZone: BorderContainer;
    private readonly deckZone: BorderContainer;
    private readonly breakZone: BorderContainer;
    private readonly removedFromGameZone: BorderContainer;
    private readonly damageZone: BorderContainer;
    private readonly fieldZone: BorderContainer;
    private stagingAreaZone: BorderContainer;
    private turnPhaseUI: GameTurnUI;

    constructor(config: IPlayerConfig) {

        console.log(config);

        this.handZone = new BorderContainer({
            scene: config.scene,
            x: config.boardWidth / 2,
            y: config.opponent ? 0 : config.boardHeight,
            width: config.boardWidth * 0.7,
            height: config.zoneHeight,
            borderColor: 0xffff00
        });

        this.deckZone = new BorderContainer({
            scene: config.scene,
            x: config.opponent ?
                this.handZone.getBounds().left - config.zoneWidth / 4 :
                this.handZone.getBounds().right + config.zoneWidth / 4,
            y: config.opponent ? (config.zoneHeight / 4) : config.boardHeight - (config.zoneHeight / 4),
            width: config.zoneWidth / 2,
            height: config.zoneHeight / 2,
            borderColor: 0x00ffff
        });

        this.breakZone = new BorderContainer({
            scene: config.scene,
            x: config.opponent ?
                this.deckZone.getBounds().left - config.zoneWidth / 4 :
                this.deckZone.getBounds().right + config.zoneWidth / 4,
            y: this.deckZone.y,
            width: config.zoneWidth / 2,
            height: config.zoneHeight / 2,
            borderColor: 0x00ffff
        });

        this.removedFromGameZone = new BorderContainer({
            scene: config.scene,
            x: config.opponent ?
                this.breakZone.getBounds().left - config.zoneWidth / 4 :
                this.breakZone.getBounds().right + config.zoneWidth / 4,
            y: this.breakZone.y,
            width: config.zoneWidth / 2,
            height: config.zoneHeight / 2,
            borderColor: 0x00ffff
        });

        this.damageZone = new BorderContainer({
            scene: config.scene,
            x: config.opponent ?
                config.boardWidth - config.zoneWidth / 4 :
                config.zoneWidth / 4,
            y: config.opponent ? (config.zoneHeight / 2) : config.boardHeight - (config.zoneHeight / 2),
            width: config.zoneHeight,
            height: config.zoneWidth * 2,
            borderColor: 0x00ffff
        });

        this.fieldZone = new BorderContainer({
            scene: config.scene,
            x: config.boardWidth / 2,
            y: config.opponent ?
                this.handZone.y + this.handZone.height + config.zoneSpacing + (config.zoneHeight / 4) :
                this.handZone.y - this.handZone.height - config.zoneSpacing - (config.zoneHeight / 4),
            width: config.boardWidth * 0.7,
            height: config.zoneHeight * 1.2,
            borderColor: 0xA020F0
        });

        this.turnPhaseUI = new GameTurnUI({
            playerID: config.id,
            x: config.boardWidth / 2,
            y: config.opponent ?
                (this.handZone.height / 2) + (config.zoneHeight / 8) :
                this.handZone.y - (this.handZone.height / 2) - (config.zoneHeight / 8),
            width: config.boardWidth * 0.7,
            height: config.zoneHeight / 4,
            scene: config.scene,
            borderColor: 0xff0000,
            name: 'Player Game Turn UI',
            rexUI: config.scene.rexUI
        }).on(TurnUIEvent.RequestPriority, (params: TurnPriorityEvent) => {
            const requestMessageParams: PriorityMessageInput = {
                forTurnPhase: params.turnPhase
            };
            config.scene.server.room.send(GameMessages.RequestPriority, requestMessageParams);
        }).on(TurnUIEvent.ReleasingPriority, (params: TurnPriorityEvent) => {
            const releaseMessageParams: PriorityMessageInput = {
                forTurnPhase: params.turnPhase
            };
            config.scene.server.room.send(GameMessages.ReleasingPriority, releaseMessageParams);
        });

        this.stagingAreaZone = new BorderContainer({
            scene: config.scene,
            x: config.boardWidth - config.zoneWidth,
            y: config.boardHeight / 2,
            width: config.zoneWidth,
            height: config.zoneHeight,
            borderColor: 0xff0000
        });

        console.log('X, Y for Hand', this.handZone.x, this.handZone.y, this.handZone.getBounds());
    }
}
