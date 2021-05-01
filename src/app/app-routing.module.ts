import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDosComponent } from './components/to-dos/to-dos.component';
import { AboutusComponent } from './components/pages/aboutus/aboutus.component';
import { BasicComponent } from './components/practice/basic/basic.component';
import { DatabingdingComponent } from './components/databingding/databingding.component';
import { DirectiveComponent } from './directive/directive.component';
import { ComponentDeepDiveComponent } from './components/practice/component-deep-dive/component-deep-dive.component';
import { RecipesComponent } from './studentfood/recipes/recipes.component';
import { ShoppingListComponent } from './studentfood/shopping-list/shopping-list.component';
import { AccountListComponent } from './service/account-list/account-list.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ParamNavigationComponent } from './navigation/param/param-navigation/param-navigation.component';
import { EditComponentComponent } from './navigation/edit/edit-component/edit-component.component';
import { ClassRoomComponent } from './navigation/nested/class-room/class-room.component';
import { SubjectlistComponent } from './navigation/nested/subjects/subjectlist/subjectlist.component';
import { TodayComponent } from './navigation/nested/today/today.component';
import { TableComponent } from './components/table/table/table.component';

const routes: Routes = [
  { path: '', component: ToDosComponent },
  { path: 'about', component: AboutusComponent },
  { path: 'basic', component: BasicComponent },
  { path: 'databibding', component: DatabingdingComponent },
  { path: 'directives', component: DirectiveComponent },
  { path: 'componentsdeepdive', component: ComponentDeepDiveComponent },
  { path: 'recipes', component: RecipesComponent },
  { path: 'shoppinglist', component: ShoppingListComponent },
  { path: 'service', component: AccountListComponent },
  { path: 'navigation', component: NavigationComponent },
  { path: 'navigation/:id/:name', component: ParamNavigationComponent },
  { path: 'navigations/:id/edit', component: EditComponentComponent },
  { path: 'classroom', component: ClassRoomComponent },
  { path: 'subject', component: SubjectlistComponent },
  { path: 'today', component: TodayComponent },
  { path: 'table',component:TableComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
