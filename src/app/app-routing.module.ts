import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDosComponent } from './components/to-dos/to-dos.component';
import { AboutusComponent } from './components/pages/aboutus/aboutus.component';
import { BasicComponent } from './components/practice/basic/basic.component';
import { DatabingdingComponent } from './components/databingding/databingding.component';
import { DirectiveComponent } from './directive/directive.component';
const routes: Routes = [
  { path: '', component: ToDosComponent },
  { path: 'about', component: AboutusComponent },
  { path: 'basic', component: BasicComponent },
  { path: 'databibding', component: DatabingdingComponent },
  { path: 'directives', component: DirectiveComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
