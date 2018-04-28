import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

import { MenuService } from '../../menu.service';
import { RobotsService } from '../../robots.service';

@Component({
  selector: 'app-menu2',
  templateUrl: './menu2.component.html',
  styleUrls: ['./menu2.component.css']
})
export class Menu2Component implements OnInit {

  private menuStuff = [];
  private counter: number = 0;


  constructor(private data: MenuService, private rb: RobotsService) {
    this.data.currentMenuData.subscribe((menuData) => {
      if (menuData != null) {
        for (var i = 0; i < menuData.length; i++) {
          if (menuData && menuData[i].category === 2) {
            this.menuStuff.push(menuData[i]);
          }
          //console.log(JSON.stringify(this.menuStuff));
        }
      }
    });
    this.data.simMenu();
  }

  ngOnInit() {
    
    $("#leftarrow").click(this.prevItem2.bind(this));
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
    $("#isAvailable").text("Status: "+((item.isAvailable === 1) ? "Have" : "No Have") );
  }

  prevItem2(){
    this.counter = (this.counter + this.menuStuff.length - 1) % this.menuStuff.length;
    this.displayItemToHTML(this.menuStuff[this.counter]);
  }

  displayItemToHTML(item){
    $("#itemNo").text(item.itemNo);
    $("#itemName").text(item.itemName);
    $('#displayImage').attr("src", item.image);
    $("#itemDescription").text(item.itemDescription);
    $("#itemPrice").text(item.itemPrice + " Baht");
    $("#isAvailable").text((item.isAvailable === 1) ? "Have" : "No Have" );
  }

}
