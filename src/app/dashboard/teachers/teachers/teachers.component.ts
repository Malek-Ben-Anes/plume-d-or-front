import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


import { Teacher } from 'src/app/models/Teacher';
import { TeacherService } from 'src/app/services/teacher.service';


@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.scss']
})
export class TeachersComponent implements OnInit {

  teachers: Teacher[] = [];
  teachersSubscription: Subscription;

  constructor(private teachersService: TeacherService, private router: Router) {}

  ngOnInit() {
    this.teachersSubscription = this.teachersService.teacherSubject.asObservable().subscribe(
      (teachers) => {
        console.log("emettre");
        
        this.teachers = teachers;
        console.log(teachers);
        this.teachersService.emitTeachers(); 
      }
    );
     
  }

  onNewTeacher() {
    console.log(this.teachersService.emitTeachers());
    //this.router.navigate(['teachers', 'new']);
  }

  onDeleteTeacher(teacher: Teacher) {
    this.teachersService.removeTeacher(teacher);
  }

  onViewTeacher(id: number) {
    this.router.navigate(['teachers', 'view', id]);
  }
  
  ngOnDestroy() {
    this.teachersSubscription.unsubscribe();
  }
}
