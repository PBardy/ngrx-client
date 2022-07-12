import { Component, Input, OnInit } from '@angular/core';
import { IUserType } from '@interfaces/models/user-type.interface';

@Component({
  selector: 'app-landing-user-type-card',
  templateUrl: './landing-user-type-card.component.html',
  styleUrls: ['./landing-user-type-card.component.scss'],
})
export class LandingUserTypeCardComponent implements OnInit {
  @Input() public userType: IUserType;
  @Input() public isSelected: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
