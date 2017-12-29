import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CrossComponent } from './cross/cross.component';
import { BoardComponent } from './board/board.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { BoxComponent } from './box/box.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    CrossComponent,
    BoardComponent,
    BoxComponent
  ],
  entryComponents:[BoxComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,    
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
