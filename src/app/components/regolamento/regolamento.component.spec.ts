import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegolamentoComponent } from './regolamento.component';

describe('RegolamentoComponent', () => {
  let component: RegolamentoComponent;
  let fixture: ComponentFixture<RegolamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegolamentoComponent]
    });
    fixture = TestBed.createComponent(RegolamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
