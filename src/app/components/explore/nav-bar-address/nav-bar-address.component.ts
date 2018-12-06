import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { GeoService } from '../../../service/geofirex/geofirex.service';

@Component({
  selector: 'app-nav-bar-address',
  templateUrl: './nav-bar-address.component.html',
  styleUrls: ['./nav-bar-address.component.scss']
})
export class NavBarAddressComponent implements OnInit {

  @Output() newDoc: EventEmitter<Boolean> = new EventEmitter();
  selected: boolean


  constructor() { }

  ngOnInit() {
    this.selected = false
  }

  select(){
    this.selected = !this.selected
    this.newDoc.emit(this.selected)
    console.log(this.selected)
  }

}
