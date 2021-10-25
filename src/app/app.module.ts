import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';
import {environment} from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

function updateConfigForEnvironment() {
    const redirectFixes = awsconfig.oauth.redirectSignIn.split(',');
    if (environment.production) {
        awsconfig.oauth.redirectSignIn = redirectFixes[1];
    } else {
        awsconfig.oauth.redirectSignIn = redirectFixes[0];
    }
}

updateConfigForEnvironment();

Amplify.configure(awsconfig);

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        BrowserAnimationsModule
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
