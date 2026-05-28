import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignaturaComponent } from './asignatura-component';

describe('AsignaturaComponent', () => {
  let component: AsignaturaComponent;
  let fixture: ComponentFixture<AsignaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsignaturaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AsignaturaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
