import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  quote = "your perfect banking partner"

  acno = ''
  pass =''


  userDetails:any = {
    1000: { acno: 1000, username: 'amal', password: 123, balance: 1000000 },
    1001: { acno: 1001, username: 'ajith', password: 123, balance: 100000 },
    1002: { acno: 1002, username: 'subin', password: 123, balance: 1000 },
    1003: { acno: 1003, username: 'ajo', password: 123, balance: 10000 }

  }

  constructor() { }

  ngOnInit(): void {
  }

  // login() {
  //   var acno = this.acno
  //   var pass = this.pass
  //   let userDetails = this.userDetails

  //   if(acno in userDetails){
  //     if(pass == userDetails[acno]['password']){
  //       alert("login successful")

  //     }
  //     else{
  //       alert("incorrect password")
  //     }

  //   }
  //   else{
  //     alert("user dosen't exist")
  //   }
    
  // }
  login(a:any,b:any) {
    
    
    var acno = a.value
    var pass = b.value
    let userDetails = this.userDetails

    if(acno in userDetails){
      if(pass == userDetails[acno]['password']){
        alert("login successful")

      }
      else{
        alert("incorrect password")
      }

    }
    else{
      alert("user dosen't exist")
    }
    
  }

  // acnoChange(event: any) {
  //   this.acno = event.target.value;

  // }
  // passChange(event:any){
  //   this.pass= event.target.value
    
    
    
  // }

}
