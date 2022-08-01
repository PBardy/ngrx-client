import { Component, Input, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  @Input() public drawer: MatDrawer;

  public constructor() {}

  public ngOnInit(): void {}

  public goToMyProfile(): void {}

  public goToMySettings(): void {}

  public goToChangeMyPreferences(): void {}

  public signOut(): void {}
}
