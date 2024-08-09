import { FooterComponent } from './footer/footer.component';
import { CanvasComponent } from './canvas/canvas.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { UsageComponent } from './usage/usage.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', redirectTo: 'canvas', pathMatch: 'full' },
      { path: 'canvas', component: CanvasComponent },
      { path: 'usage', component: UsageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule { }
