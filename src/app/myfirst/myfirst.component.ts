import { Component, OnInit,AfterViewInit } from '@angular/core';
import { My } from '../my';

@Component({
  selector: 'app-myfirst',
  templateUrl: './myfirst.component.html',
  styleUrls: ['./myfirst.component.css']
})
export class MyfirstComponent implements OnInit {
obj:My=new My();
strArr:string[]=["Pakistan","India","Itly","Australia"]
isShow:boolean=false;
  constructor() {
    this.obj.id=1;
    this.obj.name="Haris Ramzan";
   }

  ngOnInit(): void {
  }
  custome(){
    console.log(this.obj)
    this.obj.name="kkkkkkk"
    this.isShow=true;
    
  }
}
