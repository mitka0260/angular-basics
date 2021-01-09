import {BrowserModule} from '@angular/platform-browser';
import {NgModule, Provider} from '@angular/core';

import {AppComponent} from './app.component';
import {PostComponent} from './post/post.component';
// import {Post4Component} from './post4/post4.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PostFormComponent} from './post-form/post-form.component';
import {DirectivesComponent} from './directives/directives.component';
import {StyleDirective} from './directives/directives/style.directive';
import {Style2Directive} from './directives/directives/style2.directive';
import {IfnotDirective} from './directives/directives/ifnot.directive';
import {PipesComponent} from './pipes/pipes.component';
import {MultByPipe} from './pipes/mult-by.pipe';
import {ExMarksPipe} from './pipes/ex-marks.pipe';
import {FilterPipe} from './pipes/filter.pipe';
import {RxjsComponent} from './rxjs/rxjs.component';
import {AppCounterService} from './services/services/app-counter.service';
import {ServicesComponent} from './services/services.component';
import {FormsValidationComponent} from './forms-validation/forms-validation.component';
import {SwitchComponent} from './forms-validation/switch/switch.component';
import {HttpComponent} from './http/http.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AuthInterceptor} from './http/auth.interceptor';
import {RoutingComponent} from './routing/routing.component';
import {AboutComponent} from './routing/about/about.component';
import {AboutExtraComponent} from './routing/about-extra/about-extra.component';
import {HomeComponent} from './routing/home/home.component';
import {PostsComponent} from './routing/posts/posts.component';
import {AppRoutingModule} from './routing/app-routing.module';
// import { BasisSyntaxComponent } from './basis-syntaxis/basis-syntax.component';

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AuthInterceptor,
  multi: true
};

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    // Post4Component,
    PostFormComponent,
    DirectivesComponent,
    // BasisSyntaxComponent
    StyleDirective,
    Style2Directive,
    IfnotDirective,
    PipesComponent,
    MultByPipe,
    ExMarksPipe,
    FilterPipe,
    RxjsComponent,
    ServicesComponent,
    FormsValidationComponent,
    SwitchComponent,
    HttpComponent,
    RoutingComponent,
    AboutComponent,
    AboutExtraComponent,
    HomeComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AppCounterService, INTERCEPTOR_PROVIDER],
  bootstrap: [AppComponent]
})
export class AppModule {
}
