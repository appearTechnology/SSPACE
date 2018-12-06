import { Component, OnInit, Input, } from '@angular/core';

@Component({
  selector: 'app-agent-messages',
  templateUrl: './agent-messages.component.html',
  styleUrls: ['./agent-messages.component.scss']
})
export class AgentMessagesComponent implements OnInit {


  @Input() uid: string;
  clientId: string;

  constructor(
  ) { }

  ngOnInit() {
    this.clientId = "kxIc7FNqynRydQE3p8ilzI8TK9e2"
  }

  onNewDoc(docId: string){
    this.clientId = docId
  }
}
