import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import * as $ from 'jquery';

@Injectable()
export class MenuService implements OnInit{

  public menuStuff = [];
  private menuSource = new BehaviorSubject<any>(null);
  public currentMenuData = this.menuSource.asObservable();

  constructor() {
    this.currentMenuData.subscribe((menuData) => {
      this.menuStuff = menuData;
    });
  }

  ngOnInit(){
    this.updateMenu((ddd)=>{
      this.menuStuff = ddd;
    });
  }

  public getMenuStuff(callback){
    callback(this.menuStuff);
  }

  public updateMenu(callback){
    this.requestMenu(function (data){
      let menuList = data;
      for (let item of menuList){
        item.image=`http://localhost:100/menuItemImg/${item.itemNo}.png`;
      }
      this.menuSource.next(data);
      callback(data);
    }.bind(this));
  }

  public requestMenu(callback){
    $.getJSON(`http://localhost:100/api/getMenuItem`, function(data) {
      callback(data);
      // console.log(data);
    }.bind(this));
  }

  public simMenu() {
    let data = [{
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
    this.menuSource.next(data);
  }

}
