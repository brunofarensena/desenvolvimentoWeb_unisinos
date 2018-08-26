import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { SelectProfileComponent } from './components/select-profile/select-profile.component';
import { ReadjustComponent } from './components/readjust/readjust.component';
import { ActionButtonsComponent } from './components/action-buttons/action-buttons.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { AddReadjustComponent } from './components/add-readjust/add-readjust.component';
import { EditReadjustComponent } from './components/edit-readjust/edit-readjust.component';
import { ReportReadjustComponent } from './components/report-readjust/report-readjust.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    SelectProfileComponent,
    ReadjustComponent,
    ActionButtonsComponent,
    HeaderUserComponent,
    AddReadjustComponent,
    EditReadjustComponent,
    ReportReadjustComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
