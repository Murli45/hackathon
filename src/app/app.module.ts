import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginService } from './services/login.service';
import { UsageComponent } from './main/usage/usage.component';
import { WorkspaceComponent } from './main/workspace/workspace.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [AppComponent, LoginComponent, UsageComponent, WorkspaceComponent],
  imports: [
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    InputTextModule, ButtonModule
  ],
  providers: [AuthGuard, LoginService],
  bootstrap: [AppComponent],
})
export class AppModule { }
