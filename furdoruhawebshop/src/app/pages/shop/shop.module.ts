import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { ShopComponent } from './shop.component';
import {MatCard, MatCardActions, MatCardContent, MatCardImage, MatCardTitle} from "@angular/material/card";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatAnchor} from "@angular/material/button";
import {CurrencyPipe} from "../../pipes/currency.pipe";
import {FlexLayoutServerModule} from "@angular/flex-layout/server";


@NgModule({
  declarations: [
    ShopComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    MatCard,
    MatCardTitle,
    MatCardContent,
    FlexLayoutModule,
    FlexLayoutServerModule,
    MatCardImage,
    MatCardActions,
    MatAnchor,
    CurrencyPipe
  ],
  providers: [ CurrencyPipe ]
})
export class ShopModule { }
