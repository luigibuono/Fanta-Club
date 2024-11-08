import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Competition1Component } from './competition1.component';

describe('Competition1Component', () => {
  let component: Competition1Component;
  let fixture: ComponentFixture<Competition1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Competition1Component]
    });
    fixture = TestBed.createComponent(Competition1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
