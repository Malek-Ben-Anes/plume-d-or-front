import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth = false;

  constructor() { }

  signIn(email: string, password: string) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.isAuth = true;
        resolve(true);
      }, 1000)
    });
  }

  signOutUser() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.isAuth = false;
        resolve(true);
      }, 1000);
    });
  }

  signInUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        /*firebase.auth().signInWithEmailAndPassword(email, password).then(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          }
        );*/
      }
    );
}
}
