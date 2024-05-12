import {Injectable, OnInit} from '@angular/core';
import {Swimsuit} from "../models/swimsuit";
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Console} from "inspector";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShopService{

  collectionName = "swimsuits"

  constructor(private afs:AngularFirestore) { }


  loadSwimsuits() {
    return this.afs.collection<Swimsuit>(this.collectionName).valueChanges();
  }
}
