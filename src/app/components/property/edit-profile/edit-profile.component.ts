import { Component, OnInit, Input } from '@angular/core';
import { PropertyListingsService } from "../../../service/property-listings.service";
import { Listing } from '../../../models/Listing';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  @Input() docId: string;
  @Input() listing: Listing;


  constructor(
    private propertyListingService: PropertyListingsService,
    private flashMessage: FlashMessagesService,
  ) { }

  ngOnInit() {
    console.log(this.listing)
  }

  onSubmit({ valid, value }: { valid: boolean, value: Listing }) {
    if (!valid) {
      this.flashMessage.show('Your missing data, check form fields 🖐', {
        cssClass: 'alert-danger', timeout: 4000
      })
    } else {
      this.updateClient(value)
      //  this.newDoc.emit(false)
    }
  }

  updateClient(value) {
    value = {
      propertyType: this.listing.propertyType,
      title: this.listing.title,
      size: this.listing.size,
      mindays: this.listing.mindays,
      rent: this.listing.rent,
      bond: this.listing.bond,
      amenities: this.listing.amenities,
      features: this.listing.features
    }
    this.propertyListingService.updateListing(value, this.docId)

  }

  publish(value) {
    value = {
      status: 1
    }
    this.propertyListingService.updateListing(value, this.docId)
  }

  unpublish(value) {
    value = {
      status: 0
    }
    this.propertyListingService.updateListing(value, this.docId)
  }

  selectedAmenity(x) {

    x.selected = !x.selected

  }


}
