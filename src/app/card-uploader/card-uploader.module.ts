import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {CardUploaderPageRoutingModule} from './card-uploader-routing.module';

import {CardUploaderPage} from './card-uploader.page';
import {AmplifyUIAngularModule} from '@aws-amplify/ui-angular';
import {AppModule} from '../app.module';
import {ImageUrlPipe} from '../pipes/image-url.pipe';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        CardUploaderPageRoutingModule,
        AmplifyUIAngularModule
    ],
    declarations: [CardUploaderPage, ImageUrlPipe]
})
export class CardUploaderPageModule {
}
