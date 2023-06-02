import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { ListResourcesComponent } from './component/list-resources/list-resources.component';
import { DetailResourceComponent } from './component/detail-resource/detail-resource.component';
import { ListUsersComponent } from './component/list-users/list-users.component';
import { DetailUserComponent } from './component/detail-user/detail-user.component';
import { EditUserComponent } from './component/edit-user/edit-user.component';
import { RegisterComponent } from './component/register/register.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'resources', component: ListResourcesComponent },
  { path: 'resource/:id', component: DetailResourceComponent },
  { path: 'users', component: ListUsersComponent },
  { path: 'user/:id', component: DetailUserComponent },
  { path: 'user/edit/:id', component: EditUserComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
