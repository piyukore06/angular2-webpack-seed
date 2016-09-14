import { Component, Input, ChangeDetectionStrategy } from '@angular/core'

@Component({
   selector: 'calender-content',
   template: `
    <div class="calender-content">
        <div *ngFor="let obj of calenderData" class="row-item">
            <div class="cell-item">
                <div class="project-time">
                    <div class="project-name">
                        {{ obj.title }}<br/>
                    </div>
                </div>
            </div>
        </div>
    </div>
   `,
   styles: [
       `.marketing-planer-calendar .calendar-main .calendar-content .project-time {
            height: 80%;
            margin-top: .4rem;
            position: absolute;
            top: 0;
            background-color: rgba(0,152,208,.5);
            z-index: 3;
        }`
   ],
   // headers have static content so ChangeDetectionStrategy.OnPush
   changeDetection: ChangeDetectionStrategy.OnPush
})

export class CalenderContent{
    @Input () calenderData;
}
