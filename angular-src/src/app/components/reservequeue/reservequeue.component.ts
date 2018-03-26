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
   var weekdayArr = ['1', '2', '3', '4', '5', '6', '>6'];
    var timeOutTimeMS = 5 * 100000;// change from 1000--> 100000 to enlarge time because its too fast  by Gail
    var countDownMS = timeOutTimeMS;

    var mobileSelect1 = new MobileSelect({

      trigger: '#trigger1',

      wheels: [

        { data: weekdayArr }

      ],

      callback: function (indexArr, data) {
        $(document).ready(function () {
          $(document).click(function () {
            countDownMS = timeOutTimeMS;
            // comment out by gail for easy implement UI
           // alert("Time replaced: " + timeOutTimeMS);
          });

          // Timer count down
          setInterval(() => {
            countDownMS = countDownMS - 500;
            if (countDownMS < 0) {
              window.location.href = "";
            }
          }, 500);
        });
      },

      //onPopUpEvent: function () {
      //  countDownMS = timeOutTimeMS;
      //}

    });
    

    // We should use router instead
    // Because we use Angular
    /*
    $(document).ready(function () {
      $(document).click(function () {
        countDownMS = timeOutTimeMS;
        alert("Time replaced: " + timeOutTimeMS);
      });

      // Timer count down
      setInterval(() => {
        countDownMS = countDownMS - 500;
        if (countDownMS < 0) {
          window.location.href = "";
        }
      }, 500);
    });
    */
  }

}
