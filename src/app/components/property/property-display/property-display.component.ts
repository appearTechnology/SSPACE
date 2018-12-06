import { Component, OnInit, Input } from '@angular/core';
import { PropertyListingsService } from "../../../service/property-listings.service"
import { Listing } from '../../../models/Listing';


@Component({
  selector: 'app-property-display',
  templateUrl: './property-display.component.html',
  styleUrls: ['./property-display.component.scss']
})
export class PropertyDisplayComponent implements OnInit {

  @Input() docId: string;
  @Input() listing: Listing;
  @Input() images: any;
  amenities = []
  //images = [];

  constructor(
    private propertListingSevice: PropertyListingsService
  ) { }

  ngOnInit() {

    console.log(this.images)
    this.amenities = this.listing.amenities
    console.log(this.amenities)


  }

}
