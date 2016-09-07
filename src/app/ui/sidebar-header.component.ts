import { Component, ChangeDetectionStrategy } from '@angular/core'

@Component({
   selector: 'sidebar-header',
   template: `
   <div class="calendar-header">
     <div class="row-item">
        <div class="cell-item title">Projects</div>
        <div class="cell-item status">Status</div>
        <div class="cell-item maturity"> Maturity</div>
     </div>
   </div>
   `,
   // headers have static content so ChangeDetectionStrategy.OnPush
   changeDetection: ChangeDetectionStrategy.OnPush
})

export class SideBarHeader{}