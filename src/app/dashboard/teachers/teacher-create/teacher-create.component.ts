import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TeacherService } from 'src/app/services/teacher.service';
import { Router } from '@angular/router';
import { Teacher } from 'src/app/models/Teacher';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-teacher-create',
  templateUrl: './teacher-create.component.html',
  styleUrls: ['./teacher-create.component.scss']
})
export class TeacherCreateComponent implements OnInit {

  teacherForm: FormGroup;
  fileIsUploading = false;
  fileUrl: string;
  fileUploaded = false;

  constructor(private formBuilder: FormBuilder, private teachersService: TeacherService,
    private router: Router, private uploadService: FileUploadService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.teacherForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      age: ''
    });
  }

  onSaveTeacher() {
    const firstname = this.teacherForm.get('firstname').value;
    const lastname = this.teacherForm.get('lastname').value;
    const age = this.teacherForm.get('age').value;
    const newTeacher = new Teacher(6, firstname, lastname);
    newTeacher.age = age;
    if (this.fileUrl && this.fileUrl !== '') {
      newTeacher.photo = this.fileUrl;
    }
    this.teachersService.createNewTeacher(newTeacher);
    this.router.navigate(['/teachers']);
  }

  onUploadFile(file: File) {
    this.fileIsUploading = true;
    this.teachersService.uploadFile(file).then(
      (url: string) => {
        this.fileUrl = url;
        this.fileIsUploading = false;
        this.fileUploaded = true;
      }
    );
  }

  detectFiles(event) {
    this.onUploadFile(event.target.files[0]);
  }
/*
-----------------------------
*/

  selectedFiles: FileList;
   currentFileUpload: File;

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }
  upload() {
    this.currentFileUpload = this.selectedFiles.item(0);
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
     if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    });
    this.selectedFiles = undefined;
  }
}
