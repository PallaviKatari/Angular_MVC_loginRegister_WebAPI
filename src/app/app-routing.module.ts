import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full', }, 
  { path: 'login', component: LoginComponent, data: { title: 'Login Page' } }, 
  { path: 'Dasboard', component: DashboardComponent, data: { title: 'Dashboard Page' } }, 
  { path: 'AddUser', component: RegisterComponent, data: { title: 'Add User Page' } }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
