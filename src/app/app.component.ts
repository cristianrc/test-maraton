import {Component, OnInit} from '@angular/core';
import {UsersService} from "./shared/users.service";
import {User} from "./shared/users.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mataron';
  users: User[];

  constructor(private userService: UsersService) {
    this.users = [];
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(
      (data: any) => {
        this.users = data;
        console.log('USERS', this.users);
      }
    );
  }

}
