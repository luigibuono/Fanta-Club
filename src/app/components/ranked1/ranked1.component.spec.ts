import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ranked1Component } from './ranked1.component';

describe('Ranked1Component', () => {
  let component: Ranked1Component;
  let fixture: ComponentFixture<Ranked1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ranked1Component]
    });
    fixture = TestBed.createComponent(Ranked1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
