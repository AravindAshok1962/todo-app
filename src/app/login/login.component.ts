import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataserviceService } from '../service/dataservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

uname=''
pswd=''
loginForm=this.fb.group({
 uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
 pswd: ['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]],
})
  constructor(private ds:DataserviceService,private router:Router, private fb:FormBuilder) { }
  ngOnInit(): void {
  }

  login()
  {
    var uname=this.loginForm.value.uname;
    var pswd=this.loginForm.value.pswd;
  if(this.loginForm.value)
  {
const result=this.ds.login(uname,pswd)
if (result) {
  alert("login successful")
  this.router.navigateByUrl('index')
}
else{
  alert ('login failed')
}
  

}
}}


