import { Component } from '@angular/core'
import { CalenderHeader, CalenderContent, TodayMarker } from './../../ui';
@Component({
   selector: 'calender-main',
   directives: [CalenderHeader, CalenderContent, TodayMarker],
   templateUrl: './app/containers/calender-main.component/calender-main.component.html'
})
export class CalenderMain{

}