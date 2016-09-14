import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
// import { RouterModule } from '@angular/router'
import { App, Providers }  from './';
import { GetProjects } from './services/get-projects.service'
import { SideBar, CalenderMain } from './containers';

@NgModule({
  imports: [ 
      BrowserModule,
      // by doing theis we don't have to import our http
      // forms or router directives in our component annotations
      // ie, get rid of repetitive boilerplate code in components
    //   FormsModule,
      HttpModule,
    //   RouterModule
       ],
      //  Services go in providers
      // using ...Providers doesn't work in rc.4 to rc.5 hence used GetProjects
providers: [ GetProjects ],
       // Directives, components and pipes go in declarations 
  declarations: [ App, SideBar, CalenderMain ],
  bootstrap:    [ App ]
})
export class AppModule { }
