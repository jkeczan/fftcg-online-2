import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';
import {CardBrowserPageRoutingModule} from './card-browser-routing.module';
import {CardBrowserPage} from './card-browser.page';
import {CardViewerComponent} from '../../components/card-viewer/card-viewer.component';
import {FFTCGCommonModule} from '../common/FFTCGCommon.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import {MatChipsModule} from '@angular/material/chips';
import {ElementPickerComponent} from '../../components/element-picker/element-picker.component';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ReactiveFormsModule,
        CardBrowserPageRoutingModule,
        FFTCGCommonModule,
        MatSidenavModule,
        MatSelectModule,
        MatChipsModule,
        MatExpansionModule
    ],
    declarations: [CardBrowserPage, CardViewerComponent, ElementPickerComponent]
})
export class CardBrowserPageModule {
}
