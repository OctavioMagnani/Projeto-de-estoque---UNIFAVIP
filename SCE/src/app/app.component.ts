import { Component, HostListener } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { inject } from '@angular/core';
import { map, shareReplay } from 'rxjs';
import { AppService } from './shared/service/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @HostListener('window:beforeunload')
  beforeUnloadHandler() {
    window.addEventListener("beforeunload", function (e) {
      var confirmationMessage = "\o/";
    
      (e || window.event).returnValue = confirmationMessage; 
      return confirmationMessage;                            
    });
  }

  
  constructor(
    private service: AppService
  ){

  }
  

  login=this.service.login
  title = 'vsfd';
}
