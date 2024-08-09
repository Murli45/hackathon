import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CanvasComponent } from './canvas/canvas.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';

import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { SplitterModule } from 'primeng/splitter';
import { SidebarModule } from 'primeng/sidebar';
import { PanelModule } from 'primeng/panel';
import { PanelMenuModule } from 'primeng/panelmenu';
import { DropdownModule } from 'primeng/dropdown';
import {ListboxModule} from 'primeng/listbox';
import {DialogModule} from 'primeng/dialog';

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent,
    NavbarComponent,
    CanvasComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    MenubarModule,
    FormsModule,
    ButtonModule,
    SplitterModule,
    SidebarModule,
    PanelModule,
    PanelMenuModule,
    DropdownModule,
    ListboxModule,
    DialogModule
  ],
  schemas:[NO_ERRORS_SCHEMA]
})
export class MainModule { }
