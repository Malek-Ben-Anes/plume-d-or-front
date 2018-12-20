import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TeacherService } from 'src/app/services/teacher.service';
import { Router } from '@angular/router';
import { Teacher } from 'src/app/models/Teacher';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { HttpResponse } from '@angular/common/http';
import { ImageService } from 'src/app/services/image.service';


import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { Gender } from 'src/app/models/User';

const URL = 'http://localhost:8090/profile/uploadpicture';

class ImageSnippet {
  pending: boolean = false;
  status: string = 'init';

  constructor(public src: string, public file: File) {}
}


@Component({
  selector: 'app-teacher-create',
  templateUrl: './teacher-create.component.html',
  styleUrls: ['./teacher-create.component.scss']
})
export class TeacherCreateComponent implements OnInit {

  newTeacher: Teacher;
  teacherForm: FormGroup;
  fileIsUploading = false;
  fileUrl: string;
  fileUploaded = false;

  public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'file'});

  constructor(private formBuilder: FormBuilder, private teachersService: TeacherService,
    private router: Router, private uploadService: FileUploadService, private imageService: ImageService) { }

  ngOnInit() {
    this.newTeacher = new Teacher();
    this.initForm();

    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
       console.log('ImageUpload:uploaded:', item, status, response);
       alert('File uploaded successfully');
    }
  }

  initForm() {
    this.teacherForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]],
      birthDate: [Date, Validators.required],
      gender: [Gender, Validators.required],
      salary: [Number, Validators.required],
      echelon: ['', Validators.required],
    });
  }

  onSaveTeacher() {
    console.log(this.teacherForm);
    
    this.newTeacher.firstname = this.teacherForm.get('firstname').value;
    this.newTeacher.lastname = this.teacherForm.get('lastname').value;
    this.newTeacher.email = this.teacherForm.get('email').value;
    this.newTeacher.birthDate = new Date(this.teacherForm.get('birthDate').value);
    this.newTeacher.gender = <Gender>Gender['MALE'];
    this.newTeacher.salary = this.teacherForm.get('salary').value;
    this.newTeacher.echelon = this.teacherForm.get('echelon').value;

    this.teachersService.createNewTeacher(this.newTeacher);
    this.router.navigate(['/teachers']);

    /*if (this.fileUrl && this.fileUrl !== '') {
      newTeacher.photo = this.fileUrl;
    }*/

  }


}