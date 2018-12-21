import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


import { Teacher } from 'src/app/models/Teacher';
import { TeacherService } from 'src/app/services/teacher.service';


@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit, OnDestroy {

  teachers: Teacher[] = [];
  teachersSubscription: Subscription;

  constructor(private teachersService: TeacherService, private router: Router) {}

  ngOnInit() {
    this.teachersSubscription = this.teachersService.teacherSubject.subscribe(
      (teachers) => {
        this.teachers = teachers;
      }
    );
    this.teachersService.emitTeachers();
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
