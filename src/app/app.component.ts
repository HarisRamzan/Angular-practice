import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  
  constructor(public router:Router)
  {

  }
  NevigateSecond(){
  this.router.navigateByUrl("\contactus");
  }
  NevigateFirst()
  {
    this.router.navigateByUrl("\About");
  }
}
