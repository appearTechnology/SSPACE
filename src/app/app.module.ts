import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { MainNavComponent } from './main-nav/main-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxGeoautocompleteModule } from 'ngx-geoautocomplete';
import { ImageUploadModule } from "angular2-image-upload";
import {SlideshowModule} from 'ng-simple-slideshow';
import { AgmCoreModule } from '@agm/core';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


import { ReactiveFormsModule } from '@angular/forms';
import { GooglePlacesDirective } from './google-places.directive';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { MaterialModule } from './material';
import { LottieAnimationViewModule } from 'ng-lottie';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { DashboardComponent } from './components/agent/dashboard/dashboard.component';
import { DashboardSidebarComponent } from './components/agent/dashboard-sidebar/dashboard-sidebar.component';
import { PropertyListingsComponent } from './components/property/property-listings/property-listings.component';
import { AppRoutingModule } from './app-routing.module';
import { PropertyProfileComponent } from './components/property/property-profile/property-profile.component';
import { AddlistingPanelComponent } from './components/property/addlisting-panel/addlisting-panel.component';
import { AddAddressComponent } from './components/property/add-address/add-address.component';
import { AddFeaturesComponent } from './components/property/add-features/add-features.component';
import { AddInfoComponent } from './components/property/add-info/add-info.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { ProfileDashboardComponent } from './components/agent/profile/agent-profile/profile-dashboard/profile-dashboard.component';
import { AddAmenitiesComponent } from './components/property/add-amenities/add-amenities.component';
import { AddImagesComponent } from './components/property/add-images/add-images.component';
import { PropertyDisplayComponent } from './components/property/property-display/property-display.component';
import { LoadingComponent } from './components/loading/loading.component';
import { LandingComponent } from './components/home/landing/landing.component';
import { EditProfileComponent } from './components/property/edit-profile/edit-profile.component';
import { SearchComponent } from './components/explore/search/search.component';
import { ListingProfileComponent } from './components/explore/listing-profile/listing-profile.component';
import { NavBarComponent } from './components/explore/nav-bar/nav-bar.component';
import { ListingDisplayComponent } from './components/explore/listing-display/listing-display.component';
import { GeoListingsComponent } from './components/explore/geo-listings/geo-listings.component';
import { EnquireWindowComponent } from './components/chat/enquire-window/enquire-window.component';
import { NavBarAddressComponent } from './components/explore/nav-bar-address/nav-bar-address.component';
import { ClientPanelComponent } from './components/agent/client-panel/client-panel.component';
import { AgentMessagesComponent } from './components/agent/message/agent-messages/agent-messages.component';
import { ChatWindowComponent } from './components/chat/chat-window/chat-window.component';
import { AgentMessageHistoryComponent } from './components//agent/agent-message-history/agent-message-history.component';


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    DashboardComponent,
    DashboardSidebarComponent,
    PropertyListingsComponent,
    GooglePlacesDirective,
    PropertyProfileComponent,
    AddlistingPanelComponent,
    AddAddressComponent,
    AddFeaturesComponent,
    AddInfoComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    ProfileDashboardComponent,
    AddAmenitiesComponent,
    AddImagesComponent,
    PropertyDisplayComponent,
    LoadingComponent,
    LandingComponent,
    EditProfileComponent,
    SearchComponent,
    ListingProfileComponent,
    NavBarComponent,
    ListingDisplayComponent,
    GeoListingsComponent,
    EnquireWindowComponent,
    NavBarAddressComponent,
    ClientPanelComponent,
    AgentMessagesComponent,
    ChatWindowComponent,
    AgentMessageHistoryComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'radiantApp'),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    GooglePlaceModule,
    FlashMessagesModule.forRoot(),
    LottieAnimationViewModule.forRoot(),
    NgxGeoautocompleteModule.forRoot(),
    ImageUploadModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDRgJe0sIcvVYf72V0vOrCrmV_4JZOvUyE'
    }),
    SlideshowModule,
    ReactiveFormsModule,
    NgScrollbarModule,
    InfiniteScrollModule
  ],
  entryComponents: [
    ProfileDashboardComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
