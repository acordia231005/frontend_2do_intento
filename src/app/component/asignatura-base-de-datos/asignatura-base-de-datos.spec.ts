import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignaturaBaseDeDatos } from './asignatura-base-de-datos';

describe('AsignaturaBaseDeDatos', () => {
  let component: AsignaturaBaseDeDatos;
  let fixture: ComponentFixture<AsignaturaBaseDeDatos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsignaturaBaseDeDatos],
    }).compileComponents();

    fixture = TestBed.createComponent(AsignaturaBaseDeDatos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
