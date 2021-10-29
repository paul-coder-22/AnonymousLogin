import { Injectable, NgZone } from '@angular/core';

import { User } from "../services/user";
import { auth } from 'firebase/app';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userData: any
  constructor(
    public afs: AngularFirestoreModule,
    public afAuth: AngularFireAuth,
    public router: Router,
    public ngZone: NgZone
  ) {
    /* Saving user data when logged in */
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user') || '{}');
      } else {
        localStorage.setItem('user', '');
        JSON.parse(localStorage.getItem('user') || '{}');
      }
    })
  }

  /* User Sign in */
  SignIn(email: string, passWord: string) {
    return this.afAuth.signInWithEmailAndPassword(email,passWord)
      .then((result: any) => {
        this.ngZone.run(() => {
          this.router.navigate(['dashboard']);
        })
        this.SetUserData(result.user);
      }).catch((err: any) => {
        alert(err.message)
      })
  }

  /* User Signup */
  SignUp(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result: any) => {
        this.SendVerificationMail();
        this.SetUserData(result.user);
      }).catch((error: any) => {
        alert(error.message);
      })
  }

  SendVerificationMail(){
    return this.afAuth.
  }

  SetUserData(val:any){

  }
}
