import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionToProjectComponent } from './action-to-project.component';

describe('ActionToProjectComponent', () => {
  let component: ActionToProjectComponent;
  let fixture: ComponentFixture<ActionToProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionToProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionToProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
