import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MGMServiceService } from 'src/app/services/mgmservice.service';
// import { MatDialog, MatDialogRef } from '@angular/material/dialog';
// import { NgxSpinnerService } from 'ngx-spinner';
// import Swal from 'sweetalert2';
import { RegisterComponent } from '../register/register.component';
import Swal from 'sweetalert2';
import { Route, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  // matDialogRef!: MatDialogRef<RegisterComponent>;
  isLoginpage: boolean = true;
  isverifyOtp: boolean = false;
  isforgetPass: boolean = false;
  memberType: any;
  isLoading: boolean = false;
  form1: FormGroup;
  OTP: any;
  mobileno: any;
  // public string EmailId { get; set; }
  // public string Password { get; set; }
  // public string MobileNo { get; set; }
  constructor(private readonly fb: FormBuilder,
    private fms: MGMServiceService,private router:Router,private user:AuthService) {
    this.form = this.fb.group({

      userId: ['', Validators.required],
      MobileNo: [''],
      Password: ['', Validators.required,],

    })
    this.form1 = this.fb.group({

      mobile: ['', Validators.required],
      countryCode: ['', Validators.required],
      Password: ['', Validators.required,],
      verifyOtp: ['', Validators.required,],

    })
  }


  createFormGroup() {
    return new FormGroup({
      userId: new FormControl('', Validators.required),
      MobileNo: new FormControl('', Validators.required),
      verifyMobileNo: new FormControl('', Validators.required),
      Password: new FormControl('', Validators.required,),
      NewPassword: new FormControl('', Validators.required,),
      verifyOtp: new FormControl('', Validators.required,),
    });

  }
  ///svc
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  verifyOtp() {
    console.log(this.form1.value)
    if (this.OTP == this.form1.value.verifyOtp) {
      this.isforgetPass = true;
    } else {
      alert('please enter valid OTP')
    }
  }

 

  loginsubmit() {
    // this.spinnerService.show();
    this.fms.userLogin(this.form.value).subscribe((res:any) => {
      console.log(res);
      localStorage.setItem('user', JSON.stringify(res));
      this.user.storeData(res);
      if(res?.message === 'Login success'){
      Swal.fire({
        icon: 'success',
        title: "Logined Succesfully!",
        timer: 700
      });
      this.router.navigate(['/docs']);
    } else {
      
      Swal.fire('Error', res?.message, 'error');
    }
    }, error => {
      // this.spinnerService.hide();
      Swal.fire('Error', error.error.message, 'error');
      console.log('oops', error.error);
      //alert(error.error.message)
    })
    //this.createFormGroup();
    console.log(this.form.value);
  }

  ngOnInit(): void {
    this.isLoginpage;
  }

  showForgotPage() {
    this.isLoginpage = !this.isLoginpage;
  }

  onNoClick(): void {
    // this.dialogRef.close();
  }

  // OpenModal() {
  //   this.dialogRef.close();
  //   this.matDialogRef = this.matDialog.open(RegisterComponent, {

  //     disableClose: true,
  //     'width': "500px",
  //     'height': "650px"
  //   });

  //   this.matDialogRef.afterClosed().subscribe(res => {
  //     if ((res == true)) {

  //     }
  //   });
  // }
}
