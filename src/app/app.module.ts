import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Tabela1Component } from './tabela1/tabela1.component';
import { Tabela2Component } from './tabela2/tabela2.component';
import {MatInputModule, MatCardModule, MatButtonModule, MatListModule, MatIconModule, MatTabsModule} from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    Tabela1Component,
    Tabela2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, MatInputModule, FormsModule, MatCardModule, MatButtonModule,
    BrowserAnimationsModule, MatListModule, MatIconModule, MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
