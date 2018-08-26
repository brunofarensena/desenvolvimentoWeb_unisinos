import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReadjustComponent } from './add-readjust.component';

describe('AddReadjustComponent', () => {
  let component: AddReadjustComponent;
  let fixture: ComponentFixture<AddReadjustComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddReadjustComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReadjustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
