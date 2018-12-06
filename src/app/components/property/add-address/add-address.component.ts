import { Component, OnInit, Input, ViewChild, NgZone, EventEmitter, Output } from '@angular/core';
import { PropertyListingsService } from "../../../service/property-listings.service"
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthService } from '../../../service/auth.service';
import { Listing } from '../../../models/Listing';
import { Router } from '@angular/router'
import { GooglePlacesDirective } from "../../../google-places.directive";
import { GeoService } from '../../../service/geofirex/geofirex.service'

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.scss']
})
export class AddAddressComponent implements OnInit {
  @ViewChild('places') places: GooglePlacesDirective;
  docId: string;
  @Output() newDoc: EventEmitter<String> = new EventEmitter();
  @Input() id: string;
  test: string;
  public addr: object;
  public addrKeys: string[];
  addressValid: boolean;
  addressValidShow: boolean;
  buttonValid: boolean;
  buttonDisabled: boolean;
  Address: string;
  date: any;
  uid: string;
  formatted_address: string;
  lng: string;
  lat: string;
  address: {
    formatted_address: string,
    lng: string,
    lat: string
  }
  addDataLoad: boolean;
  geopoint: any;

  constructor(
    private propertyListingService: PropertyListingsService,
    private zone: NgZone,
    private afs: AngularFirestore,
    private authService: AuthService,
    private geofirex: GeoService
  ) { }

  ngOnInit() {

    this.auth()
    this.Address = null
    this.addressValidShow = false;
    this.addDataLoad = false;
    this.addressValid = false;
    this.buttonValid = false;
    this.buttonDisabled = true;
    this.date = Date.now();

  }

  auth() {
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.uid = auth.uid
      } else {
      }
    });
  }

  setAddress(addrObj) {
    this.addr = addrObj;
    this.address = addrObj
    this.addrKeys = Object.keys(addrObj);
    this.Address = this.address.formatted_address;
    this.buttonValid = true;
    this.buttonDisabled = false
  }

  onSubmit({ valid, value }: { valid: boolean, value: Listing }) {
    if (!valid) {
      this.addressValidShow = true;
    } else {
      this.addDataLoad = true;
      this.updateDB(value);
    }
  }

  updateDB(value) {

    value = {
      formatted_address: this.formatted_address,
      lat: this.lat,
      lng: this.lng,
      timestamp: this.date,
      status: 0,
      stage: 1,
      geopoint: this.geopoint,
      profilePic: "https://firebasestorage.googleapis.com/v0/b/nexus-96373.appspot.com/o/assets%2Fproperty-default%2Fgoogle-retail-illustration-21.jpg?alt=media&token=26698db7-bc8e-43d8-b90b-0a9e81cf9d30",
      uid: this.uid,
      live: 0
    }

    var db = this.afs.collection(`property`).add(value).then(docRef => {
      console.log("Document written with ID: ", docRef.id);
      this.id = docRef.id
      this.newDoc.emit(this.id)
    })
  }

  userSettings = {
    showSearchButton: false,
    geoLocation: true,
    geoCountryRestriction: 'au',
    inputPlaceholderText: 'Enter the address of your listing'
  }

  autoCompleteCallback1(selectedData: any) {

    //do any necessery stuff.
    this.Address = selectedData.data.formatted_address
    this.formatted_address = selectedData.data.formatted_address
    this.lng = selectedData.data.geometry.location.lng
    this.lat = selectedData.data.geometry.location.lat
    const point = this.geofirex.geo.point(selectedData.data.geometry.location.lat, selectedData.data.geometry.location.lng);
    this.geopoint = point.data;
    this.buttonValid = true;
    this.buttonDisabled = false
  }

}
