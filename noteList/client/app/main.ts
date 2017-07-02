import { bootstrap } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';
import {NoteService} from './note.service';
import {HTTP_PROVIDERS, Http} from '@angular/http';
import {disableDeprecatedForms, provideForms} from '@angular/forms';


bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  NoteService,
   disableDeprecatedForms(),
   provideForms()
]);