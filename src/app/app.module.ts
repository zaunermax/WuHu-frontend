import 'rxjs/add/operator/map';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginPageComponent } from './loginpage/loginpage.component';
import { WuHuFrontendRoutingModule } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DashboardComponent,
    NavigationComponent,
    PagenotfoundComponent,
    LoginPageComponent
  ],
  imports: [
    WuHuFrontendRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
