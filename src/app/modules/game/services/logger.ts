import Label from 'phaser3-rex-plugins/templates/ui/label/Label';

export default class Logger {
    private label: Label;

    constructor(label: Label) {
        this.label = label;
    }

    appendText(text: string) {
        this.label.appendText(`\n${text}`);
    }
}