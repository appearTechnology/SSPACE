import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentMessageHistoryComponent } from './agent-message-history.component';

describe('AgentMessageHistoryComponent', () => {
  let component: AgentMessageHistoryComponent;
  let fixture: ComponentFixture<AgentMessageHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentMessageHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentMessageHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
