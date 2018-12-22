import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


import { Teacher } from 'src/app/models/Teacher';
import { TeacherService } from 'src/app/services/teacher.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit, OnDestroy {

  teachers: Teacher[] = [];
  teachersSubscription: Subscription;

  constructor(private teachersService: TeacherService, private router: Router, private http: HttpClient) {}

  ngOnInit() {


    this.http.get<Teacher[]>('http://localhost:8090/teachers').subscribe(
      data => { console.log(data);
      this.teachers = data; },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log("Server-side error occured.");
        }
      }
    );

    /*
    this.teachers = this.teachersService.getTeachers();
    console.log(this.teachers);
    console.log(this.teachersService.getTeachers());
    
    this.teachersSubscription = this.teachersService.teacherSubject.subscribe(
      (teachers) => {
        this.teachers = teachers;
      }
    );
    this.teachersService.emitTeachers();*/
  }

  onViewTeacher(id: number) {
    this.router.navigate(['teachers', 'view', id]);
  }

  onNewTeacher() {
    this.router.navigate(['teachers', 'new']);
  }

  onUpdateTeacher(id: number) {
    this.router.navigate(['teachers', 'update', id]);
  }

  onDeleteTeacher(teacher: Teacher) {
    this.teachersService.removeTeacher(teacher);
  }

  ngOnDestroy() {
    this.teachersSubscription.unsubscribe();
  }
}
