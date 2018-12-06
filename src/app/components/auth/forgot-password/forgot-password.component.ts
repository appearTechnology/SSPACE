import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  email: string;
  back: boolean;

  constructor(
    private router: Router,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    public snackBar: MatSnackBar,
    private afAuth: AngularFireAuth,
  ) { }

  ngOnInit() {

    this.back = false
  }

  onSubmit() {
    this.afAuth.auth.sendPasswordResetEmail(this.email)
      .then(() =>
        this.passwordSuccess()
      ).catch(() => this.error());
  }

  error() {
    this.snackBar.open('An error occured! Please check email again', "😁", {
      duration: 3000,
    })
    this.back = false
  }


  passwordSuccess() {
    this.snackBar.open("You password has been successfully reset, please check your email", "😁", {
      duration: 3000,
    })
    this.back = true
  }

}
