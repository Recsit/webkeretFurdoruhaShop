import {Component, OnDestroy, OnInit} from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Swimsuit} from "../../shared/models/swimsuit";
import {ShopService} from "../../shared/services/shop.service";
import {CurrencyPipe} from "../../pipes/currency.pipe";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent implements OnInit{
  swimsuits: any[] = [];

  constructor(private shopService: ShopService, public currencyPipe: CurrencyPipe) {}

  ngOnInit() {
    this.shopService.loadSwimsuits().subscribe(swimsut =>{
      this.swimsuits = swimsut;
    });
  }
}
