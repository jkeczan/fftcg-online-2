import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {AuthGuard} from './auth.guard';

@Injectable({
    providedIn: 'root'
})
export class UnauthGuard extends AuthGuard implements CanActivate {

    constructor(protected authService: AuthService) {
        super(authService);
    }

    async canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Promise<boolean> {
        console.log('Unauth Guard: ', this.authState);
        return !this.authState;
    }
}
