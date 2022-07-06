import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyRowAdapterComponent } from './body-row-adapter.component';

describe('BodyRowAdapterComponent', () => {
  let component: BodyRowAdapterComponent;
  let fixture: ComponentFixture<BodyRowAdapterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyRowAdapterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyRowAdapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
