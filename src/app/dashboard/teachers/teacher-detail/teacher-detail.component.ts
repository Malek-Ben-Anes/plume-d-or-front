import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/models/Teacher';
import { ActivatedRoute, Router } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher.service';
import { Gender } from 'src/app/models/User';

@Component({
  selector: 'app-teacher-detail',
  templateUrl: './teacher-detail.component.html',
  styleUrls: ['./teacher-detail.component.scss']
})
export class TeacherDetailComponent implements OnInit {

  teacher: Teacher = new Teacher();

  constructor(private route: ActivatedRoute, private teachersService: TeacherService,
              private router: Router) {}

  ngOnInit() {
    this.teacher.id = this.route.snapshot.params['id'];
    this.teachersService.getSingleTeacher(+this.teacher.id).then(
      (teacher: Teacher) => {
        console.log(teacher);
        this.teacher = teacher;
      }
    );
  }

  onBack() {
    this.router.navigate(['/teachers']);
  }
}
