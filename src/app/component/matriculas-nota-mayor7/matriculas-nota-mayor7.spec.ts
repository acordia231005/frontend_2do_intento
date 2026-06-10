import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriculasNotaMayor7 } from './matriculas-nota-mayor7';

describe('MatriculasNotaMayor7', () => {
  let component: MatriculasNotaMayor7;
  let fixture: ComponentFixture<MatriculasNotaMayor7>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatriculasNotaMayor7],
    }).compileComponents();

    fixture = TestBed.createComponent(MatriculasNotaMayor7);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
