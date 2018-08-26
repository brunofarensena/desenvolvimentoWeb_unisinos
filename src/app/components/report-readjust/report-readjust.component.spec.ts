import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportReadjustComponent } from './report-readjust.component';

describe('ReportReadjustComponent', () => {
  let component: ReportReadjustComponent;
  let fixture: ComponentFixture<ReportReadjustComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportReadjustComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportReadjustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
