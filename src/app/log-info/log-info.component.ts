import { Component, OnInit } from '@angular/core';
import { ShareService } from "../share.service";
@Component({
  selector: 'app-log-info',
  templateUrl: './log-info.component.html',
  styleUrls: ['./log-info.component.scss']
})
export class LogInfoComponent implements OnInit {

  constructor(public afAuth: ShareService) { }

  ngOnInit(): void {
  }
  logOut(){
    this.afAuth.signOut();
  }

}
