import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ConfirmationComponent } from '../utils/dialog/confirmation/confirmation.component';
import { DeleteComponent } from '../utils/dialog/delete/delete.component';
import { ErrorComponent } from '../utils/dialog/error/error.component';
import { InfoComponent } from '../utils/dialog/info/info.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  /**
   * confirmation dialog configuration
   */
  openConfirmationDialog(msg) {
    const config = new MatDialogConfig();
    config.width = '350px';
    config.disableClose = true;
    config.panelClass = 'confirm-dialog-container';
    config.data = {
      message: msg
    };
    config.position = { top: '100px' };
    return this.dialog.open(ConfirmationComponent, config);
  }

  /**
   * delete dialog configuration
   */
  openDeleteDialog(msg) {
    const config = new MatDialogConfig();
    config.width = '350px';
    config.disableClose = true;
    config.panelClass = 'confirm-dialog-container';
    config.data = {
      message: msg
    };
    config.position = { top: '100px' };
    return this.dialog.open(DeleteComponent, config);
  }

  /**
   * error dialog configuration
   */
  openErrorDialog(msg) {
    const config = new MatDialogConfig();
    config.width = '350px';
    config.disableClose = true;
    config.panelClass = 'confirm-dialog-container';
    config.data = {
      message: msg
    };
    config.position = { top: '100px' };
    return this.dialog.open(ErrorComponent, config);
  }

  /**
   * information dialog configuration
   */
  openInfoDialog(msg) {
    const config = new MatDialogConfig();
    config.width = '350px';
    config.disableClose = true;
    config.panelClass = 'confirm-dialog-container';
    config.data = {
      message: msg
    };
    config.position = { top: '100px' };
    return this.dialog.open(InfoComponent, config);
  }
}
