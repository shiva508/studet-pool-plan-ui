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
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
