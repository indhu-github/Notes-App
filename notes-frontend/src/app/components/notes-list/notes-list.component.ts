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
        animate(60)
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
        ],{
          optional:true
        })
      ])
    ])
  ]
})
export class NotesListComponent implements OnInit {
  //cardTitle:string='first title';

  notes:Note[]=new Array<Note>();
  filteredNotes:Note[]=new Array<Note>();

  constructor(private noteService:NotesService) { }

  ngOnInit(){
   this.notes= this.noteService.getAll();
  // console.log(this.notes);
  this.filteredNotes=this.notes;
  }

  deleteNote(id:number){
    this.noteService.delete(id);
  }

  filter(query){
    query=query.target.value.toLowerCase().trim();

    let AllResults:Note[]=new Array<Note>();

    //split up the search query into individual words
    let terms:string[]=query.split(' ');

    //remove duplicates
    terms=[...new Set(terms)];

    //get all results into the AllResults array
    terms.forEach(term=>{
      let results:Note[]=this.relevantResults(term);

      //append results to the AllResults array
      AllResults=[...AllResults,...results];
    })
     //remove the duplicates to avoid displaying the same note multiple times in the UI
     this.filteredNotes=[...new Set(AllResults)];    

  }

  relevantResults(query:string) : Array<Note>{
    query=query.toLowerCase().trim();
    let relevantNotes=this.notes.filter(note=>{
      if(note.body.toLowerCase().includes(query) || note.title.toLowerCase().includes(query)){
        return true;
      }
      return false;
    })
    return relevantNotes;
  }
}
