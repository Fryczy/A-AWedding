import { Component, OnInit } from '@angular/core';
import {GiftService} from '../gift.service';
import {Item} from '../model/item';

@Component({
  selector: 'app-gifts',
  templateUrl: './gifts.component.html',
  styleUrls: ['./gifts.component.css']
})
export class GiftsComponent implements OnInit {

  gifts : [Item];
  constructor(private giftService : GiftService) { }

  ngOnInit() {
      this.giftService.GetGifts().subscribe(data=>{
        this.gifts = data;
      });
      console.log(this.gifts);
  }

}
