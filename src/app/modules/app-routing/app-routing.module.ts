import { ReportReadjustComponent } from './../../components/report-readjust/report-readjust.component';
import { EditReadjustComponent } from './../../components/edit-readjust/edit-readjust.component';
import { AddReadjustComponent } from './../../components/add-readjust/add-readjust.component';
import { ReadjustComponent } from './../../components/readjust/readjust.component';
import { SelectProfileComponent } from './../../components/select-profile/select-profile.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../../components/login/login.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'seleciona-perfil',
    component: SelectProfileComponent
  },
  {
    path: 'home-reajuste',
    component: ReadjustComponent
  },
  {
    path: 'add-info',
    component: AddReadjustComponent
  },
  {
    path: 'edit-info',
    component: EditReadjustComponent
  },
  {
    path: 'reports',
    component: ReportReadjustComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
