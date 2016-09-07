import { Component } from '@angular/core'
import { SideBar, CalenderMain } from './containers';
import { GetProjects } from './services';

@Component({
   selector: 'app',
   directives: [SideBar, CalenderMain],
   template: `
    <div class="marketing-planer-calendar">
        <sidebar [calenderData]="calenderData">Loading Project Data...</sidebar>
        <calender-main [calenderData]="calenderData"></calender-main>
    </div>  
   ` 
})
export class App{
    calenderData;
    constructor(private getProjects: GetProjects) {
         this.getProjects.request().subscribe(
           res =>  { 
               console.log(res.data);
               this.calenderData = res.data;     
            }
        );
    }
}