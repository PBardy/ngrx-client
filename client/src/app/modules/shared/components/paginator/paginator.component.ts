import { Component } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
})
export class PaginatorComponent extends MatPaginator {
  public get pages(): Array<number> {
    return new Array(this.getNumberOfPages());
  }
}
