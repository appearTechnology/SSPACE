import { Component, OnInit, ElementRef } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { ProfileService } from "../../../service/profile.service";
import { Profile } from '../../../models/Profile';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  uid: string;
  profile: Profile;
  subs: Subscription[] = [];
  loaded: boolean;
  display: number;

  constructor(
    private elementRef: ElementRef,
    private authService: AuthService,
    private profileService: ProfileService

  ) { }


  ngOnInit() {
    this.loaded = false
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = "#F2F2F2";
    this.auth()
    this.display = 1
  }

  onNewDoc(number: number){
    this.display = number
  }

  auth() {
    const sub = this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.uid = auth.uid
        const sub2 = this.profileService.getUser(this.uid).subscribe(client =>
          this.profile = client
        );
        this.subs.push(sub2)
        this.loaded = true
      } else {
      }
    });
    this.subs.push(sub)
  }



}
