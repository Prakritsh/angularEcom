import { Component, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-menu-dialog',
  templateUrl: './menu-dialog.component.html',
  styleUrl: './menu-dialog.component.css'
})
export class MenuDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private dialog: MatDialog) {}
  openDialog() {
    
    this.dialog.open(MenuDialogComponent);
  }
}
