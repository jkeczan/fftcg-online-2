import {Injectable} from '@angular/core';
import {Auth} from 'aws-amplify';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private user: any;

    constructor() {
    }

    async getCurrentUser() {
        if (this.user) {
            return this.user;
        } else {
            this.user = await Auth.currentAuthenticatedUser();
        }

        return this.user;
    }

    async logout() {
        await Auth.signOut();
    }
}
