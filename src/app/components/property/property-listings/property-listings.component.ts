import { Component, OnInit } from '@angular/core';
import { PropertyListingsService } from "../../../service/property-listings.service";
import { AuthService } from '../../../service/auth.service';
import { Listing } from '../../../models/Listing';

@Component({
  selector: 'app-property-listings',
  templateUrl: './property-listings.component.html',
  styleUrls: ['./property-listings.component.scss']
})
export class PropertyListingsComponent implements OnInit {

  listings: Listing[]
  uid: string;
  loaded: boolean;
  public lottieConfig: Object;
  public lottieConfigNotFound: Object;
  private anim: any;
  private animationSpeed: number = 1;

  constructor(
    private propertListingSevice: PropertyListingsService,
    private authService: AuthService

  ) {
    this.lottieConfigNotFound = {
      path: 'assets/animations/not_found.json',
      renderer: 'canvas',
      autoplay: true,
      loop: true
    };
    this.loaded = true;
  }

  handleAnimation(anim: any) {
    this.anim = anim;
  }

  ngOnInit() {

    this.auth()
  }

  addProperty() {

  }

  auth() {
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.uid = auth.uid
        console.log(auth)
        this.propertListingSevice.getCollection(this.uid).subscribe(client => {
          client.sort((a, b) =>
        new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
          this.listings = client
          this.loaded = false;
        });
      } else {
      }
    });
  }



}
