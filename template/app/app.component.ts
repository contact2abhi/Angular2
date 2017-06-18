import { Component } from '@angular/core';
import { HeaderComponent } from './header.component';

@Component({
  selector: 'my-app',
  templateUrl : 'views/layout.html'
  directives: [ HeaderComponent ]
})
export class AppComponent { }