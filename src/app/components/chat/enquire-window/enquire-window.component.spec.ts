import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquireWindowComponent } from './enquire-window.component';

describe('EnquireWindowComponent', () => {
  let component: EnquireWindowComponent;
  let fixture: ComponentFixture<EnquireWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnquireWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnquireWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
