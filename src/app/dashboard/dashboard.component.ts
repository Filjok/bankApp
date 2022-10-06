import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  acnod=''
  passd=''
  amtd=''
  acnow=''
  passw=''
  amtw=''

  user = ''


  constructor(private ds:DataService) { 
     this.user = this.ds.cuser
  }

  ngOnInit(): void {
  }

  deposit(){
    var acnod = this.acnod
    var passd = this.passd
    var amtd = this.amtd

    const result = this.ds.deposit(acnod,passd,amtd)

    if(result){
      alert(`${amtd} has credited ,balance is ${result}`)
    }
    

  }
  withdraw(){

    var acnow = this.acnow
    var passw = this.passw
    var amtw = this.amtw
    const result = this.ds.withdraw(acnow,passw,amtw)

    if(result){
      alert(`${amtw} debited from account ,balance is ${result}`)
    }

  }

}
