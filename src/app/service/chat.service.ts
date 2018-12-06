import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Chat } from '../models/Chat'
import { MessageNotification } from '../models/MessageNotification'
import { Profile } from '../models/Profile'

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  chatCollection: AngularFirestoreCollection<Chat>;
  chatDoc: AngularFirestoreDocument<Chat>;

  chats: Observable<Chat[]>;
  chat: Observable<Chat>;

  notificationCollection: AngularFirestoreCollection<MessageNotification>;
  notificationDoc: AngularFirestoreDocument<MessageNotification>;

  notification: Observable<MessageNotification>;
  notifications: Observable<MessageNotification[]>;

  profile: Observable<Profile>;
  profiles: Observable<Profile[]>;

  constructor(private afs: AngularFirestore) { }


  newChat(chat: Chat, id: string, user_id: string) {
    var db = this.afs.collection(`chats`).doc(`${id}`).collection(`${user_id}`).add(chat)
  }

  updateMessageNotification(notification: MessageNotification, user_id: string) {
    var db = this.afs.collection(`message_alert_agent`).doc(`${user_id}`).collection('notifications').add(notification)
  }

  updateNotification(notification: MessageNotification, id: string, docId: string) {
    this.notificationDoc = this.afs.doc(`message_alert_agent/${id}/notifications/${docId}`);
    this.notificationDoc.update(notification);
  }

  getCollection(id, user_id) {

    this.chatCollection = this.afs.collection<Chat>(`chats/${id}/${user_id}`)
    this.chats = this.chatCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        if(a.payload.doc.exists == false){
          return null
        } else {
          const data = a.payload.doc.data() as Chat;
          const id = a.payload.doc.id;
          return { id, ...data };
        }

      }))
    );
    return this.chats
  }

  getAgentChat(id, user_id){
    this.notificationCollection = this.afs.collection<MessageNotification>(`message_alert_agent/${id}/notifications`, ref => ref.where('clientId', '==', `${user_id}`))
    this.notifications = this.notificationCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        if(a.payload.doc.exists == false){
          return null
        } else {
          const data = a.payload.doc.data() as MessageNotification;
          const id = a.payload.doc.id;
          return { id, ...data };
        }

      }))
    );
    return this.notifications
  }

  getAgentChats(id){
    this.notificationCollection = this.afs.collection<MessageNotification>(`message_alert_agent/${id}/notifications`)
    this.notifications = this.notificationCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        if(a.payload.doc.exists == false){
          return null
        } else {
          const data = a.payload.doc.data() as MessageNotification;
          const id = a.payload.doc.id;
          return { id, ...data };
        }

      }))
    );
    return this.notifications
  }
}
