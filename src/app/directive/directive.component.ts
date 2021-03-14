import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css'],
  styles: [`
      .online {
        color:white;
      }
  `]
})
export class DirectiveComponent implements OnInit {

  emailAddress: string = '';
  isuserProfileCreated: boolean = false;
  userProfieCreatedAlert: string = '';
  userProfileStatus: string = 'offline';
  dynamicStyle: string = '';
  userList:string[] = [];
  constructor() {
    this.userProfileStatus = Math.random() > 0.5 ? 'online' : 'offline';
    this.dynamicStyle = this.userProfileStatus == 'online' ? 'alert alert-success' : 'alert alert-danger';
  }

  ngOnInit(): void {
  }

  createUserProfile = () => {
    this.isuserProfileCreated = true;
    console.log('data')
    this.userList.push(this.emailAddress);
    this.userProfieCreatedAlert = 'New profile is created:'+ this.emailAddress;
  }

  getGynamicStyle = () => {
    return this.userProfileStatus == 'online' ? 'green' : 'red';
  }
}
