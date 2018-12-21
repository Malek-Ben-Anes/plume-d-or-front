import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';

import { AuthService } from './services/auth.service';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { HomeComponent } from './dashboard/home/home.component';
import { HeaderComponent } from './dashboard/header/header.component';
import { FooterComponent } from './dashboard/footer/footer.component';
import { TeachersComponent } from './dashboard/teachers/teachers/teachers.component';
import { TeacherDetailComponent } from './dashboard/teachers/teacher-detail/teacher-detail.component';
import { TeacherCreateComponent } from './dashboard/teachers/teacher-create/teacher-create.component';
import { FileUploadService } from './services/file-upload.service';
import { TeacherService } from './services/teacher.service';
import { ImageService } from './services/image.service';

import { FileSelectDirective } from 'ng2-file-upload';
import { PhotoComponent } from './dashboard/photo/photo.component';
import { TeacherUpdateComponent } from './dashboard/teachers/teacher-update/teacher-update.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,    
    FourOhFourComponent, HomeComponent, HeaderComponent, FooterComponent, TeachersComponent, TeacherDetailComponent, TeacherCreateComponent,    
    FileSelectDirective, PhotoComponent, TeacherUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService, FileUploadService, TeacherService, ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
