import { Component, OnInit } from '@angular/core';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-facebook-button',
  templateUrl: './facebook-button.component.html',
  styleUrls: ['./facebook-button.component.scss'],
})
export class FacebookButtonComponent implements OnInit {
  public readonly faFacebookF = faFacebookF;

  constructor() {}

  ngOnInit(): void {}
}
