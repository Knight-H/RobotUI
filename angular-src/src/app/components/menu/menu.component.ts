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

  private allMenuStuff = [];
  private menuWithCate = {};
  private menuStuff = [];
  private counter: number = 0;

  private toTimer = null;

  public currCate = 1; // Default category

  constructor(private router: Router, private mData: MenuService, private rb: RobotsService) {
    this.mData.currentMenuData.subscribe((menuData) => {
      if (menuData != null) {

        this.allMenuStuff = menuData;


        for (let item of this.allMenuStuff) {
          let cateNo = parseInt(item.category);
          let iArr = this.menuWithCate[cateNo] || new Array();
          iArr.push(item);
          this.menuWithCate[cateNo] = iArr;
        }

        this.setItem(0); // Set item
      }
    });
    this.mData.updateMenu((d)=>{}); // Get all the menu items
  }

  ngOnInit() {


    var timeOutTimeMS = 60 * 1000;// change from 1000--> 100000 to enlarge time because its too fast  by Gail
    var countDownMS = timeOutTimeMS;


    $(document).ready(function() {
      $(document).click(function() {
        countDownMS = timeOutTimeMS;
        // comment out by gail for easy implement UI
        //alert("Time replaced: " + timeOutTimeMS);
      });

      // Timer count down
      this.toTimer = setInterval(() => {
        if (this.router.url !== "/menu"){
          clearInterval(this.toTimer);
        }
        countDownMS = countDownMS - 500;
        if (countDownMS < 0) {
          this.router.navigate([""]);
        }
      }, 500);
    }.bind(this));
  }

  nextItem() {
    this.counter = (this.counter + 1) % this.menuWithCate[this.currCate].length;
    // alert("next item: "+this.counter);
    this.setItem(this.counter);
  }

  prevItem() {
    this.counter = (this.counter + this.menuWithCate[this.currCate].length - 1) % this.menuWithCate[this.currCate].length;
    this.setItem(this.counter);
  }

  setItem(indexNo: number) {
    // alert("indexNo: "+indexNo);
    let item = this.menuWithCate[this.currCate][indexNo];
    // alert(JSON.stringify(this.menuWithCate[this.currCate][1]));
    // alert(JSON.stringify(item));
    this.displayItemToHTML(item);
  }

  setCategory(categoryNum: number) {
    this.currCate = categoryNum;
    this.counter = 0;
    this.setItem(0);
  }

  displayItemToHTML(item) {
    $("#itemNo").text("ItemNo: " + item.itemNo);
    $("#itemName").text("Name: " + item.itemName);
    $('#displayImage').attr("src", item.image);
    $("#itemDescription").text("Description: " + item.itemDescription);
    $("#itemPrice").text("Price: " + item.itemPrice + " Baht");
    $("#isAvailable").text("Availablility: " + (item.isAvailable === 1) ? "Have" : "No Have");
  }


}
