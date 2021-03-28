import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {

  @Input() title:string;
  @Input() body:string;

  @ViewChild('bodyText',{static:true}) bodyText : ElementRef<HTMLElement>;
  @ViewChild('truncator',{static:true}) truncator : ElementRef<HTMLElement>;

  constructor(private renderer:Renderer2) { }

  ngOnInit(): void {
    //work out if there is a text-overflow and if not, hide the truncator
    let style=window.getComputedStyle(this.bodyText.nativeElement,null);
    let viewableHeight=parseInt(style.getPropertyValue("height"),10);

    if(this.bodyText.nativeElement.scrollHeight > viewableHeight){
      //if there is a text overflow, then show the truncator
      this.renderer.setStyle(this.truncator.nativeElement,'display','block');
    }
    else{
      //hide the truncator
      this.renderer.setStyle(this.truncator.nativeElement,'display','none');
    }
  }

}
