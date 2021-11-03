import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {CardUploaderPageRoutingModule} from './card-uploader-routing.module';
import {CardUploaderPage} from './card-uploader.page';
import {AmplifyUIAngularModule} from '@aws-amplify/ui-angular';
import {FFTCGCommonModule} from '../common/FFTCGCommon.module';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        CardUploaderPageRoutingModule,
        AmplifyUIAngularModule,
        FFTCGCommonModule,
        MatTableModule,
        MatPaginatorModule
    ],
    declarations: [CardUploaderPage]
})
export class CardUploaderPageModule {
}
