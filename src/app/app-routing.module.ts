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
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
