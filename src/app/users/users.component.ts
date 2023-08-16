import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  employee :any;
    constructor(public usersData : UsersService) {
          this.usersData.getData().get('https://jsonplaceholder.typicode.com/users').subscribe((dta) => {
                this.employee = dta;
                console.log(this.employee)
          })
    }
}
