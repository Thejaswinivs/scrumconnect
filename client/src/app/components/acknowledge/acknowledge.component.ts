import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-acknowledge',
  templateUrl: './acknowledge.component.html',
  styleUrls: ['./acknowledge.component.scss']
})
export class AcknowledgeComponent implements OnInit {


  private message: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.message = this.userService.getMessage;
  }

}
