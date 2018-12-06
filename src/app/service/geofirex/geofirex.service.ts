import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as geofirex from 'geofirex';
import * as firebase from 'firebase/app';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GeoService {
  geo;

  constructor() {
    firebase.initializeApp(environment.firebase);
    this.geo = geofirex.init(firebase);
  }
}
