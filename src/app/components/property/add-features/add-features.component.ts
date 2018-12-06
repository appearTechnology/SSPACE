import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { PropertyListingsService } from "../../../service/property-listings.service";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-add-features',
  templateUrl: './add-features.component.html',
  styleUrls: ['./add-features.component.scss']
})
export class AddFeaturesComponent implements OnInit {

  @Input() docId: string;
  @Input() stage: number;
  @Output() newDoc: EventEmitter<Number> = new EventEmitter();
  selectedRetail: boolean;
  selectedRestaurant: boolean;
  propertyType: string;
  selected1: boolean;
  mindays: number;
  size: number;
  parking: number;
  title: string;
  myForm: FormGroup;



  constructor(
    private propertyListingService: PropertyListingsService,
    private fb: FormBuilder,
    private flashMessage: FlashMessagesService,
  ) { }

  ngOnInit() {
    this.selectedRetail = false;
    this.selectedRestaurant = false;
    this.selected1 = false;
    this.propertyType = "";
    this.mindays = 0;
    this.size = 0;
    this.parking = 0;

  }

  selectRetail() {
    this.selectedRetail = true;
    this.selectedRestaurant = false;
    this.propertyType = "Retail"
    this.selected1 = true;
  }

  selectRestaurant() {
    this.selectedRetail = false;
    this.selectedRestaurant = true;
    this.propertyType = "Restaurant"
    this.selected1 = true;
  }

  updateClient(value) {

    if (this.title == null) {
      this.flashMessage.show('Your missing data, please add all form fields 🖐', {
        cssClass: 'alert-danger', timeout: 4000
      })
    } else {

      this.stage = 3
      value = {
        propertyType: this.propertyType,
        title: this.title,
        size: this.size,
        mindays: this.mindays,
        parking: this.parking,
        stage: 2,
      }
      this.propertyListingService.updateListing(value, this.docId)
      this.newDoc.emit(this.stage)

    }
  }
}
