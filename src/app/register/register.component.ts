import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataserviceService } from '../service/dataservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  uname="";
  pswd="";
  email="";


  registerForm=this.fb.group({
    uname:['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
    email:['',[Validators.required,Validators.pattern('a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    pswd:['',[Validators.required,Validators.pattern('[0-9a-zA-Z]*')]]
  })
  constructor(private ds:DataserviceService,private router:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
    
  }
register(){
  var uname=this.registerForm.value.uname;
  var pswd=this.registerForm.value.pswd;
  var email=this.registerForm.value.email;
  if (this.registerForm.value) {
    const result=this.ds.register(uname,pswd,email)
    if (result) {
      alert('success')
      this.router.navigateByUrl('')
    }
    else{
      alert('already here')
    }
  }
  else{
    alert('you failed')
    
  }
}
}

