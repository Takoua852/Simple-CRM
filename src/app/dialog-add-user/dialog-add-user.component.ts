import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user.class';
import { FormsModule } from '@angular/forms';
import { Firestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-dialog-add-user',
  standalone: true,
  imports: [CommonModule, 
    MatDialogModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatButtonModule, 
    MatIconModule, 
    MatDatepickerModule, FormsModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './dialog-add-user.component.html',
  styleUrl: './dialog-add-user.component.scss'
})
export class DialogAddUserComponent {
  user = new User();
  birthDay!: Date;

  firestore: Firestore = inject(Firestore);

  saveUser(){
    this.user.birthDay = this.birthDay.getTime();
    console.log('the current user:', this.user);
  }
}
