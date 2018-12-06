import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Profile } from '../models/Profile'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  profileCollection: AngularFirestoreCollection<Profile>;
  profileDoc: AngularFirestoreDocument<Profile>;
  profile: Observable<Profile[]>;
  user: Observable<Profile>;

  constructor(private afs: AngularFirestore) { }

  getUser(id: string): Observable<Profile> {
    this.profileDoc = this.afs.doc<Profile>(`users/${id}`);
    this.user = this.profileDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as Profile;
        data.id = action.payload.id;
        return data;
      }
    }));
    return this.user
  }
}
