import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectAssignTaskComponent } from './project-assign-task.component';

describe('ProjectAssignTaskComponent', () => {
  let component: ProjectAssignTaskComponent;
  let fixture: ComponentFixture<ProjectAssignTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectAssignTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectAssignTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
