import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  cuser:any = ''
  currentacno:any=''

  userDetails:any = {
    1000: { acno: 1000, username: 'amal', password: 123, balance: 1000 ,transaction:[]},
    1001: { acno: 1001, username: 'ajith', password: 123, balance: 10000 ,transaction:[]},
    1002: { acno: 1002, username: 'subin', password: 123, balance: 1000 ,transaction:[]},
    1003: { acno: 1003, username: 'ajo', password: 123, balance: 10000 ,transaction:[]}

  }

  constructor() { }

  register(acno:any,username:any,password:any){
    let userDetails = this.userDetails
    if(acno in userDetails){
      return false 
    }
    else{
      userDetails[acno]={acno,username,password,balance:0}
      console.log(userDetails);
      
      return true

    }

  }

  login(acno:any,pass:any) {
   
    let userDetails = this.userDetails

    if(acno in userDetails){
      if(pass == userDetails[acno]['password']){
        this.cuser = userDetails[acno]['username']
        this.currentacno = acno
       return true
       

      }
      else{
        alert('incorrect password')
        return false
      }

    }
    else{
      alert('user dosent exist')
      return false
    }
    
  }
  deposit(acnod:any,passd:any,amtd:any){
    let userDetails=this.userDetails
    var amount =parseInt(amtd)

    if(acnod in userDetails){
      if(passd==userDetails[acnod]['password']){
        userDetails[acnod]['balance']+=amount
        userDetails[acnod]['transaction'].push({type:'credited',amount:amount})
        return userDetails[acnod]['balance']
      }
      else{
        alert('incorrect password')
      }

    }
    else{
      alert('user dosent exist')
      return false
    }
  }

  withdraw(acno:any,pass:any,amt:any){
    let userDetails= this.userDetails
     let amount = parseInt(amt)
     if(acno in userDetails){
      if(pass == userDetails[acno]['password']){
        if(amount < userDetails[acno]['balance'] ){
          userDetails[acno]['balance'] -=amount
          userDetails[acno]['transaction'].push({type:'debited',amount:amount})
          return userDetails[acno]['balance']
        }
       
        else{
          alert('insufficient balance')

        }
      }
      else{
        alert('incorrect password ')
      }
     }
     else{
      alert('user dosent exist')
      return false
     }
  }

  getTransaction(acno:any){
    return this.userDetails[acno]['transaction']


  }
    
   
}
