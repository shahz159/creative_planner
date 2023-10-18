import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDashboardProjectsComponent } from './view-dashboard-projects.component';

describe('ViewDashboardProjectsComponent', () => {
  let component: ViewDashboardProjectsComponent;
  let fixture: ComponentFixture<ViewDashboardProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDashboardProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDashboardProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
