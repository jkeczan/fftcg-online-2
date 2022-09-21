export function delay(ms: number): Promise<boolean> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true);
        }, ms);
    });
}

export class StateTextBuilder {
    public text: string = '';

    addLine(text: string) {
        this.text += text;
        return this;
    }

    addReturn() {
        this.text += '\n'
        return this;
    }

    addNewLine(text: string) {
        return this.addLine(text).addReturn()
    }
}
