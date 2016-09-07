import { Component, Input, ChangeDetectionStrategy } from '@angular/core'

@Component({
   selector: 'calender-content',
   template: `
            <div class="calender-content">
                <div *ngFor="let obj of calenderData" class="row-item">
                    <div class="cell-item">
                        <div style="left: 60px; width: 390px" class="project-time">
                            <div class="project-name">
                                {{ obj.title }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
   `,
   // headers have static content so ChangeDetectionStrategy.OnPush
   changeDetection: ChangeDetectionStrategy.OnPush
})

export class CalenderContent{
    @Input () calenderData;
}
