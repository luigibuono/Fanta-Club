import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NavbarComponent } from './components/utils/navbar/navbar.component';
import { FooterComponent } from './components/utils/footer/footer.component';
import { Section1Component } from './components/section1/section1.component';
import { Competition1Component } from './components/competition1/competition1.component';
import { Competition2Component } from './components/competition2/competition2.component';
import { Competition3Component } from './components/competition3/competition3.component';
import { Ranked1Component } from './components/ranked1/ranked1.component';
import { Ranked2Component } from './components/ranked2/ranked2.component';
import { Ranked3Component } from './components/ranked3/ranked3.component';
import { TotoCalcioComponent } from './components/toto-calcio/toto-calcio.component';
import { PremiComponent } from './components/premi/premi.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
<<<<<<< HEAD
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { CookieComponent } from './components/cookie/cookie.component';
import { TerminiComponent } from './components/termini/termini.component';
import { CookieBannerComponent } from './components/cookie-banner/cookie-banner.component';
import { RegolamentoComponent } from './components/regolamento/regolamento.component';
=======
import { ReactiveFormsModule } from '@angular/forms';
>>>>>>> 637f16f4d161598304e0a1496d5e28b2fbc79017


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    FooterComponent,
    Section1Component,
    Competition1Component,
    Competition2Component,
    Competition3Component,
    Ranked1Component,
    Ranked2Component,
    Ranked3Component,
    TotoCalcioComponent,
    PremiComponent,
    LoginComponent,
    RegisterComponent,
<<<<<<< HEAD
    PrivacyComponent,
    CookieComponent,
    TerminiComponent,
    CookieBannerComponent,
    RegolamentoComponent,
=======
>>>>>>> 637f16f4d161598304e0a1496d5e28b2fbc79017

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule  
=======
    ReactiveFormsModule
>>>>>>> 637f16f4d161598304e0a1496d5e28b2fbc79017
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
