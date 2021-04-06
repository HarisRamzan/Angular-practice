import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private REST_API_SERVER = "https://jsonplaceholder.typicode.com";

  constructor(public httpclient : HttpClient) {

   }
   public getuserdata(){
    return this.httpclient.get(this.REST_API_SERVER+"/comments");
  }
  public postdata(){
    return this.httpclient.post(this.REST_API_SERVER,1);
  }
}
