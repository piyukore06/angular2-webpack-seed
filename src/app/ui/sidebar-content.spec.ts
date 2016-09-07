import { inject, async } from '@angular/core/testing';
import { TestComponentBuilder, ComponentFixture } from '@angular/compiler/testing';
import { Component } from '@angular/core';
import { SideBarContent } from './';

@Component({
    selector: 'sidebar-content-test',
    directives: [SideBarContent],
    template: '<sidebar-content [calenderData]="calenderData"></sidebar-content>'
})
class TestComponent{
    calenderData = [
        {
            "id":"8f42c780-cca3-4331-9985-e27988c567c5",
            "title":"Season Campaigns Spring/Summer 2016",
            "programId":"5a4a9517-a97a-4017-b1b4-d0fde4dc488a",
            "programTitle":"Retail",
            "status":"Open",
            "maturities":[
                {
                    "id":"52fff952-cd5c-4e80-b443-825f4f77ff51",
                    "title":"Project Budget",
                    "percentage":"50",
                    "state":"red"
                },
                {
                    "id":"94edbf27-5700-40e6-8d7f-08c40dbfa332",
                    "title":"Project Timing",
                    "percentage":"20",
                    "state":"green"
                }
            ]
        }
    ];
}

describe('SideBarContent: component', () => {
  let tcb;
  
  //setup
  beforeEach(inject([TestComponentBuilder], _tcb => { 
    tcb = _tcb
  }));
  
  //specs
  it('should render title correctly', async(() => {
    tcb.createAsync(TestComponent).then((fixture: ComponentFixture<TestComponent>) =>{
            const title = fixture.nativeElement;
            fixture.detectChanges();
            expect(title.querySelector('.title').textContent.trim()).toEqual("Season Campaigns Spring/Summer 2016");
        })
    // .catch(e => done.fail(e));
  }));
}) 
