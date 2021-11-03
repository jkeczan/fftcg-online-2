import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-element-picker',
    templateUrl: './element-picker.component.html',
    styleUrls: ['./element-picker.component.scss'],
})
export class ElementPickerComponent implements OnInit {

    @Input() elements: Array<string>;

    constructor() {
    }

    ngOnInit() {
    }
}
