import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ranked2Component } from './ranked2.component';

describe('Ranked2Component', () => {
  let component: Ranked2Component;
  let fixture: ComponentFixture<Ranked2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ranked2Component]
    });
    fixture = TestBed.createComponent(Ranked2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
