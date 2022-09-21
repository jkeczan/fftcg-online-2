import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {Platform} from '@ionic/angular';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    constructor(
        private platform: Platform,
        private router: Router
    ) {
        this.initializeApp();
    }

    initializeApp() {
    }

    async goTo(route: string) {
        await this.router.navigate([route]);
    }

    async logout() {
    }
}
