import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { PropertyListingsService } from "../../../service/property-listings.service"

@Component({
  selector: 'app-add-amenities',
  templateUrl: './add-amenities.component.html',
  styleUrls: ['./add-amenities.component.scss']
})
export class AddAmenitiesComponent implements OnInit {

  @Input() stage: number;
  @Input() docId: string;
  @Output() newDoc: EventEmitter<Number> = new EventEmitter();
  amenities: any[];
  dateFrom: any;
  dateTo: any;
  amenitiesArr = [];
  today: any;
  minDate: any
  maxDate = new Date(2020, 0, 1);

  constructor(
    private propertyListingService: PropertyListingsService,
  ) { }

  ngOnInit() {

    this.today = Date.now();
    this.minDate = new Date(this.today)

    this.amenities = [
      {
        id: 1,
        title: "Lighting",
        selected: false
      },
      {
        id: 2,
        title: "Wifi",
        selected: false
      },
      {
        id: 3,
        title: "Toilets",
        selected: false
      },
      {
        id: 4,
        title: "Security",
        selected: false
      },
      {
        id: 5,
        title: "Wheelchair",
        selected: false
      },
      {
        id: 6,
        title: "Shelving",
        selected: false
      },
      {
        id: 7,
        title: "Parking",
        selected: false
      },
      {
        id: 8,
        title: "Fitting Rooms",
        selected: false
      },
      {
        id: 9,
        title: "Counter",
        selected: false
      },
      {
        id: 10,
        title: "Air Conditioner",
        selected: false
      },
      {
        id: 11,
        title: "Heater",
        selected: false
      },
    ]

  }

  selectedAmenityAdd(x) {
    //  console.log(x.selected)
    x.selected = !x.selected
    //if (x.selected === true) {
    //  this.amenitiesArr.push(x)
  //  }
  }

  selectedAmenityRemove(x) {
    //  console.log(x.selected)
    //for (var i = this.amenitiesArr.length - 1; i >= 0; --i) {
      //if (this.amenitiesArr[i].id == x.id) {
      //  this.amenitiesArr.splice(i, 1);
        x.selected = !x.selected
      //  console.log(this.amenitiesArr)
    //  }
  //  }
  }

  updateClient(value) {
  this.stage = 5
  value = {
    amenities: this.amenities,
    date_to: this.dateTo,
    date_from: this.dateFrom,
    stage: 4,
  }
  this.propertyListingService.updateListing(value, this.docId)
  this.newDoc.emit(this.stage)

}

}
