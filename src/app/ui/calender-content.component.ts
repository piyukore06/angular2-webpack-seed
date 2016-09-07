    import { Component, ChangeDetectionStrategy } from '@angular/core'

@Component({
   selector: 'calender-content',
   template: `
            <div class="calender-content">
                <div class="row-item">
                    <div class="cell-item">&nbsp;
                        <div style="left: 60px; width: 390px" class="project-time">
                            <div class="project-name">
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr
                            </div>
                            <div style="left: 200px" class="project-visible"></div>
                            <div title="20.05.2016: Lorem ipsum dolor sit amet" data-toggle="tooltip" data-container="body" class="milestone start done">
                                <i class="mkicon mkicon-milestone"></i>
                            </div>
                            <div title="20.05.2016: Lorem ipsum dolor sit amet" style="left: 200px" data-toggle="tooltip" data-container="body" class="milestone">
                                <i class="mkicon mkicon-milestone"></i>
                            </div>
                            <div title="20.05.2016: Lorem ipsum dolor sit amet" style="left: 40px" data-toggle="tooltip" data-container="body" class="milestone old">
                                <i class="mkicon mkicon-milestone"></i>
                            </div>
                            <div title="20.05.2016: Lorem ipsum dolor sit amet" data-toggle="tooltip" data-container="body" class="milestone end">
                                <i class="mkicon mkicon-milestone"></i>
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

}
