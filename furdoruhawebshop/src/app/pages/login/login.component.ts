import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";
import {AuthService} from "../../shared/services/auth.service";
import {Router} from "@angular/router";
import {error} from "@angular/compiler-cli/src/transformers/util";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  email = new FormControl(null);
  password = new FormControl(null);

  constructor(private authService: AuthService, private router: Router) {
  }
  login() {
    this.authService.login(this.email.value,this.password.value).then(cred => {
      cred.user?.uid
      this.router.navigateByUrl("/main")
    }).catch(error => {
      alert("Nem megfelelő email vagy jelszó!")
    })
  }
}
