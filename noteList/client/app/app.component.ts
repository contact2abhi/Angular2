import { Component } from '@angular/core';
import { HeaderComponent } from './header.component';
import {NoteComponent} from './note.component';
import {NoteService} from './note.service';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl : 'app.component.html',
  directives: [ HeaderComponent, NoteComponent ],
  providers: [NoteService]
})

export class AppComponent {
	constructor(){
	
	}
}