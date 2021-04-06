import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {DataServiceService } from '../data-service.service'
import {Userdata} from '../userdata'
@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  public udata: Userdata[] = [];
  dtOptions: DataTables.Settings = {};
  constructor(public dataservice :DataServiceService) { }
  ngOnInit(): void 
  {
    this.dataservice.getuserdata().subscribe(
      (data:any) => {
        this.udata=data;
    }
    );

  }

}
