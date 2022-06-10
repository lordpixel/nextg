import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContiTableComponent } from './conti-table.component';

describe('ContiTableComponent', () => {
  let component: ContiTableComponent;
  let fixture: ComponentFixture<ContiTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContiTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContiTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
