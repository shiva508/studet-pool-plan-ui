import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { ToDosComponent } from './components/to-dos/to-dos.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/layout/header/header.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { AboutusComponent } from './components/pages/aboutus/aboutus.component';
import { BasicComponent } from './components/practice/basic/basic.component';
import { ComponentSelectorComponent } from './components/component-selector/component-selector.component';
import { BasicparciceComponent } from './components/practice/basicparcice/basicparcice.component';
import { DatabingdingComponent } from './components/databingding/databingding.component';
import { StringinterpolationComponent } from './components/databingding/stringinterpolation/stringinterpolation.component';
import { PropertyBindingComponent } from './components/databingding/property-binding/property-binding.component';
import { EventbindingComponent } from './components/databingding/eventbinding/eventbinding.component';
import { TwoWayDataBindingComponent } from './components/databingding/two-way-data-binding/two-way-data-binding.component';
import { DataBindingDemoComponent } from './components/databingding/data-binding-demo/data-binding-demo.component';
import { DirectiveComponent } from './directive/directive.component';
import { UserComponent } from './directive/user/user.component';
import { RecipesComponent } from './studentfood/recipes/recipes.component';
import { RecipeListComponent } from './studentfood/recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './studentfood/recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './studentfood/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './studentfood/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './studentfood/shopping-list/shopping-edit/shopping-edit.component';
import { SpheaderComponent } from './studentfood/spheader/spheader.component';
import { ComponentDeepDiveComponent } from './components/practice/component-deep-dive/component-deep-dive.component';
import { CockpitComponent } from './components/practice/component-deep-dive/cockpit/cockpit.component';
import { ServerElementComponent } from './components/practice/component-deep-dive/server-element/server-element.component';
import { ComponentLifecycleComponent } from './components/practice/component-deep-dive/component-lifecycle/component-lifecycle.component';
import { ComponentLifecycleFormComponent } from './components/practice/component-deep-dive/component-lifecycle-form/component-lifecycle-form.component';
import { NumberComponentComponent } from './directive/number-component/number-component.component';
import { DynamicHeigthDirectiveDirective } from './directive/dynamic-heigth-directive.directive';
import { DetterDynamicHeigthDirectiveDirective } from './directive/detter-dynamic-heigth-directive.directive';
import { UnlessDirectiveDirective } from './directive/unless-directive.directive';
import { DropdownDiectiveDirective } from './studentfood/directives/dropdown-diective.directive';
import { AccountListComponent } from './service/account-list/account-list.component';
import { AccountComponent } from './service/account/account/account.component';
import { NewaccountComponent } from './service/newaccount/newaccount/newaccount.component';
import { AccountServiceService } from './service/service/account-service.service';
import { ShoppingServiceService } from './studentfood/shopping-list/service/shopping-service.service';
import { NavigationComponent } from './navigation/navigation.component';
import { ParamNavigationComponent } from './navigation/param/param-navigation/param-navigation.component';
import { EditComponentComponent } from './navigation/edit/edit-component/edit-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    ToDosComponent,
    TodoItemComponent,
    HeaderComponent,
    AddTodoComponent,
    AboutusComponent,
    BasicComponent,
    ComponentSelectorComponent,
    BasicparciceComponent,
    DatabingdingComponent,
    StringinterpolationComponent,
    PropertyBindingComponent,
    EventbindingComponent,
    TwoWayDataBindingComponent,
    DataBindingDemoComponent,
    DirectiveComponent,
    UserComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    SpheaderComponent,
    ComponentDeepDiveComponent,
    CockpitComponent,
    ServerElementComponent,
    ComponentLifecycleComponent,
    ComponentLifecycleFormComponent,
    NumberComponentComponent,
    DynamicHeigthDirectiveDirective,
    DetterDynamicHeigthDirectiveDirective,
    UnlessDirectiveDirective,
    DropdownDiectiveDirective,
    AccountListComponent,
    AccountComponent,
    NewaccountComponent,
    NavigationComponent,
    ParamNavigationComponent,
    EditComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AccountServiceService, ShoppingServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
