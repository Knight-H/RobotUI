import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private menuStuff = null;
  private counter:number = 0;

  constructor() {

  }

  ngOnInit() {
    this.menuStuff = [{
      itemNo: 1,
      itemName: 'Fried Rice',
      itemDescription: 'Gud Fud',
      itemPrice: 45,
      isAvailable: 1,
      image: 'http://i.huffpost.com/gen/1126498/images/o-LIFE-CHANGE-facebook.jpg'
    },
    {
      itemNo: 2,
      itemName: 'Fried Egg',
      itemDescription: 'Gud Egg',
      itemPrice: 20,
      isAvailable: 1,
      image: 'http://i.huffpost.com/gen/1126498/images/o-LIFE-CHANGE-facebook.jpg'
    },
    {
      itemNo: 3,
      itemName: 'Lamb Sauce',
      itemDescription: 'Gordon Ramsy does not approve :c',
      itemPrice: 450,
      isAvailable: 0,
      image: 'http://i.huffpost.com/gen/1126498/images/o-LIFE-CHANGE-facebook.jpg'
    }];
    this.counter = 0;
    $("#leftarrow").click(this.nextItem.bind(this));
    $("#rightarrow").click(this.nextItem.bind(this));
    this.nextItem();
    console.log("lol");
  }

  nextItem(this) {
    this.counter = (this.counter + 1) % this.menuStuff.length;
    let item = this.menuStuff[this.counter];
    console.log("hi");
    $("#itemNo").text(item.itemNo);
    $("#itemName").text(item.itemName);
    //$('#itemImage').attr("src", "data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=="); // ?????
    $("#itemDescription").text(item.itemDescription);
    $("#itemPrice").text(item.itemPrice + " Baht");
    $("#isAvailable").text((item.isAvailable === 1) ? "Have" : "No Have" )
  }
}
