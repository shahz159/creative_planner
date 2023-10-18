import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionToAssignComponent } from './action-to-assign.component';

describe('ActionToAssignComponent', () => {
  let component: ActionToAssignComponent;
  let fixture: ComponentFixture<ActionToAssignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionToAssignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionToAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
