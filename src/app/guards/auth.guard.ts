import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Auth, Hub} from 'aws-amplify';
import {AuthService} from '../services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    protected authState: any;

    constructor(protected authService: AuthService) {
        Hub.listen('auth', async ({payload: {event, data}}) => {
            console.log(event, data);
            switch (event) {
                case 'signIn':
                    console.log('Sign in');
                    break;
                case 'signOut':
                    this.authState = null;
                    break;
                case 'signIn_failure':
                    console.log('Sign In Bad');
                    break;
                case 'cognitoHostedUI_failure':
                    console.log('Sign in failure', data);
                    break;
                case 'cognitoHostedUI':
                    await this.onHostedUI();
                    break;
            }
        });
    }

    async canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Promise<boolean> {
        console.log('Auth Guard: ', this.authState);
        let canActivate;
        if (this.authState === null) {
            const currentUser = await this.authService.getCurrentUser();
            canActivate = !!currentUser;
        } else {
            canActivate = this.authState === 'signedIn';
        }

        return canActivate;
    }

    onHostedUI() {
        console.log('On Hosted UI Found');
        return Auth.currentAuthenticatedUser();
    }
}
