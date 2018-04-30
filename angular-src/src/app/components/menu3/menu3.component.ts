import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

import { MenuService } from '../../menu.service';
import { RobotsService } from '../../robots.service';

@Component({
  selector: 'app-menu3',
  templateUrl: './menu3.component.html',
  styleUrls: ['./menu3.component.css']
})
export class Menu3Component implements OnInit {

  private menuStuff = [];
  private counter: number = 0;


  constructor(private mData: MenuService, private rb: RobotsService) {
    this.mData.currentMenuData.subscribe((menuData) => {
      if (menuData != null) {
        for (var i = 0; i < menuData.length; i++) {
          if (menuData && menuData[i].category === 3) {
            this.menuStuff.push(menuData[i]);
          }
          //console.log(JSON.stringify(this.menuStuff));
        }
      }
    });
    // this.data.updateMenu((d) => { console.log(JSON.stringify(d)); });
  }

  ngOnInit() {
    this.mData.updateMenu((d) => {
      // console.log(JSON.stringify(d));
      this.nextItem();
      $("#leftarrow").click(this.prevItem2.bind(this));
      $("#rightarrow").click(this.nextItem.bind(this));
    });
  }

  nextItem() {
    // this.data.requestMenu(console.log);
    this.counter = (this.counter + 1) % this.menuStuff.length;
    this.displayItemToHTML(this.menuStuff[this.counter]);
  }

  prevItem2() {
    this.counter = (this.counter + this.menuStuff.length - 1) % this.menuStuff.length;
    this.displayItemToHTML(this.menuStuff[this.counter]);
  }

  displayItemToHTML(item) {
    $("#itemNo").text("ItemNo: " + item.itemNo);
    $("#itemName").text("Name: " + item.itemName);
    $('#displayImage').attr("src", item.image);
    $("#itemDescription").text("Description: " + item.itemDescription);
    $("#itemPrice").text("Price: " + item.itemPrice + " Baht");
    $("#isAvailable").text("Availablility" + (item.isAvailable === 1) ? "Have" : "No Have");
  }


}
