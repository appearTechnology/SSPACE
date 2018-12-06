import { Component, OnInit, Input } from '@angular/core';
import { ChatService } from '../../../service/chat.service'
import { MessageNotification } from '../../../models/MessageNotification'

@Component({
  selector: 'app-client-panel',
  templateUrl: './client-panel.component.html',
  styleUrls: ['./client-panel.component.scss']
})
export class ClientPanelComponent implements OnInit {

  @Input() uid: string;
  clients: MessageNotification[]

  constructor(
    private chatService: ChatService
  ) { }

  ngOnInit() {
  
  }

}
