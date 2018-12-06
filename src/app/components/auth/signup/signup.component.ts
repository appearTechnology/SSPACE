import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../service/user.service';
import { AuthService } from '../../../service/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { User } from '../../../models/User';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  email: string;
  password: string;
  first_name: string;
  last_name: string;
  id: string;

  constructor(
    private router: Router,
    private flashMessage: FlashMessagesService,
    private userService: UserService,
    private authService: AuthService,
    public snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
  }

  onSubmit({ valid, value }: { valid: boolean, value: User }) {
    if (!valid) {
      this.snackBar.open("please check email and password", "", {
        duration: 4000,
      })
    } else {
      this.authService.register(this.email, this.password).then(res => {
        this.registerUser(value)
        this.snackBar.open("You have succesfully created an account, welcome to Nexus", "😁", {
          duration: 3000,
        })
      }).catch(err => {
        this.snackBar.open(`${err}`, "", {
          duration: 4000,
        })
      })
    }
  }

  registerUser(value) {

    value = {
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email,
      profilePic: "https://firebasestorage.googleapis.com/v0/b/nexus-96373.appspot.com/o/Website%20Assets%2FAssets%2FprofilePic.svg?alt=media&token=f82752dd-401f-43fa-ac58-27a27cde3c82",
      stage: 1,
      isVerified: false,
    }
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.id = auth.uid
        this.userService.newClient(value, this.id);
        this.router.navigate(['']);
      } else {
      }
    });
  }

}
