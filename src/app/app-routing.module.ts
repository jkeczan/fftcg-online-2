import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './guards/auth.guard';
import {UnauthGuard} from './guards/unauth.guard';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'folder/:id',
        loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
    },
    {
        path: 'game',
        loadChildren: () => import('./game/game.module').then(m => m.GamePageModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'card-uploader',
        loadChildren: () => import('./card-uploader/card-uploader.module').then(m => m.CardUploaderPageModule)
    },
    {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule),
        canActivate: [UnauthGuard]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
