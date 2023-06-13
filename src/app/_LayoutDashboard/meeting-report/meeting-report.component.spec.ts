import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingReportComponent } from './meeting-report.component';

describe('MeetingReportComponent', () => {
  let component: MeetingReportComponent;
  let fixture: ComponentFixture<MeetingReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetingReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetingReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
