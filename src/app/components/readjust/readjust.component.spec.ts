import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadjustComponent } from './readjust.component';

describe('ReadjustComponent', () => {
  let component: ReadjustComponent;
  let fixture: ComponentFixture<ReadjustComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadjustComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadjustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
