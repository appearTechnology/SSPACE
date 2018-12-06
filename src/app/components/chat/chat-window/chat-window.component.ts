import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ProfileService } from '../../../service/profile.service'
import { Subscription, } from 'rxjs';
import { ChatService } from '../../../service/chat.service';
import { AuthService } from '../../../service/auth.service';
import { Profile } from '../../../models/Profile';
import { Chat } from '../../../models/Chat';
import { MessageNotification } from '../../../models/MessageNotification';
import { NgScrollbar } from 'ngx-scrollbar';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit {

  subs: Subscription[] = [];
  profile: Profile;
  agentProfile: Profile;
  chat: Chat;
  uid: string;
  first_name: string;
  last_name: string;
  profilePic: string;
  loaded: boolean;
  message: string;
  date: any;
  chats: Chat[];
  chatNotification: MessageNotification[];
  scrollable: any;
  sendEnabled: boolean;
  updateID: string;
  alert: number;

  @ViewChild(NgScrollbar) scrollRef: NgScrollbar;
  @Input() agent: string;
  @Input() client: string;

  constructor(
    private profileService: ProfileService,
    private chatService: ChatService,
    private authService: AuthService,
    public snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.getAgent()
    console.log(this.client)
    console.log(this.agent)
    setTimeout(()=>{ this.scrollToUsageSection()}, 1000)
  }

  scrollToUsageSection() {
    this.scrollRef.scrollToElement('#usage');
  }

  getAgent() {
    const sub2 = this.profileService.getUser(this.agent).subscribe(agent =>
      this.agentProfile = agent
    )
    this.subs.push(sub2)
    this.loaded = true
    this.getChatHistory()
  }

  getChatHistory() {
    const sub3 = this.chatService.getCollection(this.agent, this.client).subscribe(agent => {
      agent.sort((a, b) =>
        new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());
      this.chats = agent
      this.loaded = true
      setTimeout(()=>{ this.scrollToUsageSection()}, 1000)
      if (this.chats.length >= 0) {
        this.checkUpdate()
      } else {}
    });
    this.subs.push(sub3)
  }

  checkUpdate() {
    const sub4 = this.chatService.getAgentChat(this.agent, this.client).subscribe(client => {
      this.chatNotification = client
      this.updateID = this.chatNotification[0].id
      this.alert = this.chatNotification[0].alert
    })
    this.subs.push(sub4)
  }

  send() {

    if (this.message == "" || this.message == null || this.message == "↵") {
      this.snackBar.open("enter some text before you send a message 😌", "", {
        duration: 4000,
      })
    } else {
      this.sendChat()
      if (this.chats.length <= 0) {
        this.updateMessageNotification()
      } else {
        this.updateNotification()
      }
      this.message = ""
      this.scrollToUsageSection()
    }
  }

  updateNotification() {

    var notification = {
      message: this.message,
      alert: this.alert + 1,
      timestamp: new Date().toISOString(),
    }
    this.chatService.updateNotification(notification, this.agent, this.updateID)
    this.scrollRef.scrollToBottom(500).subscribe()

  }

  sendChat() {
    var value = {
      message: this.message,
      uid: this.client,
      timestamp: new Date().toISOString(),
    }
    this.chatService.newChat(value, this.agent, this.client)
    this.scrollRef.scrollToBottom()
  }

  updateMessageNotification() {
    var notification = {
      client: this.profile.first_name + " " + this.profile.last_name,
      clientId: this.client,
      profilePic: this.profile.profilePic,
      agent: this.agent,
      alert: 1,
      message: this.message,
      timestamp: new Date().toISOString(),
    }

    this.chatService.updateMessageNotification(notification, this.agent)
  }

}
