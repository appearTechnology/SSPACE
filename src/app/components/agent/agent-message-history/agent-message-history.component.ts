import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ChatService } from '../../../service/chat.service'
import { MessageNotification } from '../../../models/MessageNotification'
import { Chat } from '../../../models/Chat';
import { Subscription, } from 'rxjs';

@Component({
  selector: 'app-agent-message-history',
  templateUrl: './agent-message-history.component.html',
  styleUrls: ['./agent-message-history.component.scss']
})
export class AgentMessageHistoryComponent implements OnInit {

  @Input() uid: string;
  @Output() newDoc: EventEmitter<String> = new EventEmitter();
  clients: MessageNotification[]
  chats: Chat[];
  subs: Subscription[] = [];
  //uid: string;

  constructor(
    private chatService: ChatService
  ) { }

  ngOnInit() {
    this.chatService.getAgentChats(this.uid).subscribe(client => {
      this.clients = client
      console.log(client)
    })
  }

  selectedUser(x: string){
    this.newDoc.emit(x)
    console.log(x)
  }

}
