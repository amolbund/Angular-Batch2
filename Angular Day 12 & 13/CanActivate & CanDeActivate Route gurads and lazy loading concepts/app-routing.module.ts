import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AuthGuardService } from './auth-guard.service';
import { DeactiveGuardService } from './deactive-guard.service';
import { DeptsComponent } from './depts/depts.component';
import { DetailsComponent } from './details/details.component';
import { EmpsComponent } from './emps/emps.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:"aboutus", component: AboutusComponent, canDeactivate: [DeactiveGuardService]},
  {path:"login", component: LoginComponent},
  {path:"depts", component: DeptsComponent, canActivate: [AuthGuardService]},
  {path:"emps", component: EmpsComponent, canActivate: [AuthGuardService]},
  {path:"Details/:id", component: DetailsComponent},
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
