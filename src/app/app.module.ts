import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarTodosComponent } from './listar-todos/listar-todos.component';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [AppComponent, ListarTodosComponent, CreateComponent, ViewComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
