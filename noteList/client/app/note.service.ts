// for inject this service as dependency
import {Injectable} from '@angular/core'; 
// for using http
import {Http, Headers, Response } from '@angular/http';
//observables
import 'rxjs/Rx';

@Injectable()
export class NoteService{
	public http:Http;
	constructor(private http:Http){
		this.http = http;
		console.log('service initialised');
	}

	public getNotes()
	{
		return this.http.get('/api/note').map((res:Response) => res.json());
	}

	public addNote(note)
	{
		console.log(note);
		var header = new Headers();
		header.append('Content-Type','application/json');
		return this.http.post('/api/note', JSON.stringify(note), {headers: header}).map((res:Response) => res.json());
	}
}