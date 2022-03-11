import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Auth} from 'aws-amplify';

@Injectable({
    providedIn: 'root'
})
export class UnauthGuard implements CanActivate {

    constructor(private router: Router) {
    }

    async canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Promise<boolean> {
        return Auth.currentAuthenticatedUser()
            .then(() => {
                this.router.navigate(['game']);
                return false;
            })
            .catch(() => {
                return true;
            });
    }
}
