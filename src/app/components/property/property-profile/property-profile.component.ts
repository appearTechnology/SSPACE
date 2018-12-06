import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PropertyListingsService } from "../../../service/property-listings.service"
import { Listing } from '../../../models/Listing';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-property-profile',
  templateUrl: './property-profile.component.html',
  styleUrls: ['./property-profile.component.scss']
})
export class PropertyProfileComponent implements OnInit {

  id: string;
  docId: string;
  listing: Listing;
  images = [];
  stage: number;
  loaded: boolean;
  edited: boolean;
  subs: Subscription[] = [];

  constructor(
  private route: ActivatedRoute,
  private router: Router,
  private propertListingSevice: PropertyListingsService,
  ) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    const sub = this.propertListingSevice.getPropertyProfile(this.id).subscribe(client => {
    this.listing = client;
    this.images = this.listing.imageGallery
    this.stage = this.listing.stage
    this.docId = this.listing.id
    this.loaded = false;
    this.edited = false;
  })
  this.subs.push(sub)
  }

  onStage3(stage: number){
    //this.stage = 3
  }

  onStage4(stage: number){
    //this.stage = 4
  }

  onStage5(stage: number){
    //this.stage = 5
  }

  onStage6(stage: number){
    //this.stage = 6
  }

  edit(){
    this.edited = true;
  }

  ngOnDestroy() {
    // Unsubscribe from all observables
    // when this component is destroyed
    this.subs.forEach(sub => sub.unsubscribe());
    console.log("unsubscribed")
  }

}
