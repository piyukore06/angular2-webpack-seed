import { Component, Input } from '@angular/core'
import { SideBarHeader, SideBarContent } from './../../ui';
import { GetProjectsService } from './../../services';
import { CalenderDataModel, MaturityModel } from './../../models';

@Component({
   selector: 'sidebar',
   directives: [SideBarHeader, SideBarContent],
   template: `
   <div class="calendar-sidebar">
      <sidebar-header></sidebar-header>
      <sidebar-content [calenderData]="calenderData"></sidebar-content>
   </div>
   `
})

export class SideBar{
    @Input () calenderData;
    constructor(private getProjectsService: GetProjectsService) {
       
    }

}
