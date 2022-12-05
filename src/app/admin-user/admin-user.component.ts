import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MGMServiceService } from '../services/mgmservice.service';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {
  usersData: any = [];
  constructor(private fms: MGMServiceService, private router: Router) { }


  ngOnInit(): void {
    this.getUsers();
  }
  onClickFile(e: any){
    const file= e?.target?.value;
    var a: any = document.createElement("a");
    document.body.appendChild(a);

    a.style = "display: none";
    a.href = file;
    a.download = file;
    a.click();
    window.URL.revokeObjectURL(file);
  }
  getUsers() {
    this.fms.getUserData().subscribe((res: any) => {
      res?.data?.forEach((element: any) => {
        const fileExist = element.files?.split(",");
        if(fileExist){
          element.filesList = fileExist;
        }
        return element;
        
      });
      this.usersData = res?.data;
    }, error => {
      // this.spinnerService.hide();
      //alert(error.error.message)
    })
  }
  getZipFile(data: any){
    var a: any = document.createElement("a");
    document.body.appendChild(a);

    a.style = "display: none";
    var blob = new Blob([data], { type: 'application/zip' });

    var url= window.URL.createObjectURL(blob);

    a.href = url;
    a.download = "test.zip";
    a.click();
    window.URL.revokeObjectURL(url);

}
  download(user:any){
    this.fms.download(user.user_id).subscribe(data => {
      const blob = new Blob([data], {
        type: 'application/zip',
      });
      const url = window.URL.createObjectURL(blob);
      const anchor = document.createElement("a");
    anchor.download = user.user_id +'-'+user.first_name +'-'+ new Date().getFullYear();
    anchor.href = url;
    anchor.click();
      // window.open(url);
      // this.usersData = res?.data;
    }, error => {
      // this.spinnerService.hide();
      //alert(error.error.message)
    })
  }
}
