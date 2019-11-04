import {Component, OnInit, Renderer2} from '@angular/core';
import {UserService} from '../service/user.service';

@Component({
  templateUrl: 'user-list.component.html'
})
export class UserListComponent implements OnInit {
  userList;

  constructor(private readonly userService: UserService) {
  }

  ngOnInit(): void {
    // TODO test code
    this.userList = this.userService.list();
  }
}
