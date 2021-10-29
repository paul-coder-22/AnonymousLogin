import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareService } from "../share.service";
// import * as firebase from 'firebase/app';
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  constructor(public authService: ShareService, private router: Router) { }

  ngOnInit(): void {
  }
  signInAnonymously() {
    this.authService.anonymousLogin().then(() => this.router.navigate(['/']));
  }

  // linkGoogle() {
  //   const provider = new firebase.default.auth.GoogleAuthProvider()
  //   firebase.default.auth().currentUser?.linkWithPopup(provider);
  // }
}
