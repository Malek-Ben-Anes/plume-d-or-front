import { Component, OnInit, Input } from '@angular/core';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { User } from 'src/app/models/User';

const URL = 'http://localhost:8090/profile/uploadpicture/';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  @Input() user:User;

  fileIsUploading = false;
  fileUrl: string;
  fileUploaded = false;

  public uploader: FileUploader;

  constructor() {}

  ngOnInit() {
    let url = URL + (this.user.id !== undefined ? this.user.id : "");
    this.uploader = new FileUploader({url: URL, itemAlias: 'file'});
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    /*this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
       console.log('ImageUpload:uploaded:', item, status, response);
       alert('File uploaded successfully');
    }*/
    this.uploader.onSuccessItem = () => alert('File uploaded successfully');
    this.uploader.onErrorItem = () => alert('Failure to upload File');
  }

  uploadPhoto(imageInput: any) {
               /*if (this.fileUrl && this.fileUrl !== '') {
      newTeacher.photo = this.fileUrl;
    }*/
    this.uploader.uploadAll();
  }
}
