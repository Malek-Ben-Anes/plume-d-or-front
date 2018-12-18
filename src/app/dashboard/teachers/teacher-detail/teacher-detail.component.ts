import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/models/Teacher';
import { ActivatedRoute, Router } from '@angular/router';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-teacher-detail',
  templateUrl: './teacher-detail.component.html',
  styleUrls: ['./teacher-detail.component.scss']
})
export class TeacherDetailComponent implements OnInit {

  teacher: Teacher;

  constructor(private route: ActivatedRoute, private teachersService: TeacherService,
              private router: Router) {}

  ngOnInit() {
    this.teacher = new Teacher( 0, '', '');
    const id = this.route.snapshot.params['id'];
    this.teachersService.getSingleTeacher(+id).then(
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
