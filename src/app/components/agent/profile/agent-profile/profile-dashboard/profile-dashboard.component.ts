import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { User } from '../../../../../models/User'
import { UserService } from '../../../../../service/user.service'

@Component({
  selector: 'app-profile-dashboard',
  templateUrl: './profile-dashboard.component.html',
  styleUrls: ['./profile-dashboard.component.scss']
})
export class ProfileDashboardComponent implements OnInit {

  edit: boolean;
  user: User;
  first_name: string;
  last_name: string;
  uid: string;

  constructor(
    public dialogRef: MatDialogRef<ProfileDashboardComponent>,
    private userService: UserService,
    @Inject(MAT_DIALOG_DATA) public data,
  ) { }

  ngOnInit() {

    this.edit = false
    this.first_name = this.data.profile.first_name
    this.last_name = this.data.profile.last_name
    this.uid = this.data.profile.id
    //this.data.profile.

  }

  onCloseConfirm() {
    this.dialogRef.close('Confirm')
  }

  onCloseCancel() {
    this.dialogRef.close('Cancel')
  }

  onEdit() {
    this.edit = true
  }

  onSave() {
    this.edit = false
  }

  onSubmit({ valid, value }: { valid: boolean, value: User }) {
    if (!valid) {
      //  this.flashMessage.show('Please fill out form correctly', {
      //  cssClass: 'alert-danger', timeout: 4000
      //  })
    } else {
      this.updateUser(value)
    }
  }

  updateUser(value) {
    value = {
      first_name: this.first_name,
      last_name: this.last_name,
    }
    this.userService.updateUser(value, this.uid)
    this.edit = false;
  }

}
