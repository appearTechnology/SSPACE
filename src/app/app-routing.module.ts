import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { DashboardComponent } from './components/agent/dashboard/dashboard.component'
import { PropertyProfileComponent } from './components/property/property-profile/property-profile.component'
import { AddlistingPanelComponent } from './components/property/addlisting-panel/addlisting-panel.component'
import { LoginComponent } from './components/auth/login/login.component'
import { SignupComponent } from './components/auth/signup/signup.component'
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component'
import { LandingComponent } from './components/home/landing/landing.component'
import { SearchComponent } from './components/explore/search/search.component'
import { GeoListingsComponent } from './components/explore/geo-listings/geo-listings.component'
import { ListingProfileComponent } from './components/explore/listing-profile/listing-profile.component'

const routes: Routes = [
  { path: 'admin', component: DashboardComponent},
  { path: 'addproperty', component: AddlistingPanelComponent},
  { path: 'property/:id', component: PropertyProfileComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'login/forgotpassword', component: ForgotPasswordComponent},
  { path: 'landing', component: LandingComponent},
  { path: '', component: SearchComponent},
  { path: 'explore/:id', component: ListingProfileComponent},
  { path: 'location/:id/:id2/:id3', component: GeoListingsComponent},
]

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ],
  providers: []
})
export class AppRoutingModule { }
