import {GameMessages} from '../server/messages/game_messages';
import {CommandHandler, GameCommand, IGameCommand} from './command.system';

@CommandHandler({messageType: GameMessages.MulliganRequest})
export class UpdateActionButtonCommand extends GameCommand implements IGameCommand<any> {

    constructor() {
        super();
    }

    execute(): void {

    }

    follow(payload: unknown): {} {
        return {};
    }
}
