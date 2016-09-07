import { Component } from '@angular/core'
import { CalenderHeader, CalenderContent, TodayMarker } from './../ui';
@Component({
   selector: 'calender-main',
   directives: [CalenderHeader, CalenderContent, TodayMarker],
   template: `
   <div class="calendar-main year-view">
    <div class="calendar-container">
        <div style="width: 1440px" class="calendar-header">
            <today-marker></today-marker>
            <calender-header></calender-header>
        </div>
        <calender-content></calender-content>
    </div>
   </div>
   `
})
export class CalenderMain{

}