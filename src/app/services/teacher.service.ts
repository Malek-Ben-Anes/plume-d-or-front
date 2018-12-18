import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Teacher} from '../models/Teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  teachers: Teacher[] = [new Teacher(1, "John", "Doe"),
  new Teacher(2, "John", "Doe"),
  new Teacher(3, "John", "Doe"),
  new Teacher(4, "John", "Doe")];
  //[];
  teacherSubject = new Subject<Teacher[]>();

  constructor() { 
    this.getTeachers() ;
  }

  emitTeachers() {
    this.teacherSubject.next(this.teachers);
  }

  saveTeacher(teacher: Teacher ) {
    this.teachers.push(teacher);
    //request to database to save all teachers
  }

  getTeachers() {
          //this.teachers = data.val() ? data.val() : [];
          this.teachers = [new Teacher(1, "John", "Doe"),
                            new Teacher(2, "John", "Doe"),
                            new Teacher(3, "John", "Doe"),
                            new Teacher(4, "John", "Doe")];
          this.emitTeachers();
  }

  getSingleTeacher(id: number) {
      
    return new Promise( (resolve, reject) => {
    //   this.teachers.find((teacherElement) => {
    //     if(teacherElement.id == id){
    //       return teacherElement;
    //     }
    // })
    resolve(new Teacher(id, "teacher", "teacher"));
    })
      
      
  }

  createNewTeacher(newTeacher: Teacher) {
    this.teachers.push(newTeacher);
    this.saveTeacher(newTeacher);
    this.emitTeachers();
  }

  removeTeacher(teacher: Teacher) {
    const teacherIndexToRemove = this.teachers.findIndex(
      (teacherElement) => {
        if(teacherElement === teacher) {
          return true;
        }
      }
    );
    this.teachers.splice(teacherIndexToRemove, 1);
    //this.saveTeacher(newTeacher);
    this.emitTeachers();
  }

  uploadFile(file: File) {
    return new Promise(
      (resolve, reject) => {
        const almostUniqueFileName = Date.now().toString();
        /*const upload = firebase.storage().ref()
          .child('images/' + almostUniqueFileName + file.name).put(file);
        upload.on(firebase.storage.TaskEvent.STATE_CHANGED,
          () => {
            console.log('Chargement…');
          },
          (error) => {
            console.log('Erreur de chargement ! : ' + error);
            reject();
          },
          () => {
            resolve(upload.snapshot.downloadURL);
          }
        );*/
      }
    );
}

/*

removeBook(book: Book) {
    if(book.photo) {
      const storageRef = firebase.storage().refFromURL(book.photo);
      storageRef.delete().then(
        () => {
          console.log('Photo removed!');
        },
        (error) => {
          console.log('Could not remove photo! : ' + error);
        }
      );
    }
    const bookIndexToRemove = this.books.findIndex(
      (bookEl) => {
        if(bookEl === book) {
          return true;
        }
      }
    );
    this.books.splice(bookIndexToRemove, 1);
    this.saveBooks();
    this.emitBooks();
}
*/

  
}
