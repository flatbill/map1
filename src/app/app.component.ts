import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'dev2';
  msg1  = 'Welcome to Fly New Sky. Do some map exploring.'
  but1State = 0
  routeOnOff = 0
  routeOnOffTxt = 'Off'
  showMenuTf = false
  items =["6D6 Greenville","24C Lowell","13C Lakeview"]

  // }
  routeOnOffClick(){
    this.routeOnOff =  this.routeOnOff==0 ? 1 : 0 //toggle  0 1
    this.routeOnOffTxt = this.routeOnOffTxt=='On' ? 'Off':'On'
  } 
  hamburgOnOffClick(){
    this.showMenuTf = this.showMenuTf==true ? false : true
     //toggle  true false  not sure i like ? : if/else
  }
} // end of export class AppComponent



