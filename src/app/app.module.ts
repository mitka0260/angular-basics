import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {PostComponent} from './post/post.component';
import {Post4Component} from './post4/post4.component';
import {FormsModule} from '@angular/forms';
import {PostFormComponent} from './post-form/post-form.component';
import { BasisSyntaxComponent } from './basis-syntaxis/basis-syntax.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    Post4Component,
    PostFormComponent,
    BasisSyntaxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
