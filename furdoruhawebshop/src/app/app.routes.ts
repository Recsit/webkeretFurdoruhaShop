import { Routes } from '@angular/router';
import {authGuard} from "./shared/guards/auth.guard";

export const routes: Routes = [
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule) },
  { path: 'main', loadChildren: () => import('./pages/main/main.module').then(m => m.MainModule) },
  { path: 'not-found', loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule) },
  { path: 'shop', loadChildren: () => import('./pages/shop/shop.module').then(m => m.ShopModule), canActivate: [authGuard]},
  { path: 'user', loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule), canActivate: [authGuard]},
  { path: '', redirectTo: "/main", pathMatch: "full"},
  { path: '**', redirectTo: "/not-found"}
];
