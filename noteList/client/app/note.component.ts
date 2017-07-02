import {Component} from '@angular/core';
import {NoteService} from './note.service';
import {Note} from './note';

@Component({
    moduleId: module.id,
	selector : 'note',
	templateUrl : 'note.component.html'
})
export class NoteComponent{
	public service: NoteService;
	public notes: Note[];

	constructor(private noteService: NoteService){
		this.service = noteService;	
		this.getNoteList();
	}

	getNoteList(){
		console.log(this.service);
		this.service.getNotes().subscribe(
					  data => {
						  this.notes = data
					  },
					  err => console.error(err),
					  () => console.log('completed')
		);
	}

	addNote(c) { 
		this.service.addNote(c).subscribe(
					  data => {
						  this.notes = data
					  },
					  err => console.error(err),
					  () => console.log('completed')
		);
	}
}