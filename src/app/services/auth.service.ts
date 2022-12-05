import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  userName: string | undefined;
  userdetail: any;
  profileImageFileOutFileLink: string = "http://viitortechnologies.com/images/4.JPG"
  public getLoggedInName = new Subject();
    constructor(private http: HttpClient) { 
    this.userdetail = JSON.parse(localStorage.getItem('user') || '{}');
  }
  async storeData(data:any) {
    this.getLoggedInName.next(data);
    // localStorage.setItem('user', JSON.stringify(data));
}
  getData() {
    return JSON.parse(localStorage.getItem('user') || '{}');
 }
  
  getMemberType() {  
    const userdetails = JSON.parse(localStorage.getItem('user') || '{}');

    return userdetails;
  }
  
  logoutUser() {
    localStorage.clear()
    // this.route.navigate(['/login'])
  }
  //if no username then we will get error.
  getToken(){
    const userdetails = JSON.parse(localStorage.getItem('user') || '{}');

    return userdetails.userId;
  }
  isLoggedIn() {
    const usertoken = this.getToken();
    if (usertoken != null) {
      return true
    }
    return false;
  }
  getLoggedUserDetails() {
    const userdetails = JSON.parse(localStorage.getItem('user') || '');

    return userdetails;
  }
  getuserType() {
    const userdetails = JSON.parse(localStorage.getItem('user') || '{}');

    return userdetails.memberType;
  }
  isUserLoggedIn() {
    const usertoken = this.getToken();
    if (usertoken != null) {
      return true
    }
    return false;
  }
 



  // private prodCount: number = 0;
  // public prodCountCountChange: Subject<number> = new Subject();
  // updateCount(count: number = 0): void {
  //   this.prodCount = count;
  //   this.prodCountCountChange.next(this.prodCount);
  // }
  //KP08202020
  errorHandler
    (error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      switch (error.status) {
        case 400:
          alert("something went wrong, " + error.error.errorMessage);
          break;
        case 404:
          alert("something went wrong," + error.error.errorMessage);
          break;
        case (!error.ok):
          alert("something went wrong while connecting server")
      }
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
