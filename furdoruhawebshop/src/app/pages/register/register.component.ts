import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {AuthService} from "../../shared/services/auth.service";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {User} from "../../shared/models/user";
import {UserService} from "../../shared/services/user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  constructor(private authService: AuthService, private router: Router, private userSerice: UserService) {
  }

  signUpForm = new FormGroup({
    email: new FormControl(null),
    password: new FormControl(null),
    rePassword: new FormControl(null),
    username: new FormControl(null)
  })

  register() {
    let alertBulider = "";
    let alerShow = false;
    if (this.signUpForm.get('email')?.value == null
      || this.signUpForm.get('password')?.value == null
      || this.signUpForm.get('rePassword')?.value == null
      || this.signUpForm.get('username')?.value == null){
      alertBulider += "Kérem töltse ki az összes mezőt!\n"
      alerShow = true;
    }
    if (this.signUpForm.get('password')?.value != this.signUpForm.get('rePassword')?.value){
      alertBulider += "A jelszavak nem egyeznek meg!"
      alerShow = true;
    }
    if (!alerShow){
      this.authService.register(this.signUpForm.get('email')?.value,this.signUpForm.get('password')?.value).then(cred => {
        const user : User = {
          id: cred.user?.uid as string,
          username: this.signUpForm.get('username')?.value as unknown as string,
        }
        this.userSerice.create(user)
        this.router.navigateByUrl("/main")
      }).catch(error =>{
        alert("Sikertelen regisztráció!\nHelytelen email vagy jelszó!")
      })
    }
    else {
      alert(alertBulider);
    }
  }
}
