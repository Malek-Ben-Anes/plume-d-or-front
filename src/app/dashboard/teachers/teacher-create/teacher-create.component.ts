import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TeacherService } from 'src/app/services/teacher.service';
import { Router } from '@angular/router';
import { Teacher } from 'src/app/models/Teacher';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { ImageService } from 'src/app/services/image.service';
import { Gender } from 'src/app/models/User';


@Component({
  selector: 'app-teacher-create',
  templateUrl: './teacher-create.component.html',
  styleUrls: ['./teacher-create.component.scss']
})
export class TeacherCreateComponent implements OnInit {

  newTeacher: Teacher;
  teacherForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private teachersService: TeacherService,
    private router: Router, private uploadService: FileUploadService, private imageService: ImageService) { }

  ngOnInit() {
    this.newTeacher = new Teacher();
    this.initForm();
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
    this.newTeacher.firstname = this.teacherForm.get('firstname').value;
    this.newTeacher.lastname = this.teacherForm.get('lastname').value;
    this.newTeacher.email = this.teacherForm.get('email').value;
    this.newTeacher.birthDate = new Date(this.teacherForm.get('birthDate').value);
    this.newTeacher.gender = <Gender>Gender['MALE'];
    this.newTeacher.salary = this.teacherForm.get('salary').value;
    this.newTeacher.echelon = this.teacherForm.get('echelon').value;
    this.teachersService.createNewTeacher(this.newTeacher);
    this.router.navigate(['/teachers']);
  }


}