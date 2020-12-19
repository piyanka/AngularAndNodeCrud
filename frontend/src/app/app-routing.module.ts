import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListTutorialComponent } from  './components/list-tutorial/list-tutorial.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { EditTutorialComponent } from './components/edit-tutorial/edit-tutorial.component';

const routes: Routes = [
  { path: '', redirectTo: 'students', pathMatch: 'full'},
  { path: 'students', component: ListTutorialComponent },
  { path: 'add', component: AddTutorialComponent},
  { path: 'edit/:id', component: EditTutorialComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
