import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PropertyListingsService } from "../../../service/property-listings.service";
import { ProfileService } from "../../../service/profile.service";
import { Listing } from '../../../models/Listing';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from "../../../service/auth.service"
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../../auth/login/login.component';
import { Profile } from '../../../models/Profile';

@Component({
  selector: 'app-listing-profile',
  templateUrl: './listing-profile.component.html',
  styleUrls: ['./listing-profile.component.scss']
})
export class ListingProfileComponent implements OnInit {


  id: string;
  uid: string;
  agent: string;
  profile: Profile;
  docId: string;
  listing: Listing;
  images = [];
  stage: number;
  subs: Subscription[] = [];
  loaded: boolean;
  enquire: boolean;
  authenticated: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private propertListingSevice: PropertyListingsService,
    public dialog: MatDialog,
    private authService: AuthService,
    private profileService: ProfileService
  ) {
    this.id = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.listing = {
      uid: "",
      address: "",
      bedroom: 0,
      bathroom: 0,
      parking: 0,
      title: "",
      profilePic: "",
      formatted_address: "",
      stage: 0,
      route: "",
      imageGallery: "",
      amenities: "",
      size: 0,
      propertyType: "",
      rent: 0,
      mindays: 0,
      bond: 0,
      features: "",
      timestamp: "",
    }
    this.loaded = false
    this.enquire = false
    this.authenticated = false
    this.auth()
    this.getListing()
  }

  ngOnDestroy() {
    // Unsubscribe from all observables
    // when this component is destroyed
    this.subs.forEach(sub => sub.unsubscribe());
  }

  getListing() {
    const sub = this.propertListingSevice.getPropertyProfile(this.id).subscribe(client => {
      this.listing = client;
      this.images = this.listing.imageGallery
      this.stage = this.listing.stage
      this.docId = this.listing.id
      this.agent = this.listing.uid
      this.loaded = true
    })
    this.subs.push(sub)
  }

  auth() {
    const sub = this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.authenticated = true
        this.uid = auth.uid
        const sub2 = this.profileService.getUser(this.uid).subscribe(client =>
          this.profile = client
        );
        this.subs.push(sub2)
        this.loaded = true
      } else {
        this.authenticated = false
      }
    });
    this.subs.push(sub)
  }

  enquireClick() {

    if (this.authenticated == true) {
      this.enquire = !this.enquire
    } else {
      this.router.navigate(['/login'])
    }

  }

  closeEnquire() {
    this.enquire = !this.enquire
  }

}
