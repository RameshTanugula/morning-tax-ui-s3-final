import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']

})


export class HeaderComponent implements OnInit {
  title = 'marningtax';
  isUser: boolean=false;
  userData: any;
  isLoggedIn: boolean=false;
  isAdmin: boolean = false;
  constructor(public user :AuthService){
    this.setUserSessionData();
    this.user.getLoggedInName.subscribe((name: any) => this.userData = name);
  
  }
  ngOnInit(): void {
    
  }
  logged(){
    this.userData = this.user.getData();
    console.log('loggedin', this.userData)
    if((this.userData?.data?.email?.toLowerCase() === 'e.abhinavreddy10@gmail.com')||
    this.userData?.data?.email?.toLowerCase() === 'admin@morningtax.com'){
      this.isAdmin = true;
    }
    if(this.userData.message === "Login success"){

      return true;
    }
    return false;

  }
  setUserSessionData() {
    this.userData = this.user.getData();
    this.isLoggedIn = false;

  if(this.userData.userId )
    this.isLoggedIn = true;
  }
 

  logout(){
    localStorage.setItem('user', '');
    localStorage.clear();
    this.isLoggedIn=false;
  }


}




