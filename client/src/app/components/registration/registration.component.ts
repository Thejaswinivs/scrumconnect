import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service';

import { Router } from '@angular/router';

import { GeneralModel } from '../../models/general-model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  private countries: string[];

  constructor(private _userService: UserService, private router: Router) { }

  private user: GeneralModel.User = new GeneralModel.User();

  ngOnInit() {

    this.loadCountryDetails();

  }

  loadCountryDetails() {
    this._userService.getCountryDetails().subscribe((countries)=> {
      this.countries = countries;
    })
  }

  register() {
    this._userService.adduser(this.user).subscribe((res: GeneralModel.Acknowledge)=> {

      this._userService.setMessage = res.msg;
      console.log(res);

      this.router.navigate(['/acknowledge']);
    })
  }



}
