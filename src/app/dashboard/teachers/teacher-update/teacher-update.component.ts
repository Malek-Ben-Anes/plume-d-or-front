import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TeacherService } from 'src/app/services/teacher.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Teacher } from 'src/app/models/Teacher';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { ImageService } from 'src/app/services/image.service';
import { Gender } from 'src/app/models/User';


@Component({
  selector: 'app-teacher-update',
  templateUrl: './teacher-update.component.html',
  styleUrls: ['./teacher-update.component.scss']
})
export class TeacherUpdateComponent implements OnInit {

  teacher: Teacher;
  teacherForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private teachersService: TeacherService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.teacher = new Teacher();

    let id = this.route.snapshot.params['id'];

    this.teachersService.getSingleTeacher(id).then(
      (teacher: Teacher) => {
        console.log(teacher);
        this.teacher = teacher;
        this.updateForm(this.teacher);
      }
    ).catch(err => console.log(err));
    this.initForm();
  }

  initForm() {
    this.teacherForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]],
      birthDate: [new Date, Validators.required],
      gender: [Gender, Validators.required],
      salary: [Number, Validators.required],
      echelon: ['', Validators.required],
    });
  }

  updateForm(teacher: Teacher): void {
    this.teacherForm.patchValue({
      firstname: teacher.firstname,
      lastname: teacher.lastname,
      email: teacher.email,
      birthDate: teacher.birthDate,
      gender: teacher.gender,
      salary: teacher.salary,
      echelon: teacher.echelon
    });
  }

  /*
  ngOnInit(): void {
    this.productForm = this.fb.group({
        productName: ['', [Validators.required,
                           Validators.minLength(3),
                           Validators.maxLength(50)]],
        productCode: ['', Validators.required],
        starRating: ['', NumberValidators.range(1, 5)],
        description: ''
    });
}*/

  onUpdateTeacher() {
    this.teacher.firstname = this.teacherForm.get('firstname').value;
    this.teacher.lastname = this.teacherForm.get('lastname').value;
    this.teacher.email = this.teacherForm.get('email').value;
    this.teacher.birthDate = new Date(this.teacherForm.get('birthDate').value);
    this.teacher.gender = <Gender>Gender['MALE'];
    this.teacher.salary = this.teacherForm.get('salary').value;
    this.teacher.echelon = this.teacherForm.get('echelon').value;
    this.teachersService.updateTeacher(this.teacher);
  }


}