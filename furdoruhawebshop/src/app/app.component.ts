import {Component, Inject, OnInit} from '@angular/core';
import {NavigationEnd, Router, RouterLink, RouterOutlet} from '@angular/router';
import {MenuComponent} from "./shared/menu/menu.component";
import {filter} from "rxjs";
import {MatToolbar} from "@angular/material/toolbar";
import {MatSidenav, MatSidenavContainer, MatSidenavContent} from "@angular/material/sidenav";
import {MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {ReactiveFormsModule} from "@angular/forms";
import {FlexLayoutModule, FlexModule} from "@angular/flex-layout";
import {FlexLayoutServerModule} from "@angular/flex-layout/server";
import {AuthService} from "./shared/services/auth.service";
import {routes} from "./app.routes";
import {NgForOf, NgIf, DOCUMENT } from "@angular/common";
import {user} from "@angular/fire/auth";
import {User} from "./shared/models/user";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FlexLayoutServerModule,
    RouterOutlet,
    MenuComponent,
    MatToolbar,
    MatSidenav,
    MatSidenavContent,
    MatSidenavContainer,
    MatIconButton,
    MatIcon,
    ReactiveFormsModule,
    RouterLink,
    FlexModule,
    FlexLayoutModule,
    NgIf,
    NgForOf
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'furdoruhawebshop';
  loggedInUser?: firebase.default.User | null;
  username: any[] = [];
  localStorage;

  constructor(private router: Router, private authService: AuthService, @Inject(DOCUMENT) private document: Document){
     this.localStorage = document.defaultView?.localStorage;
  }


  ngOnInit() {
    this.authService.isUserLoggedIn().subscribe(user =>{
      this.loggedInUser = user;
      if ( typeof this.loggedInUser?.uid != "undefined")
      this.authService.getUsername(this.loggedInUser?.uid as string).subscribe(user =>{
        this.username = user;
      })
      if (this.localStorage){
        this.localStorage.setItem("user",JSON.stringify(this.loggedInUser))
      }
      }
      )

  }

  onToggleSidenav(sidenav: MatSidenav) {
    sidenav.toggle()
  }

  onClose(event: any, sidenav: MatSidenav) {
    if (event){
      sidenav.close();
    }
  }

  logout(_?: boolean) {
    this.authService.logout();
    this.router.navigateByUrl("/login")
  }
}
