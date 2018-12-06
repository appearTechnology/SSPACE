import { Component, OnInit, ElementRef} from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(
    private router: Router,
    private flashMessage: FlashMessagesService,
    private authService: AuthService,
    public snackBar: MatSnackBar,
    private elementRef: ElementRef,
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if (auth) {
        this.router.navigate(['/'])
      }
    })
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = "#FFFFFF";
  }

  onSubmit({ valid }: { valid: boolean }) {
    if (!valid) {
      this.snackBar.open("please check email and password", "", {
        duration: 4000,
      })
    } else {
      this.authService.login(this.email, this.password).then(res => {
        this.snackBar.open("You have successfully been logged in", "😁", {
          duration: 3000,
        })
        this.router.navigate(['/'])
      }).catch(err => {
        this.snackBar.open(`${err}`, "", {
          duration: 4000,
        })
      })
    }
  }

}
