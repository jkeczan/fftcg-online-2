import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './guards/auth.guard';
import {UnauthGuard} from './guards/unauth.guard';
import {GameResovlerService} from "./resolvers/game-resovler.service";

const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
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
        loadChildren: () => import('./card-uploader/card-uploader.module').then(m => m.CardUploaderPageModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule),
        canActivate: [UnauthGuard]
    },
    {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
    },
  {
    path: 'two-player-game',
    loadChildren: () => import('./pages/two-player-game/two-player-game.module').then( m => m.TwoPlayerGamePageModule)
  },
  {
    path: 'game-lobby',
    loadChildren: () => import('./pages/game-lobby/game-lobby.module').then( m => m.GameLobbyPageModule),
      resolve: {
        games: GameResovlerService
      }
  }

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
