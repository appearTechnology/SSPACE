import { Component, OnInit } from '@angular/core';
import { GeoService } from '../../../service/geofirex/geofirex.service';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { PropertyListingsService } from '../../../service/property-listings.service';
import { Listing } from '../../../models/Listing';

@Component({
  selector: 'app-geo-listings',
  templateUrl: './geo-listings.component.html',
  styleUrls: ['./geo-listings.component.scss']
})
export class GeoListingsComponent implements OnInit {

  Address: string;
  id: string;
  uid: string;
  loading: boolean;
  formatted_address: string;
  lng: string;
  lat: string;
  geopoint: any;
  subs: Subscription[] = [];
  radius: number;
  listings: Listing[];
  latLng: {
    lat: any,
    lng: any
  }
  enterAddress: boolean;

  public lottieConfigNotFound: Object;
  private anim: any;
  private animationSpeed: number = 1;


  constructor(
    private geofirex: GeoService,
    private route: ActivatedRoute,
    private router: Router,
    private propertyLisitngsService: PropertyListingsService
  ) {
    this.lat = this.route.snapshot.params['id'];
    this.lng = this.route.snapshot.params['id2'];
    this.formatted_address = this.route.snapshot.params['id3'];

    this.lottieConfigNotFound = {
      path: 'assets/animations/not_found.json',
      renderer: 'canvas',
      autoplay: true,
      loop: true
    };
  }

  handleAnimation(anim: any) {
    this.anim = anim;
  }

  ngOnInit() {
    this.loading = true
    this.enterAddress = false
    this.search()
  }


  listingProfile(x: string) {
    this.router.navigate(['explore', x])
  }

  editAddress(){
    this.enterAddress = true
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
        this.loading = false
      });
    this.subs.push(sub);

  }
  onNewDoc(docId: boolean){
    this.enterAddress = docId
    console.log(docId)
  }

  userSettings = {
    showSearchButton: true,
    showCurrentLocation: false,
    geoLocation: true,
    geoCountryRestriction: 'au',
    inputPlaceholderText: 'Enter the address of your listing',
    inputString: this.formatted_address
  }

  autoCompleteCallback1(selectedData: any) {

    //do any necessery stuff.
    this.Address = selectedData.data.formatted_address
    this.formatted_address = selectedData.data.formatted_address
    this.lng = selectedData.data.geometry.location.lng
    this.lat = selectedData.data.geometry.location.lat
    const point = this.geofirex.geo.point(selectedData.data.geometry.location.lat, selectedData.data.geometry.location.lng);
    this.geopoint = point.data;
    this.enterAddress = false
    this.search()
  }

  ngOnDestroy() {
    // Unsubscribe from all observables
    // when this component is destroyed
    this.subs.forEach(sub => sub.unsubscribe());
  }

}
