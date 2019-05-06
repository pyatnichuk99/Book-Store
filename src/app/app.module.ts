import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { BookStoreComponent } from './book-store/book-store.component';
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    BookStoreComponent,
    AuthLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
