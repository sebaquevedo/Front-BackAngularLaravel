/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreModule } from './@core/core.module';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './@theme/theme.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginPageComponent } from './pages/components/login-page/login-page.component';
import { NbAlertModule } from '@nebular/theme/components/alert/alert.module';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptor';

@NgModule({
  declarations: [AppComponent, LoginPageComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    NbAlertModule,
    NgbModule.forRoot(),
    ThemeModule.forRoot(),
    CoreModule.forRoot(),
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
})
export class AppModule {
}
