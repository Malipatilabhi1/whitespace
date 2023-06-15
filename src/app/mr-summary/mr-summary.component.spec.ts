import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MrSummaryComponent } from './mr-summary.component';

describe('MrSummaryComponent', () => {
  let component: MrSummaryComponent;
  let fixture: ComponentFixture<MrSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MrSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MrSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
