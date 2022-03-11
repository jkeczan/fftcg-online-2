import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Auth} from 'aws-amplify';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    protected authState: any;

    constructor(private router: Router) {
    }

    async canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Promise<boolean> {
        return Auth.currentAuthenticatedUser().then(() => {
            return true;
        }).catch(() => {
            this.router.navigate(['login']);
            return false;
        });
    }
}
