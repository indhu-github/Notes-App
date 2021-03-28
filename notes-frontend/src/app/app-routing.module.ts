import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { NoteDetailsComponent } from './components/note-details/note-details.component';
import { NotesListComponent } from './components/notes-list/notes-list.component';

const routes: Routes = [
  {path:"",component:MainLayoutComponent,children:[
    {path:"",component:NotesListComponent},
    {path:':id',component:NoteDetailsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
