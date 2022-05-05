import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CitiesComponent } from './cities/cities.component';
import { DeptsComponent } from './depts/depts.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GreetingComponent } from './greeting/greeting.component';
import { DeptDetailsComponent } from './dept-details/dept-details.component';
import { EmpsComponent } from './emps/emps.component';
import { HooksdemoComponent } from './hooksdemo/hooksdemo.component';
import { DemoComponent } from './demo/demo.component';
import { GenderPipe } from './gender.pipe';
import { FilterPipe } from './filter.pipe';
import { HighlighterDirective } from './highlighter.directive';
import { IsAdminDirective } from './is-admin.directive';
import { HttpClientModule } from '@angular/common/http';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CitiesComponent,
    DeptsComponent,
    UserComponent,
    LoginComponent,
    GreetingComponent,
    DeptDetailsComponent,
    EmpsComponent,
    HooksdemoComponent,
    DemoComponent,
    AboutusComponent,
    HomeComponent,
    DetailsComponent,
    GenderPipe,
    FilterPipe,
    HighlighterDirective,
    IsAdminDirective
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
