import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { mobiscroll } from '@mobiscroll/angular-lite';

import { SrdataService } from '../../srdata.service';

import * as $ from 'jquery';

declare var MobileSelect: any;

@Component({
  selector: 'app-reservequeue',
  templateUrl: './reservequeue.component.html',
  styleUrls: ['./reservequeue.component.css']
})


export class ReservequeueComponent implements OnInit {

  private tableData: any = null;

  constructor(private router: Router, private data: SrdataService) {
    this.data.currentTableData.subscribe((tableData) => {
      this.tableData = tableData;
    });
  }

  ngOnInit() {
    var weekdayArr = ['1', '2', '3', '4', '5', '6', '>6'];
    var timeOutTimeMS = 5 * 100000;// change from 1000--> 100000 to enlarge time because its too fast  by Gail
    var countDownMS = timeOutTimeMS;

    var mobileSelect1 = new MobileSelect({

      trigger: '#trigger1',

      wheels: [
        { data: weekdayArr }
      ],

      callback: function(indexArr, data) {
        $(document).ready(function() {
          $(document).click(function() {
            countDownMS = timeOutTimeMS;
            // comment out by gail for easy implement UI
            // alert("Time replaced: " + timeOutTimeMS);
          });

          // Timer count down
          setInterval(() => {
            countDownMS = countDownMS - 500;
            if (countDownMS < 0) {
              this.router.navigate([""]);
            }
          }, 500);
        });

        this.data.requestTable(weekdayArr[indexArr], function(tData) {
          // console.log(JSON.stringify(tData));
          if (tData.tableInfo.length > 0) {
            this.router.navigate(["guide"]);
          } else {
            this.router.navigate(["request"]);
          }
        }.bind(this));

      }.bind(this),

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
