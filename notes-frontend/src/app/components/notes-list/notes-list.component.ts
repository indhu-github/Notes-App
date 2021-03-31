import { transition, trigger,style, animate, query, stagger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Note } from 'src/app/shared/note.model';
import { NotesService } from 'src/app/shared/notes.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
  animations:[
    trigger('itemAnim',[
      //Entry Animation
      transition('void=>*',[
        //Initial State
        style({
          height:0,
          opacity:0,
          transform:'scale(0.85)',
          'margin-bottom':0,

          //we have to expand out the padding properties
          paddingTop:0,
          paddingRight:0,
          paddingBottom:0,
          paddingLeft:0,
        }),

        //we first need to animate the spacing (which includes height and margin)
        animate('50ms',style({
            height:'*',
            'margin-bottom':'*',
            paddingTop:'*',
          paddingRight:'*',
          paddingBottom:'*',
          paddingLeft:'*',
        })),
        animate(200)
      ]),
//  any state to the element that is removed from the DOM
      transition('*=>void',[
        //first scale up
        animate(50,style({
          transform:'scale(1.05)',
        })),
        //then scale down back to normal size while beginning to fade out
        animate(50,style({
          transform:'scale(1)',
          opacity:0.75
        })),
        //scale down and fade out completely
        animate('120ms ease-out',style({
          transform:'scale(0.68)',
          opacity:0
        }))
      ])
    ]),

    trigger('listAnim',[
      transition('*=>*',[
        query(':enter',[
          style({
            opacity:0,
            height:0
          }),
          stagger(100,[
            animate('0.2s ease')
          ])
        ])
      ])
    ])
  ]
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
