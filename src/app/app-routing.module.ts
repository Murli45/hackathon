import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
   { path: 'login', component: LoginComponent },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then((m) => m.MainModule)
  },
  { path: '', redirectTo: '/main/canvas', pathMatch: 'full' },
  { path: '**', redirectTo: '/main/canvas' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
