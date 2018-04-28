import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

import { MenuService } from '../../menu.service';
import { RobotsService } from '../../robots.service';
@Component({
  selector: 'app-menu1-5',
  templateUrl: './menu1-5.component.html',
  styleUrls: ['./menu1-5.component.css']
})
export class Menu15Component implements OnInit {

  private menuStuff = [];
  private counter:number = 0;

  constructor(private data: MenuService, private rb: RobotsService) {
    this.data.currentMenuData.subscribe((menuData) => {
      this.menuStuff = menuData;
    });
  }

  ngOnInit() {
    this.data.simMenu();
    $("#leftarrow").click(this.nextItem.bind(this));
    $("#rightarrow").click(this.nextItem.bind(this));
      // this.data.updateMenu((d)=>{
      //   this.counter = 0;
      //   $("#leftarrow").click(this.nextItem.bind(this));
      //   $("#rightarrow").click(this.nextItem.bind(this));
      //   this.nextItem();
      //   console.log("lol");
      //   console.log(d);
      // });
      // console.log("lol2");
      // this.rb.setRobotBusy();
  }

  nextItem() {
    console.log(this.menuStuff);
    // this.data.requestMenu(console.log);
    this.counter = (this.counter + 1) % this.menuStuff.length;
    let item = this.menuStuff[this.counter];
    console.log("hi");
    $("#itemNo").text("Num: "+item.itemNo);
    $("#itemName").text("Name: "+item.itemName);
    // console.log(item.image);
    $('#displayImage').attr("src", item.image); // ?????
    $("#itemDescription").text("Description: "+item.itemDescription);
    $("#itemPrice").text("Price: "+item.itemPrice + " Baht");
    $("#isAvailable").text("Status: "+(item.isAvailable === 1) ? "Have" : "No Have" );
  }

}
