import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {CardUploaderPageRoutingModule} from './card-uploader-routing.module';

import {CardUploaderPage} from './card-uploader.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        CardUploaderPageRoutingModule
    ],
    declarations: [CardUploaderPage]
})
export class CardUploaderPageModule {
}
