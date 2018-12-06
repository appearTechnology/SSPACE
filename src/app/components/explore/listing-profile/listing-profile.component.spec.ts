import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingProfileComponent } from './listing-profile.component';

describe('ListingProfileComponent', () => {
  let component: ListingProfileComponent;
  let fixture: ComponentFixture<ListingProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
