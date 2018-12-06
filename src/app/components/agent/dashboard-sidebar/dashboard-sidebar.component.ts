import { Component, OnInit, ElementRef, Input, Output, EventEmitter, } from '@angular/core';
import { Profile } from '../../../models/Profile'
import { AuthService } from "../../../service/auth.service"
import { Router } from '@angular/router'
import {MatDialog} from '@angular/material';
import { ProfileDashboardComponent } from '../profile/agent-profile/profile-dashboard/profile-dashboard.component'

@Component({
  selector: 'app-dashboard-sidebar',
  templateUrl: './dashboard-sidebar.component.html',
  styleUrls: ['./dashboard-sidebar.component.scss']
})
export class DashboardSidebarComponent implements OnInit {
  @Input() uid: string;
  @Input() profile: Profile;
  @Output() newDoc: EventEmitter<Number> = new EventEmitter();
  clientSelected: boolean;
  loaded: boolean;
  property: boolean;
  clients: boolean;


  constructor(
    private elementRef: ElementRef,
    private authService: AuthService,
    private router: Router,
    public dialog: MatDialog
  ) {
    this.loaded = false
  }

  ngOnInit() {
   this.loaded = true
   this.property = true
   this.clients = false
  }


  logout() {
    this.authService.logout();
    this.router.navigate(['/login'])
  }

  openDialog(): void {
   const dialogRef = this.dialog.open(ProfileDashboardComponent, {
     width: '90vw',
     height: '90vh',
     data: {profile: this.profile, uid: this.uid}

   });

   dialogRef.afterClosed().subscribe(result => {
     console.log('The dialog was closed');
     //this.animal = result;
   });
 }

 home(){
   this.property = true;
   this.clients = false;
   this.newDoc.emit(1)
 }

 client(){
   this.property = false;
   this.clients = true;
   this.newDoc.emit(2)
 }

}
