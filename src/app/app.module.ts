import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpdataService } from './httpdata.service';
import { ApicallsComponent } from './apicalls/apicalls.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ApicallsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [HttpdataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
