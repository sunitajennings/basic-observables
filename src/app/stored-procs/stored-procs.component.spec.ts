import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoredProcsComponent } from './stored-procs.component';

describe('StoredProcsComponent', () => {
  let component: StoredProcsComponent;
  let fixture: ComponentFixture<StoredProcsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoredProcsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoredProcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
