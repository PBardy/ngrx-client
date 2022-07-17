import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-display-mode',
  templateUrl: './display-mode.component.html',
  styleUrls: ['./display-mode.component.scss'],
})
export class DisplayModeComponent {
  @Output() public change = new EventEmitter<string>();
}
