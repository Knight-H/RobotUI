import { Component, OnInit } from '@angular/core';

import { mobiscroll } from '@mobiscroll/angular-lite';


declare var MobileSelect: any;

@Component({
  selector: 'app-reservequeue',
  templateUrl: './reservequeue.component.html',
  styleUrls: ['./reservequeue.component.css']
})
export class ReservequeueComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var weekdayArr = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    var mobileSelect1 = new MobileSelect({

      trigger: '#trigger1',

      wheels: [

        { data: weekdayArr }

      ],

    });
    
  }

}
