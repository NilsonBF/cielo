import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as pacote from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TituloComponent } from './titulo/titulo.component';
import { TabelaComponent } from './tabela/tabela.component';

@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    TabelaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    pacote.MatInputModule,
    pacote.MatToolbarModule,
    pacote.MatTableModule,
    pacote.MatButtonModule,
    pacote.MatIconModule
  ],
  exports: [pacote.MatInputModule, pacote.MatToolbarModule, pacote.MatTableModule, pacote.MatButtonModule,pacote.MatIconModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
