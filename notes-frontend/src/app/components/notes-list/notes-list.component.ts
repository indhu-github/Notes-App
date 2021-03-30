import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/shared/note.model';
import { NotesService } from 'src/app/shared/notes.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {
  //cardTitle:string='first title';

  notes:Note[]=new Array<Note>();

  constructor(private noteService:NotesService) { }

  ngOnInit(){
   this.notes= this.noteService.getAll();
   console.log(this.notes);
  }

  deleteNote(id:number){
    this.noteService.delete(id);
  }

}
