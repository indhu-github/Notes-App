import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Note } from 'src/app/shared/note.model';
import { NotesService } from 'src/app/shared/notes.service';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss']
})
export class NoteDetailsComponent implements OnInit {

  note:Note;
  constructor(private noteService:NotesService,private router:Router) { }

  ngOnInit(): void {
    this.note=new Note();
  }

  onSubmit(form:NgForm){
   // console.log(form);
   this.noteService.add(form.value);
   this.router.navigateByUrl("/");
  }
}
