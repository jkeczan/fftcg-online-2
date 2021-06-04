import {Component, OnInit} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {Auth} from 'aws-amplify';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
    public isLoggedIn: boolean;

    constructor(private authService: AuthService, private router: Router) {
    }

    async ngOnInit() {
        this.isLoggedIn = !!await this.authService.getCurrentUser();
    }

    async goTo(route: string) {
        await this.router.navigate([route]);
    }

    async logout() {
        await this.authService.logout();
    }
}
