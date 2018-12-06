import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlistingPanelComponent } from './addlisting-panel.component';

describe('AddlistingPanelComponent', () => {
  let component: AddlistingPanelComponent;
  let fixture: ComponentFixture<AddlistingPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddlistingPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddlistingPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
