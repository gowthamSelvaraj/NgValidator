import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgValidatorComponent } from './ng-validator.component';

describe('NgValidatorComponent', () => {
  let component: NgValidatorComponent;
  let fixture: ComponentFixture<NgValidatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgValidatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
