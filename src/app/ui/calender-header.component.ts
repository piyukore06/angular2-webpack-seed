import { Component, ChangeDetectionStrategy } from '@angular/core'

@Component({
   selector: 'calender-header',
   template: `
    <div class="row-calendar-year">
        <div *ngFor="let year of years" class="cell-calendar-year">
            <div  class="row-calendar year">
                <div class="cell-calendar">
                    <strong>{{ year }}</strong>
                </div>
            </div>
            <div class="row-calendar quarter">
                <div *ngFor="let quarter of quarters"  class="cell-calendar">{{ quarter }}</div>
            </div>
            <div class="row-calendar month">
                <div *ngFor="let month of months" class="cell-calendar"><span>{{ month }}</span></div>
            </div>
        </div>
    </div>
   `,
   // headers have static content so ChangeDetectionStrategy.OnPush
   changeDetection: ChangeDetectionStrategy.OnPush
})

export class CalenderHeader{
    years: Array<Number>;
    quarters: Array<String>;
    months: Array<String>;
    constructor(){
        // just for dummy project the data is defined locally 
        // for an enterprise app they can be requested with an api service
        this.years = [2016, 2017, 2018, 2019];
        this.quarters = ['Q1', 'Q2', 'Q3', 'Q4'];
        this.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    }
}