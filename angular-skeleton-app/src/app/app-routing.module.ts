import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserListComponent } from './user-list/user-list.component';
import { DataListComponent } from './data-list/data-list.component';
import { DataList1Component } from './data-list1/data-list1.component';
import { DataList3Component } from './data-list3/data-list3.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'data-list', component: DataListComponent },
  { path: 'enterprises', component: DataList1Component },
  { path: 'custom-list', component: DataList3Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
