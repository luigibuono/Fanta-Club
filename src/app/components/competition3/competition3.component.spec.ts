import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Competition3Component } from './competition3.component';

describe('Competition3Component', () => {
  let component: Competition3Component;
  let fixture: ComponentFixture<Competition3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Competition3Component]
    });
    fixture = TestBed.createComponent(Competition3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
