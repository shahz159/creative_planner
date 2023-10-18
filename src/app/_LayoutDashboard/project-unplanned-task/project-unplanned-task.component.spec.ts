import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectUnplannedTaskComponent } from './project-unplanned-task.component';

describe('ProjectUnplannedTaskComponent', () => {
  let component: ProjectUnplannedTaskComponent;
  let fixture: ComponentFixture<ProjectUnplannedTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectUnplannedTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectUnplannedTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
