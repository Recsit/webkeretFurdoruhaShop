import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatListItem, MatNavList} from "@angular/material/list";
import {MatIcon} from "@angular/material/icon";
import {RouterLink} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    FormsModule,
    MatNavList,
    MatIcon,
    MatListItem,
    RouterLink,
    NgIf
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  @Input() loggedInUser?: firebase.default.User | null;
  @Output() onCloseSidenav: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() onLogout: EventEmitter<boolean> = new EventEmitter();

  close(logout?: boolean){
    this.onCloseSidenav.emit(true);
    if (logout === true){
      this.onLogout.emit(true);
    }
  }
}
