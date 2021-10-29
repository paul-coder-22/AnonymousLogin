import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable({
  providedIn: 'root'
})
export class ShareService {
  authState: any;

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth
  ) {
    this.afAuth.authState.subscribe((auth: any) => {
      this.authState = auth;
      console.log(this.authState);
    })
  }

  get isUserAnonymousLoggedIn(): boolean {
    return (this.authState !== null) ? this.authState.isAnonymous : false
  }

  get currentUserId(): string {
    return (this.authState !== null) ? this.authState.uid : '';
  }

  anonymousLogin() {
    return this.afAuth.signInAnonymously()
      .then((user) => {
        this.authState = user
      })
      .catch(error => console.log(error));
  }

  signOut() {
    this.afAuth.signOut();
    this.router.navigate(['/']);
  }

}
