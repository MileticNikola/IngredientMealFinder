import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsListingComponent } from './results-listing.component';

describe('ResultsListingComponent', () => {
  let component: ResultsListingComponent;
  let fixture: ComponentFixture<ResultsListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultsListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
