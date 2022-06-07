import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryTokenComponent } from './query-token.component';

describe('<query-token />>', () => {
  let component: QueryTokenComponent;
  let fixture: ComponentFixture<QueryTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryTokenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
