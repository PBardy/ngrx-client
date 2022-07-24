import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent implements OnInit {
  constructor(private readonly router: Router) {}

  ngOnInit(): void {}

  public createShoppingList(): void {
    this.router.navigate(['/user/customer/shopping-lists/create']);
  }

  public createUserLocation(): void {}
}
