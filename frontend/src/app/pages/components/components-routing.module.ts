import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components.component';
import { ProfileComponent } from './profile/profile.component';
import { PlanedAreaComponent } from './planedarea/planedarea.component';
import { PlanedAreaCreateComponent } from './planedarea-create/planedareacreate.component';
import { PlanedAreaEditComponent } from './planedarea-edit/planedareaedit.component';
import { PasswordComponent } from './password/password.component';
import { UpdateProfileComponent } from './updateprofile/updateprofile.component';
import { MyChangesComponent } from './mychanges/mychanges.component'
import { UsersComponent } from './users/users.component';
import { UsersCreate } from './users-create/users-create.component';
import { UsersEdit } from './users-edit/users-edit.component';

const routes: Routes = [{
  path: '',
  component: ComponentsComponent,
  children: [
  {
    path: 'perfil',
    component: ProfileComponent,
  }, {
    path: 'areas',
    component: PlanedAreaComponent,
  }, {
    path: 'areas/nueva',
    component: PlanedAreaCreateComponent,
  }, {
    path: 'areas/area/editar',
    component: PlanedAreaEditComponent,
  },{
    path: 'contraseña',
    component: PasswordComponent,
  }, {
    path: 'actualizarperfil',
    component: UpdateProfileComponent,
  }, {
    path: 'miscambios',
    component: MyChangesComponent,
  }, {
    path: 'usuarios',
    component: UsersComponent,
  }, {
    path: 'usuarios/nuevo',
    component: UsersCreate,
  }, {
    path: 'usuarios/usuario/editar',
    component: UsersEdit,
  }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsRoutingModule { }

export const routedComponents = [
  ComponentsComponent,
  ProfileComponent,
  PlanedAreaComponent,
  PlanedAreaCreateComponent,
  PlanedAreaEditComponent,
  PasswordComponent,
  UpdateProfileComponent,
  MyChangesComponent,
  UsersComponent,
  UsersCreate,
  UsersEdit
];
