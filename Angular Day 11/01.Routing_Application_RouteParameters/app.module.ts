import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AboutusComponent } from './aboutus/aboutus.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeptsComponent } from './depts/depts.component';
import { EmpsComponent } from './emps/emps.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent, HomeComponent, EmpsComponent, DeptsComponent, AboutusComponent, LoginComponent, DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
