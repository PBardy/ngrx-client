import { HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';

export abstract class ApiEffects {
  public constructor(protected readonly snackbar: MatSnackBar) {}

  protected async showError({ error }: HttpErrorResponse) {
    this.snackbar.open(error?.message ?? 'An unknow error occurred', 'Close');
  }
}
