import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoListingsComponent } from './geo-listings.component';

describe('GeoListingsComponent', () => {
  let component: GeoListingsComponent;
  let fixture: ComponentFixture<GeoListingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoListingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
