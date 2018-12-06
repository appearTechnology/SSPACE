import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ProfileService } from '../../../service/profile.service'
import { Subscription, } from 'rxjs';
import { ChatService } from '../../../service/chat.service';
import { AuthService } from '../../../service/auth.service';
import { Agent } from '../../../models/Agent';
import { Profile } from '../../../models/Profile';
import { Chat } from '../../../models/Chat';
import { MessageNotification } from '../../../models/MessageNotification';
import { NgScrollbar } from 'ngx-scrollbar';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-enquire-window',
  templateUrl: './enquire-window.component.html',
  styleUrls: ['./enquire-window.component.scss']
})
export class EnquireWindowComponent implements OnInit {

  @Input() agent: string;
  @Input() uid: string;
  @ViewChild(NgScrollbar) scrollRef: NgScrollbar;

  subs: Subscription[] = [];
  profile: Profile;
  agentProfile: Profile;
  chat: Chat;
  //uid: string;
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

  constructor(
    private profileService: ProfileService,
    private chatService: ChatService,
    private authService: AuthService,
    public snackBar: MatSnackBar,
  ) {

  }

  ngOnInit() {
    this.agentProfile = {
      uid: "",
      first_name: "",
      last_name: "",
      profilePic: ""
    }
    this.loaded = false
    this.date = Date.now();
    this.sendEnabled = false;
    this.getAgent()
    console.log(this.uid)
    console.log(this.agent)
  }

  getAgent() {

    const sub3 = this.profileService.getUser(this.uid).subscribe(client =>
          this.profile = client
        );
    this.subs.push(sub3)

    const sub2 = this.profileService.getUser(this.agent).subscribe(agent =>
      this.agentProfile = agent
    )
    this.subs.push(sub2)
    this.loaded = true
  }

  showSend() {
    this.sendEnabled = true
  }

  ngOnDestroy() {
    // Unsubscribe from all observables
    // when this component is destroyed
    this.subs.forEach(sub => sub.unsubscribe());
  }

}
