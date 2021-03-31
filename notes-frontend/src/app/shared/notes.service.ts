import { Injectable } from '@angular/core';
import { Note } from './note.model';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  notes:Note[]=new Array<Note>();

  constructor() { }

  getAll(){
    return this.notes;
  }
  
  get(id:number){
    return this.notes[id];
  }

  getId(note:Note){
    return this.notes.indexOf(note);
  }

  add(note:Note){
    return this.notes.push(note);
  }

  update(id:number,title:string,body:string){
    let note=this.notes[id];
    note.title=title;
    note.body=body;
  }

  delete(id:number){
    return this.notes.splice(id,1);
  }

  filter(query:string){
    query=query.toLowerCase().trim();

    //split up the search query into individual words
    let terms:string[]=query.split(' ');

    terms=[...new Set(terms)];

  }
}
