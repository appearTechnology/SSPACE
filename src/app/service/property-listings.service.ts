import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Listing } from '../models/Listing'
import { switchMap } from 'rxjs/operators'
import * as geofirex from 'geofirex';
import * as firebase from 'firebase/app'
import {GeoFirePoint} from 'geofirex';

@Injectable({
  providedIn: 'root'
})
export class PropertyListingsService {
  clientsCollection: AngularFirestoreCollection<Listing>;
  clientDoc: AngularFirestoreDocument<Listing>;
  clients: Observable<Listing[]>;
  client: Observable<Listing>;
  points: Observable<any>;
  geo = geofirex.init(firebase);

  constructor(private afs: AngularFirestore) {
    this.clientsCollection = this.afs.collection('property', ref => ref.where(
      `uid`, '==', `xc`))
  }


  getProperty(id: string): Observable<Listing> {
    this.clientDoc = this.afs.doc<Listing>(`property`);
    this.client = this.clientDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as Listing;
        data.id = action.payload.id;
        return data;
      }
    }));
    return this.client
  }

  getPropertyProfile(id: string): Observable<Listing> {
    this.clientDoc = this.afs.doc<Listing>(`property/${id}`);
    this.client = this.clientDoc.snapshotChanges().pipe(map(action => {
      if (action.payload.exists === false) {
        return null;
      } else {
        const data = action.payload.data() as Listing;
        data.id = action.payload.id;
        return data;
      }
    }));
    return this.client
  }

  getCollection(id) {

    this.clientsCollection = this.afs.collection<Listing>('property', ref => ref.where('uid', '==', `${id}`))
    this.clients = this.clientsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        if(a.payload.doc.exists == false){
          return null
        } else {
          const data = a.payload.doc.data() as Listing;
          const id = a.payload.doc.id;
          return { id, ...data };
        }

      }))
    );
    return this.clients
  }


  newProperty(property: Listing, id: string) {

    let uid = this.afs.createId();
    var db = this.afs.collection(`property`).add(property)
  }

  newListing(property: Listing) {

    var db = this.afs.collection(`property`).add(property).then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
      return docRef.id
    })
  }

  updateListing(property: Listing, id: string) {
    this.clientDoc = this.afs.doc(`property/${id}`);
    this.clientDoc.update(property);
  }

  getGeoListing(center: GeoFirePoint, radius: number, field = 'geopoint'): Observable<any> {


    const clients = this.geo.collection('property', ref => ref.where('status', '==', 1));
    return clients.within(center, radius, field);
  }

}
