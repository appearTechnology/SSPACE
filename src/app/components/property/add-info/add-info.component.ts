import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { PropertyListingsService } from "../../../service/property-listings.service"
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-add-info',
  templateUrl: './add-info.component.html',
  styleUrls: ['./add-info.component.scss']
})
export class AddInfoComponent implements OnInit {
  @Input() docId: string;
  @Input() stage: number;
  @Output() newDoc: EventEmitter<Number> = new EventEmitter();
  rent: string;
  bond: string;
  features: string;



  constructor(
    private propertyListingService: PropertyListingsService,
    private flashMessage: FlashMessagesService,
  ) { }

  ngOnInit() {
    //this.rent = ""
    //this.bond = ""
    //  this.features = ""
  }

  updateClient(value) {
    if (this.rent == null || this.bond == null || this.features == null ){
      this.flashMessage.show('Your missing data, please add all form fields 🖐', {
        cssClass: 'alert-danger', timeout: 4000
      })
    } else {
      this.stage = 4
      value = {
        rent: this.rent,
        bond: this.bond,
        features: this.features,
        stage: 3,
      }
      this.propertyListingService.updateListing(value, this.docId)
      this.newDoc.emit(this.stage)

    }

  }

}
