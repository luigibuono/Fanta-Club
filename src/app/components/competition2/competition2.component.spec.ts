import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Competition2Component } from './competition2.component';

describe('Competition2Component', () => {
  let component: Competition2Component;
  let fixture: ComponentFixture<Competition2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Competition2Component]
    });
    fixture = TestBed.createComponent(Competition2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
