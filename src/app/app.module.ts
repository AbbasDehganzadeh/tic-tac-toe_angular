import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { SquereComponent } from './squere/squere.component';
import { BoardComponent } from './board/board.component';

const routes: Routes = [ // the routes goes here
  {component: BoardComponent,
  path: 'game',
  pathMatch: 'prefix'}
]

@NgModule({
  declarations: [
    AppComponent,
    SquereComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
