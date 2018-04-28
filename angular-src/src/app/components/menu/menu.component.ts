import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';


import { MenuService } from '../../menu.service';
import { RobotsService } from '../../robots.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  private menuStuff = [];
  private counter:number = 0;
  

  constructor(private router: Router, private data: MenuService, private rb: RobotsService) {
    this.data.currentMenuData.subscribe((menuData) => {
      this.menuStuff = menuData;
    });
  }
  

  ngOnInit() {

    var timeOutTimeMS = 5 * 1000;// change from 1000--> 100000 to enlarge time because its too fast  by Gail
    var countDownMS = timeOutTimeMS;
    this.data.simMenu();
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

      $(document).ready(function() {
        $(document).click(function() {
          countDownMS = timeOutTimeMS;
          // comment out by gail for easy implement UI
           //alert("Time replaced: " + timeOutTimeMS);
        });
    
        // Timer count down
        setInterval(() => {
          countDownMS = countDownMS - 500;
          if (countDownMS < 0) {
            this.router.navigate([""]);
          }
        }, 500);
      }.bind(this))
  }

  nextItem() {
    console.log(this.menuStuff);
    // this.data.requestMenu(console.log);
    this.counter = (this.counter + 1) % this.menuStuff.length;
    //this.counter = Math.max(this.counter - 1, 0);
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

  nextItem1() {
    console.log(this.menuStuff);
    // this.data.requestMenu(console.log);
    //this.counter = (this.counter + 1) % this.menuStuff.length;
    this.counter = Math.max(this.counter - 1, 0);
    //this.counter = (this.counter + this.menuStuff.length - 1) % this.menuStuff.length;
    let item = this.menuStuff[this.counter];
    console.log("hi");
    
    
  }

  nextItem2(){
    this.counter = Math.max(this.counter - 1, 0);
    this.displayItemToHTML(this.menuStuff[this.counter]);
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
