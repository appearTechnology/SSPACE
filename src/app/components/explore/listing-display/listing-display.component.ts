import { Component, OnInit, Input } from '@angular/core';
import { PropertyListingsService } from "../../../service/property-listings.service"
import { Listing } from '../../../models/Listing';
import {Location} from '@angular/common';

@Component({
  selector: 'app-listing-display',
  templateUrl: './listing-display.component.html',
  styleUrls: ['./listing-display.component.scss']
})
export class ListingDisplayComponent implements OnInit {

  @Input() docId: string;
  @Input() listing: Listing;
  @Input() images: any;
  //amenities = []

  constructor(
    private propertListingSevice: PropertyListingsService,
    private _location: Location
  ) { }

  ngOnInit() {
    //this.amenities = this.listing.amenities
  }

  backClicked() {
  this._location.back();
}

}
