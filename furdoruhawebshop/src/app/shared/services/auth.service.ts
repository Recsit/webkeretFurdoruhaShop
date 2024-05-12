import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Swimsuit} from "../models/swimsuit";
import {User} from "../models/user";
import {where} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private auth: AngularFireAuth, private afs: AngularFirestore) { }

  login(email: string | null, password: string | null){
    return this.auth.signInWithEmailAndPassword(<string>email,<string>password)
  }

  register(email: string | null | undefined, password: string | null | undefined){
    return this.auth.createUserWithEmailAndPassword(<string>email,<string>password)
  }

  isUserLoggedIn(){
    return this.auth.user;
  }

  getUsername(uid: string){
    return this.afs.collection<User>("user",ref => ref.where('id','==',uid).limit(1)).valueChanges()
  }

  logout(){
    this.auth.signOut();
  }
}
