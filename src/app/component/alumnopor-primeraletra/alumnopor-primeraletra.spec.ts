import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoporPrimeraletra } from './alumnopor-primeraletra';

describe('AlumnoporPrimeraletra', () => {
  let component: AlumnoporPrimeraletra;
  let fixture: ComponentFixture<AlumnoporPrimeraletra>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlumnoporPrimeraletra],
    }).compileComponents();

    fixture = TestBed.createComponent(AlumnoporPrimeraletra);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
