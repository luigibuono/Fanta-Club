import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
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
import { AuthGuard } from './guards/auth.guard';
import { PrivacyComponent } from './components/privacy/privacy.component';
import { CookieComponent } from './components/cookie/cookie.component';
import { TerminiComponent } from './components/termini/termini.component';
import { RegolamentoComponent } from './components/regolamento/regolamento.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, canActivate: [AuthGuard] },
  { path: 'competition1', component: Competition1Component, canActivate: [AuthGuard] },
  { path: 'competition2', component: Competition2Component, canActivate: [AuthGuard] },
  { path: 'competition3', component: Competition3Component, canActivate: [AuthGuard] },
  { path: 'ranked1', component: Ranked1Component, canActivate: [AuthGuard] },
  { path: 'ranked2', component: Ranked2Component, canActivate: [AuthGuard] },
  { path: 'ranked3', component: Ranked3Component, canActivate: [AuthGuard] },
  { path: 'totoCalcio', component: TotoCalcioComponent, canActivate: [AuthGuard] },
  { path: 'premi', component: PremiComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'privacy', component:  PrivacyComponent},
  { path: 'cookie', component:  CookieComponent},
  { path: 'termini', component:  TerminiComponent},
  { path: 'regolamento', component:  RegolamentoComponent},

=======

const routes: Routes = [
  {path:'', component: HomePageComponent},
  {path:'competition1', component: Competition1Component},
  {path:'competition2', component: Competition2Component},
  {path:'competition3', component: Competition3Component},
  {path:'ranked1', component: Ranked1Component},
  {path:'ranked2', component: Ranked2Component},
  {path:'ranked3', component: Ranked3Component},
  {path:'totoCalcio', component: TotoCalcioComponent},
  {path:'premi', component:PremiComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent}
  
>>>>>>> 637f16f4d161598304e0a1496d5e28b2fbc79017
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
