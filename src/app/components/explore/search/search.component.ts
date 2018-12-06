import { Component, OnInit } from '@angular/core';
import { GeoService } from '../../../service/geofirex/geofirex.service';
import { Observable, Subscription } from 'rxjs';
import { PropertyListingsService } from '../../../service/property-listings.service';
import { Listing } from '../../../models/Listing';
import { Router } from '@angular/router'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  Address: string;
  uid: string;
  formatted_address: string;
  lng: string;
  lat: string;
  geopoint: any;
  stateSearched: boolean;
  markers: any;
  subs: Subscription[] = [];
  radius: number;
  listings: Listing[];
  loading: boolean;

  constructor(
    private geofirex: GeoService,
    private propertyLisitngsService: PropertyListingsService,
    private router: Router
  ) {
    this.loading = true
  }

  ngOnInit() {
    this.stateSearched = false
  }

  userSettings = {
    showSearchButton: false,
    geoLocation: true,
    geoCountryRestriction: 'au',
    inputPlaceholderText: 'Enter the address of your listing'
  }

  userSettingsNav = {
    showSearchButton: true,
    geoLocation: true,
    geoCountryRestriction: 'au',
    inputPlaceholderText: this.formatted_address
  }

  autoCompleteCallback1(selectedData: any) {

    //do any necessery stuff.
    this.Address = selectedData.data.formatted_address
    this.formatted_address = selectedData.data.formatted_address
    this.lng = selectedData.data.geometry.location.lng
    this.lat = selectedData.data.geometry.location.lat
    const point = this.geofirex.geo.point(selectedData.data.geometry.location.lat, selectedData.data.geometry.location.lng);
    this.geopoint = point.data;

  }

  searchAddress() {
    if (this.formatted_address == null) {
      console.log("enter an address")
    } else {
      this.stateSearched = true
      //this.search()
      this.searchPage()
    }
  }

  searchPage() {

    this.router.navigate(['location', this.lat, this.lng, this.formatted_address])
  }

  search() {

    // Hard coded center for geoquery.
    const center = this.geofirex.geo.point(this.lat, this.lng);
    const radius = 5;

    // Push to subscription array
    // For Later removal
    const sub = this.propertyLisitngsService.getGeoListing(center, radius)
      .subscribe(doc => {
        this.listings = doc
        this.loading = false;
      });
    this.subs.push(sub);
  }

}
