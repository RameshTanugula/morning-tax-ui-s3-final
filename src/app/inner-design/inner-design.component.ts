import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MGMServiceService } from '../services/mgmservice.service';


@Component({
  selector: 'app-inner-design',
  templateUrl: './inner-design.component.html',
  styleUrls: ['./inner-design.component.css']
})


export class InnerDesignComponent implements OnInit {
  form: any;
  // profile: Profile;
  imageData: any;
  selectedService: any = '';
  selectedServiceType: any = '';
  mobile: any = '';
  description: any = '';
  year: any = '';
  fileList: any;
  services = [{label:"Tax planning and advisory services", bgColor:'red', checked: true },
   { label:"Tax preparation and e-filing service", bgColor:'black', checked: false },
    {label:"Federal,state,city and county tax filing", bgColor:'black', checked: false },

    {label:"Extension filing", bgColor:'black', checked: false },
    {label:"IRS Audit representation", bgColor:'black', checked: false },
    {label: "FBAR and FATCA processing", bgColor:'black', checked: false },
    {label: "Revising last three year Returns", bgColor:'black', checked: false },
    {label:"Amendments", bgColor:'black', checked: false },

    {label:"W-4 Assistance", bgColor:'black', checked: false },
    {label:"Reporting schedules, income and expenses", bgColor:'black', checked: false },
    {label:"ITEMIZED or standard deduction", bgColor:'black', checked: false }]
  constructor(private fms: MGMServiceService, private router: Router) { }

  ngOnInit(): void {
  }
  fileChange(event: any) {
    this.fileList = event.target.files;
  }
  onClickService(item: any, i: number) {
    this.services.map((s)=> {
      s.checked = false;
      if(item.label===s.label){
      s.checked = true}
    return s})
    this.selectedService = item;
  }
  onClickServiceType(item: any) {
    this.selectedServiceType = item;
  }
  onYearChange(event: any) {
    this.year = event.target.value;
  }
  onMobileNumberChange(event: any) {
    this.mobile = event.target.value;
  }
  onDescChange(event: any) {
    this.description = event.target.value;
  }
  onSubmit() {
    if (this.fileList.length > 0) {
      // let file: File = this.fileList[0];
      let formData = new FormData();
      const selectedFiles = this.fileList;
      const userdetails = JSON.parse(localStorage.getItem('user') || '{}');
      console.log(userdetails, 'userdetails', userdetails?.data?.userId)
      if (!userdetails?.data?.userId) {
        window.alert("Login expired, Please login again and try!")
        this.router.navigate(['/home']);
      } else {
        formData.append('userId', userdetails?.data?.userId);
        formData.append('mobile', this.mobile);
        formData.append('description', this.description);
        formData.append('year', this.year);
        formData.append('serviceType', this.selectedServiceType);
        formData.append('service', this.selectedService);
        let currentFileUpload;
        for (let i = 0; i < selectedFiles.length; i++) {
          currentFileUpload = selectedFiles.item(i);
          formData.append('files', currentFileUpload);
        }
          this.fms.uploadFile(formData).subscribe((res: any) => {
          }, error => {
            // this.spinnerService.hide();
            Swal.fire('Error', error.error.message, 'error');
            //alert(error.error.message)
          })
        // }
        window.alert("Data saved!")
        this.router.navigate(['/home']);
      }
    }
  }
}



