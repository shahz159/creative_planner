import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoProjectsComponent } from './to-do-projects.component';

describe('ToDoProjectsComponent', () => {
  let component: ToDoProjectsComponent;
  let fixture: ComponentFixture<ToDoProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
