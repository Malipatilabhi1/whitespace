import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlgorithmSelectionComponent } from './algorithm-selection.component';

describe('AlgorithmSelectionComponent', () => {
  let component: AlgorithmSelectionComponent;
  let fixture: ComponentFixture<AlgorithmSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlgorithmSelectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlgorithmSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
