import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotoCalcioComponent } from './toto-calcio.component';

describe('TotoCalcioComponent', () => {
  let component: TotoCalcioComponent;
  let fixture: ComponentFixture<TotoCalcioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotoCalcioComponent]
    });
    fixture = TestBed.createComponent(TotoCalcioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
