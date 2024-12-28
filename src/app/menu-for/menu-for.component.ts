import { Component, inject, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { MenuDialogComponent } from '../menu-dialog/menu-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-menu-for',
  templateUrl: './menu-for.component.html',
  styleUrl: './menu-for.component.css'
})
export class MenuForComponent implements OnInit {
  menuForm!: FormGroup;
  activePath !: string | null;
  contentHeader !: string;
  @ViewChild('dialogContent', { static: true }) dialogContent!: TemplateRef<any>;
  @ViewChild('dialogHeader', { static: true }) dialogHeader!: TemplateRef<any>;
  constructor(private fb: FormBuilder,  private route : ActivatedRoute, private dialog : MatDialog) {
    this.menuForm = this.fb.group({
      mainMenu: [''],
      category: [''],
      subCategory: [''],
      modules: [''],
      mainIndex: [''],
      shortcutKey: [''],
      mainIconPath: ['']
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.activePath = params.get('subpath'); 
      this.updateFormControls( this.activePath); 
    });
    if (this.menuForm) {
      this.menuForm.get('mainMenu')?.valueChanges.subscribe(value => {
        this.updateFormControls(value);
      });
    }
  }
  updateFormControls(subpath: string | null): void {
    if (subpath) {
      switch (subpath) {
        case 'sub-menu':
          this.menuForm.addControl('subMenu', this.fb.control(''));
          break;
        case 'parent-menu':
          this.menuForm.addControl('subMenu', this.fb.control(''));
          this.menuForm.addControl('parentMenu', this.fb.control(''));
          break;
        case 'menu':
          this.menuForm.addControl('subMenu', this.fb.control(''));
          this.menuForm.addControl('parentMenu', this.fb.control(''));
          this.menuForm.addControl('menuName', this.fb.control(''));
          break;
        default:
          break;
      }
    }
  }

// openDialog() {
//   console.log('clicked')
//   const dialogRef = this.dialog.open(MenuDialogComponent);
//   // this.dialog.open(MenuDialogComponent);
// }
openDialog(name: string) {
  this.contentHeader = name
  this.dialog.open(MenuDialogComponent, {
    disableClose: true,
    data: {
      contentTemplate: this.dialogContent,
      contentHeader: this.dialogHeader
    }
  });
}

}
