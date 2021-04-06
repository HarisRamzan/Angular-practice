import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MyfirstComponent } from './myfirst/myfirst.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  {path:"home",component:AppComponent},
  {path:"About",component:MyfirstComponent
},
{path:"contactus",component:SecondComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
