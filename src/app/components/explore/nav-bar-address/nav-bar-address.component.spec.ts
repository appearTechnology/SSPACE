import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarAddressComponent } from './nav-bar-address.component';

describe('NavBarAddressComponent', () => {
  let component: NavBarAddressComponent;
  let fixture: ComponentFixture<NavBarAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
