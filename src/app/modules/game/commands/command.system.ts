import {Scene} from 'phaser';
import 'reflect-metadata';
import {GameMessages} from '../server/messages/game_messages';

const registeredCommands: Map<GameMessages, any[]> = new Map();

export interface IGameCommand<CommandScene extends Scene, Payload = unknown> {
    scene: CommandScene;

    validate?: (payload: Payload) => void;
    execute: (payload: Payload) => void;
    follow?: (payload: Payload) => {};
}

export abstract class GameCommand<CommandScene extends Scene = Scene, Payload = unknown> implements IGameCommand<CommandScene, Payload> {
    id: string;
    scene: CommandScene;
    payload: Payload;

    setPayload(payload: Payload) {
        this.payload = payload;
    }

    abstract execute(payload: Payload): Array<GameCommand> |
        GameCommand |
        void |
        Promise<Array<GameCommand>> |
        Promise<GameCommand> |
        Promise<unknown>;

    abstract follow(payload: Payload);

    validate?(payload: Payload): boolean;
}

export class CommandDispatcher<DispatcherScene extends Scene, Payload = unknown> {
    scene: DispatcherScene;
    stopped: boolean;


    constructor(scene: DispatcherScene) {

    }

    stop(): void {
        this.stopped = true;
    }

    start(): void {
        this.stopped = false;
    }

    dispatch<Com extends GameCommand>(command: Com, payload?: Payload): Promise<void | unknown> | void {
        if (this.stopped) {
            console.log(`Scene dispatcher stopped for command: ${command.id} `);
            return;
        }

        command.scene = this.scene;

        if (command.validate && !command.validate(payload)) {
            console.log(`Command validation failed for ${command.id} with params ${JSON.stringify(payload)}`);
            return;
        }

        const commandResult = command.execute(payload);

        if (commandResult instanceof Promise) {
            return (commandResult as Promise<GameCommand[]>).then(async (childCommands) => {
                const nextPromisifiedCommands = this.getNextCommands(childCommands);

                for (const item of nextPromisifiedCommands) {
                    await this.dispatch(item);
                }
            });
        }

        const nextCommands = this.getNextCommands(commandResult);
        const hasNextCommands = !!nextCommands.length;

        if (hasNextCommands) {
            let lastResult: void | Promise<unknown>;

            for (const item of nextCommands) {
                if (lastResult instanceof Promise) {
                    lastResult = lastResult.then(() => this.dispatch(item));

                } else {
                    lastResult = this.dispatch(item);
                }
            }

            return lastResult;
        }
    }

    // | Array<Promise<Command[] | void>>
    private getNextCommands(nextCommands: void | GameCommand | GameCommand[]): GameCommand[] {
        if (!nextCommands) {
            return [];
        }
        if (Array.isArray(nextCommands)) {
            return nextCommands;
        }
        return [nextCommands];
    }
}

export interface ICommandHandlerPayload<ServerCommandMessage> {
    messageType: GameMessages;
    // message: ServerCommandMessage;
}


/**
 * It doesn't seem possible as is to have this run for each class BEFORE it is called. This would run when a command
 * is constructed the first time; however, that isn't what we want.
 *
 * We want a map of MessageType => {priority: number, classArray: CommandClass[]} sorted by priority ASC that we can register to pull a list of classes for a command
 *
 * @param {ICommandHandlerPayload<any>} config
 * @returns {<T extends {new(...args: any[]): {}}>(constr: T) => any}
 * @constructor
 */
export function CommandHandler(config: ICommandHandlerPayload<any>) {
    console.log('Factory Start');

    return function _CommandHandler<T extends new(...args: any[]) => {}>(constr: T) {
        console.log('Inner Factory');
        return class extends constr {
            constructor(...args: any[]) {

                if (isCommand(constr)) {
                    console.log('Register Command Handler for Message: ', config.messageType);
                    const currentCommands = registeredCommands.get(config.messageType);

                    if (currentCommands?.length > 1) {
                        currentCommands.push(constr);
                        registeredCommands.set(config.messageType, currentCommands);
                    } else {
                        registeredCommands.set(config.messageType, [constr]);
                    }
                } else {
                    console.log('Not a Command');
                }

                console.log(registeredCommands.values());
                super(...args);
            }
        };
    };
}

export function isCommand(command: any): command is IGameCommand<any> {
    return (command as any).prototype.execute !== undefined;
}

// export const CommandHandlerRegister = 'commandHandlerRegister';
//
// export function isCommandScene(scene: any): scene is ICommandScene {
//     console.log(scene);
//     return (scene as ICommandScene).addCommandHandler !== undefined;
// }
//
// export interface ICommandScene {
//     addCommandHandler(type: GameMessages, handler: );
// }
