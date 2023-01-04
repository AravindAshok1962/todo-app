import { Component, OnInit } from '@angular/core';
import { DataserviceService } from '../service/dataservice.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  Task="";
  uname="";
  todos:any
  eTask:any
  CurrentTask:any

  constructor(private ds:DataserviceService ) { }

  ngOnInit(): void {
  }


  
  Add(){
    this.uname=this.ds.currentuser
    this.todos= this.ds.Add(this.uname,this.Task);
    console.log(this.todos);
    this.Task='';
  }

  Edit(i:number){
    this.CurrentTask=this.todos[i];
    this.CurrentTask=this.ds.Edit(this.CurrentTask);

    this.eTask=this.CurrentTask
    console.log(i);


  }
  Update(i:number){
    this.uname=this.ds.currentuser
    this.CurrentTask=this.ds.Edit(this.CurrentTask);
    console.log(i);
    console.log(this.CurrentTask);
    
    this.todos=this.ds.Update(this.uname,this.eTask,this.CurrentTask);
  }

  Delete(i:number){

    this.CurrentTask=this.todos[i];
    this.todos=this.ds.Delete(this.uname,this.Task,this.CurrentTask)

  }

  }
  
