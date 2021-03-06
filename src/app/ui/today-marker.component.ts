import { Component } from '@angular/core';

@Component({
    selector: 'today-marker',
    template: `
    <div [style.left.px]="leftMargin" class="today-marker">{{ dateToday | date : 'dd.MM' }}</div>
    `
})

export class TodayMarker {
    dateToday;
    leftMargin;
    constructor () {
        this.dateToday = new Date();
        // according to the current date the todaymarker is placed 
        let initialMargin = 15;
        this.leftMargin = initialMargin + (this.dateToday.getMonth() * 30);
    }

}