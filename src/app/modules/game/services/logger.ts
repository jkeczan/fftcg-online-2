export interface ILogger {
    log(message: string);
}

export class Logger {
    private loggersByName = new Map<string, ILogger>();

    add(name: string, logger: ILogger) {
        this.loggersByName.set(name, logger);
    }

    remove(name: string) {
        this.loggersByName.delete(name);
    }

    log(message: string) {
        this.loggersByName.forEach(logger => {
            logger.log(message);
        });
    }
}

export class ConsoleLogger implements ILogger {
    log(message: string) {
        console.log(message);
    }
}

export class InGameLogger implements ILogger {
    private readonly textarea: Phaser.GameObjects.DOMElement;

    constructor(textarea: Phaser.GameObjects.DOMElement) {
        this.textarea = textarea;
    }

    log(message: string) {
        const node = this.textarea.node as HTMLTextAreaElement;

        node.value += `${message}\n`;
    }
}
