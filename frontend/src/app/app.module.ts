import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditTutorialComponent } from './components/edit-tutorial/edit-tutorial.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { ListTutorialComponent } from './components/list-tutorial/list-tutorial.component';


@NgModule({
  declarations: [
    AppComponent,
    AddTutorialComponent,
    EditTutorialComponent,
    ListTutorialComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
