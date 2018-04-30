import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import * as $ from 'jquery';

@Injectable()
export class MenuService implements OnInit {

  public menuStuff = [];
  private menuSource = new BehaviorSubject<any>(null);
  public currentMenuData = this.menuSource.asObservable();

  constructor() {
    this.currentMenuData.subscribe((menuData) => {
      this.menuStuff = menuData;
    });
  }

  ngOnInit() {
    this.updateMenu((ddd) => {
      this.menuStuff = ddd;
    });
  }

  public getMenuStuff(callback) {
    callback(this.menuStuff);
  }

  public updateMenu(callback) {
    // this.simMenu();
    this.requestMenu(function (data){
      let menuList = data;
      for (let item of menuList){
        item.image=`http://localhost:100/menuItemImg/${item.itemNo}.png`;
      }
      this.menuSource.next(data);
      callback(data);
    }.bind(this));
  }

  public requestMenu(callback) {
    // this.simMenu();
    $.getJSON(`http://localhost:100/api/getMenuItem`, function(data) {
      callback(data);
      // console.log(data);
    }.bind(this));
  }

  public simMenu() {
    this.updateMenu((d)=>{alert(JSON.stringify(d));});
    if (1){
      return;
    }
    let data = [
      // {
      //   itemNo: 1,
      //   itemName: 'Fried Rice',
      //   itemDescription: 'Gud Fud',
      //   itemPrice: 45,
      //   isAvailable: 1,
      //   image: 'http://i.huffpost.com/gen/1126498/images/o-LIFE-CHANGE-facebook.jpg',
      //   category: 1
      // },
      // {
      //   itemNo: 2,
      //   itemName: 'Fried Egg',
      //   itemDescription: 'Gud Egg',
      //   itemPrice: 20,
      //   isAvailable: 1,
      //   image: 'http://i.huffpost.com/gen/1126498/images/o-LIFE-CHANGE-facebook.jpg',
      //   category: 1
      // },
      // {
      //   itemNo: 3,
      //   itemName: 'Lamb Sauce',
      //   itemDescription: 'Gordon Ramsy does not approve :c',
      //   itemPrice: 450,
      //   isAvailable: 0,
      //   image: 'http://i.huffpost.com/gen/1126498/images/o-LIFE-CHANGE-facebook.jpg',
      //   category: 2
      // }

      {
        itemNo: 5,
        itemName: 'Salad',
        itemDescription: 'Good salad',
        itemPrice: 20,
        isAvailable: 1,
        image: 'assets/menu/food1.jpeg',
        category: 1
      },
      {
        itemNo: 6,
        itemName: 'Steak',
        itemDescription: 'Juicy',
        itemPrice: 20,
        isAvailable: 1,
        image: 'assets/menu/food2.jpg',
        category: 1
      },
      {
        itemNo: 7,
        itemName: 'Salmon',
        itemDescription: 'Good salmon',
        itemPrice: 20,
        isAvailable: 1,
        image: 'assets/menu/food3.jpg',
        category: 1
      },
      {
        itemNo: 8,
        itemName: 'pizzz',
        itemDescription: 'Good life',
        itemPrice: 20,
        isAvailable: 1,
        image: 'assets/menu/food4.jpeg',
        category: 1
      },
      {
        itemNo: 10,
        itemName: 'MONT BLANC',
        itemDescription: 'Good life',
        itemPrice: 20,
        isAvailable: 1,
        image: 'assets/menu/dess1.jpg',
        category: 2
      },
      {
        itemNo: 11,
        itemName: 'MOOOOSE CAKE',
        itemDescription: 'Good life',
        itemPrice: 20,
        isAvailable: 1,
        image: 'assets/menu/dess2.jpg',
        category: 2
      },
      {
        itemNo: 12,
        itemName: 'Icecream',
        itemDescription: 'Good life',
        itemPrice: 20,
        isAvailable: 1,
        image: 'assets/menu/dess3.jpg',
        category: 2
      },
      {
        itemNo: 13,
        itemName: 'Caramel machiato',
        itemDescription: 'Good life',
        itemPrice: 20,
        isAvailable: 1,
        image: 'assets/menu/drink1.jpg',
        category: 3
      },
      {
        itemNo: 14,
        itemName: 'Orange Juice',
        itemDescription: 'Good life',
        itemPrice: 20,
        isAvailable: 1,
        image: 'assets/menu/drink2.jpg',
        category: 3
      },
      {
        itemNo: 15,
        itemName: 'PERRIER',
        itemDescription: 'Good life',
        itemPrice: 20,
        isAvailable: 1,
        image: 'assets/menu/drink3.jpg',
        category: 3
      }
    ];
    // this.menuSource.next(data);
    
    this.menuSource.next(data);
  }

}
