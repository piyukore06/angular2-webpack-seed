import { Component, Input, ChangeDetectionStrategy } from '@angular/core'
import { MaturityModel } from './../models';

@Component({
   selector: 'sidebar-content',
   template: `
    <div class="calendar-content">
        <div *ngFor="let obj of calenderData" class="row-item">
            <div class="cell-item title">
                <p>{{ obj.title }}</p>
            </div>
            <div class="cell-item status">{{ obj.status }}</div>
            <div class="cell-item maturity">
                <span *ngFor="let maturity of obj.maturities" class="{{getMaturityClass(maturity)}}">{{ maturity.percentage }}</span>
                
            </div>
        </div>
    </div>
   `,
   // data can be changed anly through input element => ChangeDetectionStrategy.OnPush
   changeDetection: ChangeDetectionStrategy.OnPush
})

export class SideBarContent{
    @Input () calenderData;
    // method to conditionalise the class according tp maturity.state
    getMaturityClass = (maturity: MaturityModel) => {
        if(maturity.state === 'red')
            return 'badge badge-danger'
        else if(maturity.state === 'yellow')
            return 'badge badge-bordered badge-warning'
        else
            return 'badge badge-bordered badge-success'
    }
}