import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

import { MenuService } from '../../menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private menuStuff = [];
  private counter:number = 0;

  constructor(private data: MenuService) {
    this.data.currentMenuData.subscribe((menuData) => {
      this.menuStuff = menuData;
      // console.log(this.menuStuff);
    });
  }

  ngOnInit() {
    this.data.updateMenu((d)=>{
      this.counter = 0;
      $("#leftarrow").click(this.nextItem.bind(this));
      $("#rightarrow").click(this.nextItem.bind(this));
      this.nextItem();
      console.log("lol");
      console.log(d);
    });
    console.log("lol2");
  }

  nextItem() {
    console.log(this.menuStuff);
    // this.data.requestMenu(console.log);
    this.counter = (this.counter + 1) % this.menuStuff.length;
    let item = this.menuStuff[this.counter];
    console.log("hi");
    $("#itemNo").text(item.itemNo);
    $("#itemName").text(item.itemName);
    // console.log(item.image);
    $('#displayImage').attr("src", item.image); // ?????
    $("#itemDescription").text(item.itemDescription);
    $("#itemPrice").text(item.itemPrice + " Baht");
    $("#isAvailable").text((item.isAvailable === 1) ? "Have" : "No Have" );
  }
}
