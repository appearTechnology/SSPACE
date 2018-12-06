import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { PropertyListingsService } from "../../../service/property-listings.service"

@Component({
  selector: 'app-add-images',
  templateUrl: './add-images.component.html',
  styleUrls: ['./add-images.component.scss']
})
export class AddImagesComponent implements OnInit {

  @Input() stage: number;
  @Input() docId: string;
  @Output() newDoc: EventEmitter<Number> = new EventEmitter();
  uploadPercent: Observable<number>;
  downloadURL: Observable<string>;
  url: string;
  loader: boolean;
  loading: boolean;
  imageUploaded: boolean;
  profilePicAdded: boolean;
  images = [];



  constructor(
    private storage: AngularFireStorage,
    private propertyListingService: PropertyListingsService,
  ) {

  }

  ngOnInit() {
    this.loader = false;
    this.loading = false;
    this.profilePicAdded = false;
  }

  uploadProfileFile(event) {
    const file = event.target.files[0];
    this.loading = true;

    const id = Math.floor((Math.random() * 45678906345345343345345) + 1);
    const filePath = `property/${this.docId}/${id}`;
    const task = this.storage.upload(filePath, file).then(() => {
      const ref = this.storage.ref(filePath);
      const downloadURL = ref.getDownloadURL().subscribe(url => {
        const Url = url; // for ts
        this.url = url // with this you can use it in the html
        this.imageUploaded = true
        this.updateProfilePic(this.url)
        this.images.push(this.url)
        this.loading = false;
        this.profilePicAdded = true;
        console.log(this.images);
      })
    })
  }

  uploadFile(event) {
    const file = event.target.files[0];
    this.loading = true;
    const id = Math.floor((Math.random() * 45678906345345343345345) + 1);
    const filePath = `property/${this.docId}/${id}`;
    const task = this.storage.upload(filePath, file).then(() => {
      const ref = this.storage.ref(filePath);
      const downloadURL = ref.getDownloadURL().subscribe(url => {
        const Url = url; // for ts
        this.url = url // with this you can use it in the html
        this.imageUploaded = true
        this.images.push(this.url)
        this.loading = false;
        this.profilePicAdded = true;
        console.log(this.images);
      })
    })
  }

  updateProfilePic(value) {
    value = {
      profilePic: this.url
    }
    this.propertyListingService.updateListing(value, this.docId)
  }

  updateDB(value) {
    this.stage = 6
    value = {
      imageGallery: this.images,
      stage: 5,
    }
    this.propertyListingService.updateListing(value, this.docId)
    this.newDoc.emit(this.stage)
  }

}
