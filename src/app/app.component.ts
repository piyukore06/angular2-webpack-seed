import { Component } from '@angular/core'
import { SideBar, CalenderMain } from './containers';
import { GetProjectsService } from './services';

@Component({
   selector: 'app',
   directives: [SideBar, CalenderMain],
   template: `
    <div class="marketing-planer-calendar">
        <sidebar [calenderData]="calenderData">Loading Project Data...</sidebar>
        <calender-main></calender-main>
    </div>  
   ` 
})
export class App{
    calenderData;
    constructor(private getProjectsService: GetProjectsService) {
         this.getProjectsService.request().subscribe(
           res =>  { 
               console.log(res.data);
               this.calenderData = res.data;     
            }
        );
    }
}