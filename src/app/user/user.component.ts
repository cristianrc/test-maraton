import {Component, Input, OnInit} from '@angular/core';
import {User} from "../shared/users.model";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() index: number | undefined;
  @Input() user: User | undefined;
  i: number | undefined;

  constructor() {
  }

  ngOnInit(): void {
    if (this.index) {
      this.i = this.index + 1;
    }
    console.log('user', this.user);
  }

}
