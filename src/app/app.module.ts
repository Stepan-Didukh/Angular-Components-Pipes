import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import { PownumberPipe } from './pipes/pownumber.pipe';
import { SearchComponent } from './components/search/search.component';
import { CreateHouseComponent } from './components/create-house/create-house.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ShowAllComponent } from './components/show-all/show-all.component';

@NgModule({
  declarations: [
    AppComponent,
    PownumberPipe,
    SearchComponent,
    CreateHouseComponent,
    LoginComponent,
    RegisterComponent,
    ShowAllComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
