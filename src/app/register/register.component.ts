import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private ser:ServiceService) { }
  pag="register"
  pos=this.pag
  ngDoCheck(){
    this.pos=this.pag
  }
  ngOnInit(): void {
  }
  title = 'task1';
  page="register";
  ref(){
    this.pag="home";
  }
  regi(){
    this.page="register";
  }
  login(){
    this.page="login";
  }
  signUp(data:any){
    this.ser.signUp(data)
  }
  userlogin(data:any){
    this.ser.userlogin(data).subscribe((res)=>{
    if(res==null) {
      alert("invalid email id or password")
    }
    else{
      this.ref();
      // this.pag="home";
      console.log(res)
    }

  })
  }

}
