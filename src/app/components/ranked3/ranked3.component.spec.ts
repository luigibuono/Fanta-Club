import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ranked3Component } from './ranked3.component';

describe('Ranked3Component', () => {
  let component: Ranked3Component;
  let fixture: ComponentFixture<Ranked3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ranked3Component]
    });
    fixture = TestBed.createComponent(Ranked3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
