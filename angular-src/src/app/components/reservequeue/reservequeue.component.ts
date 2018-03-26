import { Component, OnInit } from '@angular/core';

import { mobiscroll } from '@mobiscroll/angular-lite';

import * as $ from 'jquery';

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

    var timeOutTimeMS = 5 * 1000;
    var countDownMS = timeOutTimeMS;

    var mobileSelect1 = new MobileSelect({

      trigger: '#trigger1',

      wheels: [

        { data: weekdayArr }

      ],

    });
    $(document).ready(function () {
      $(document).click(function () {
        countDownMS = timeOutTimeMS;
        alert("Time replaced: " + timeOutTimeMS);
      });
    });

    setInterval(() => {
      countDownMS = countDownMS - 500;
      if (countDownMS < 0) {
        window.location.href = "";
      }
    }, 500);

    // We should use router instead
    // Because we use Angular
    
  }

}
