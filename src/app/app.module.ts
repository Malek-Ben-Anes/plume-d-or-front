import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,    
    FourOhFourComponent, HomeComponent, HeaderComponent, FooterComponent, TeachersComponent, TeacherDetailComponent, TeacherCreateComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    //HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
