import { Component, inject } from '@angular/core';
import { MatIconButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from '../../models/user.class';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatIconModule, MatIconButton,MatTooltipModule,MatDialogModule, DialogAddUserComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {
  readonly dialog = inject(MatDialog);
 

  openDialog(){
    this.dialog.open(DialogAddUserComponent);
  }
}
