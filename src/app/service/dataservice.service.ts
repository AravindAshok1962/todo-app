import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {
  currentuser='';
  // userdetails:any={
  //   Aravind: {uname: 'Aravind',pswd: 1008}
  // }

  constructor() {
    this.getDetails();
    
  }


  saveDetails(){
    if(this.userdetails){
      localStorage.setItem('DataBase',JSON.stringify(this.userdetails))
    }
    if(this.currentuser){
      localStorage.setItem('currentuser',JSON.stringify(this.currentuser))
    }
    // if(this.currentAcno){
    //   localStorage.setItem('currentAcno',JSON.stringify(this.currentAcno))
    // }
  }
  
  getDetails(){
    if(this.userdetails){
      this.userdetails=JSON.parse(localStorage.getItem('DataBase')|| '')
    }
    // if (this.currentAcno) {
    //   this.currentAcno=JSON.parse(localStorage.getItem('currentAcno')|| '')
      
    // }
    if (this.currentuser) {
      this.currentuser=JSON.parse(localStorage.getItem('currentuser')|| '')
      
    }
  }

  //database
  userdetails:any={
    'aravind':{uname:'aravind', pswd:'abcd',email:'aravind@gmail.com', todos:[]},
    'sijo':{uname:'sijo',pswd:'1234',email:'sijo@gmail.com',todos:[]},
    'joice':{uname:'joice',pswd:'ABCD',email:'joice@gmail.com', todos:[]},
  }
 

  login(uname:any,pswd:any){
     let userdetails=this.userdetails;
    if(uname in userdetails){
      if(pswd == userdetails[uname]['pswd']){
        this.currentuser=uname;
        this.saveDetails();
        return true;
      }
      else{
        
        return false;
      }
    }
    else{
      
      return false;
    }
}
register(uname:any,pswd:any,email:any){
let userdetails=this.userdetails
if (uname in userdetails) {
  return false;
}
else{
  userdetails[uname]={
    uname:uname,
    pswd:pswd,
    email:email,
    todos:[]
  }
  this.saveDetails();
  return true;
}
}

Add(uname:any,Task:any){
  let userdetails=this.userdetails
  userdetails[uname]['todos'].push(Task)                              //to add todos to the object of that array

  // console.log(userdetails)
  // console.log(localStorage)
  // this.saveDetails();
  return userdetails[uname]['todos'];
  
} 

CurrentTask="";
Edit(currentTask:any){
  this.CurrentTask=currentTask;
  return this.CurrentTask


  
}

Update(uname:any,eTask:any,CurrentTask:any){
  let userdetails=this.userdetails

  for(let t in userdetails[uname]['todos']){
    if(userdetails[uname]['todos'][t] == CurrentTask){
      userdetails[uname]['todos'][t]=eTask;
    }
  }
  return userdetails[uname]['todos'];
  
}

Delete(uname:any,Task:any,CurrentTask:any){

this.userdetails[uname]['todos']= this.userdetails[uname]['todos'].filter((a:any)=> a!==CurrentTask);
return this.userdetails[uname]['todos'];

}


logout(user:any)
{
  this.userdetails[user]['todos'].pop({})
  return true;
}
getTask(uname:any){
  return this.userdetails[uname]['todos']
}

}
