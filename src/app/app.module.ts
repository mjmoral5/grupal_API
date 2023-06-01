import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { ListUsersComponent } from './component/list-users/list-users.component';
import { DetailUserComponent } from './component/detail-user/detail-user.component';
import { ListResourcesComponent } from './component/list-resources/list-resources.component';
import { DetailResourceComponent } from './component/detail-resource/detail-resource.component';
import { EditUserComponent } from './component/edit-user/edit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    RegisterComponent,
    ListUsersComponent,
    DetailUserComponent,
    ListResourcesComponent,
    DetailResourceComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
