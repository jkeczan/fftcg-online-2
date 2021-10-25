import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardBrowserPageRoutingModule } from './card-browser-routing.module';

import { CardBrowserPage } from './card-browser.page';
import {MatTableModule} from '@angular/material/table';
import {CardViewerComponent} from '../../components/card-viewer/card-viewer.component';
import {ImageUrlPipe} from '../../pipes/image-url.pipe';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        CardBrowserPageRoutingModule
    ],
    declarations: [CardBrowserPage, CardViewerComponent, ImageUrlPipe]
})
export class CardBrowserPageModule {}
