import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamCalendarComponent } from './stream-calendar.component';

describe('StreamCalendarComponent', () => {
  let component: StreamCalendarComponent;
  let fixture: ComponentFixture<StreamCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreamCalendarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StreamCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
