import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent } from './auth/auth.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { HomeComponent } from './dashboard/home/home.component';

import { TeachersComponent } from './dashboard/teachers/teachers/teachers.component';
import { TeacherDetailComponent } from './dashboard/teachers/teacher-detail/teacher-detail.component';
import { TeacherCreateComponent } from './dashboard/teachers/teacher-create/teacher-create.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'teachers', component: TeachersComponent },
  { path: 'teachers/view/:id', component: TeacherDetailComponent },
  { path: 'teachers/new', component: TeacherCreateComponent },
  { path: '**', component: FourOhFourComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
