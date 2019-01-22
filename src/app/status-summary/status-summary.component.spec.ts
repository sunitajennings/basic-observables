import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusSummaryComponent } from './status-summary.component';

describe('StatusSummaryComponent', () => {
  let component: StatusSummaryComponent;
  let fixture: ComponentFixture<StatusSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
