import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

import { MenuService } from '../../menu.service';
import { RobotsService } from '../../robots.service';
@Component({
  selector: 'app-menu4',
  templateUrl: './menu4.component.html',
  styleUrls: ['./menu4.component.css']
})
export class Menu4Component implements OnInit {

  private menuStuff = [];
  private counter: number = 0;


  constructor(private data: MenuService, private rb: RobotsService) {
    this.data.currentMenuData.subscribe((menuData) => {
      if (menuData != null) {
        for (var i = 0; i < menuData.length; i++) {
          if (menuData && menuData[i].category === 4) {
            this.menuStuff.push(menuData[i]);
          }
          //console.log(JSON.stringify(this.menuStuff));
        }
      }
    });
    this.data.simMenu();
  }

  ngOnInit() {
    
    // $("#leftarrow").click(this.nextItem.bind(this));
    // $("#rightarrow").click(this.nextItem.bind(this));
    this.data.updateMenu((d)=>{
      this.counter = 0;
      $("#leftarrow").click(this.nextItem.bind(this));
      $("#rightarrow").click(this.nextItem.bind(this));
      this.nextItem();
      console.log("lol");
      console.log(d);
    });
    console.log("lol2");
    this.rb.setRobotBusy();
  }

  nextItem() {
    // this.data.requestMenu(console.log);
    if (!this.menuStuff){return;}
    this.counter = (this.counter + 1) % this.menuStuff.length;
    let item = this.menuStuff[this.counter];
    console.log("hi");
    $("#itemNo").text(item.itemNo);
    $("#itemName").text(item.itemName);
    // console.log(item.image);
    $('#displayImage').attr("src", item.image); // ?????
    $("#itemDescription").text(item.itemDescription);
    $("#itemPrice").text(item.itemPrice + " Baht");
    $("#isAvailable").text((item.isAvailable === 1) ? "Have" : "No Have");
  }
}
