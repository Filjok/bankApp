import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  quote = "your perfect banking partner"

  acno = ''
  pass =''


 

  constructor(private router:Router,private ds:DataService) { }

  ngOnInit(): void {
  }

  login() {
    var acno = this.acno
    var pass = this.pass
    const result = this.ds.login(acno,pass)
    if(result){
      alert('login success')
      this.router.navigateByUrl('dashboard')
      
      
      
      
    }
    
    
    
  }
  // login(a:any,b:any) {
    
    
  //   var acno = a.value
  //   var pass = b.value
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

  // acnoChange(event: any) {
  //   this.acno = event.target.value;

  // }
  // passChange(event:any){
  //   this.pass= event.target.value
    
    
    
  // }

}
