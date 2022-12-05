import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MGMServiceService } from 'src/app/services/mgmservice.service';
import Swal from 'sweetalert2';
import { Member } from './usermodel';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public form: Member;
  isverifyOtp: boolean = false;
  isregister: boolean = true;
  verifyOTP: any;
  recievedOtp: any;
  constructor( public router: Router,
    //  private spinnerService: NgxSpinnerService,
    private sr: MGMServiceService,
  ) {
    this.form = new Member();
    console.log(this.form)
  }
  ///svc
  ngOnInit() {
    this.form.memberType = '';
    this.form.countrycode = '';
  }

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  saveUser() {debugger
   // this.spinnerService.show();
    //this.verifymobileNO();
    //this.isLoading = true;
    if (this.form) {
      debugger
      this.form.memberType=2222;

      this.sr.userRegister(this.form).subscribe({
        next: data => {
        //  this.isLoading = false;
    console.log(data)
          Swal.fire({
            icon: 'success',
            title: "Register Succesfully!",
            timer: 700
          });

          this.router.navigate(['/login']);
        },
        error: error => {
          console.log(error)
          this.errorMessage = error.error.message;
          this.isSignUpFailed = true;
          if (error.status == 404) {

          } else {

          }
          console.log('oops', this.errorMessage);
          //alert(error.error.message)
        }
      });
    }
  }



}
