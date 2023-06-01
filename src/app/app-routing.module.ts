import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailUserComponent } from './component/detail-user/detail-user.component';

const routes: Routes = [

  { path: 'usuario/:id', component: DetailUserComponent },
  /*
  { path: '', component: LoginComponent },
  { path: 'productos', component: ListaProductosComponent },
  { path: 'producto/:id', component: ProductItemComponent },
  { path: 'usuarios', component: ListaUsuariosComponent },
  { path: 'usuarios/add', component: AddUserComponent },
  { path: 'usuario/:id', component: DetalleUsuarioComponent },
  { path: 'usuarios/edit/:id', component: EditUserComponent },
  { path: 'usuarios/delete/:id', component: DeleteUserComponent },
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
