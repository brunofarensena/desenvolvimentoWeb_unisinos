import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditReadjustComponent } from './edit-readjust.component';

describe('EditReadjustComponent', () => {
  let component: EditReadjustComponent;
  let fixture: ComponentFixture<EditReadjustComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditReadjustComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditReadjustComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
