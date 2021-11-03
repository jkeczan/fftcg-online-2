import {Component, OnInit} from '@angular/core';
import Auth, { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    signInWithFacebook() {
        return Auth.federatedSignIn({
            provider: CognitoHostedUIIdentityProvider.Facebook
        });
    }
}
