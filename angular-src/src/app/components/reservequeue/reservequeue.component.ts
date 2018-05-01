import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { mobiscroll } from '@mobiscroll/angular-lite';

import { SrdataService } from '../../srdata.service';
import { RobotsService } from '../../robots.service';

import * as $ from 'jquery';

declare var MobileSelect: any;

@Component({
  selector: 'app-reservequeue',
  templateUrl: './reservequeue.component.html',
  styleUrls: ['./reservequeue.component.css']
})


export class ReservequeueComponent implements OnInit {

  private timeoutTimer = null;
  private tableData: any = null;

  private TIMEOUT_TIMEM_MS: number = 15 * 1000;
  private countDownMS: number = this.TIMEOUT_TIMEM_MS;

  constructor(private router: Router, private data: SrdataService, private rb: RobotsService) {
    this.data.currentTableData.subscribe((tableData) => {
      this.tableData = tableData;
    });
  }

  pplRequest(amtOfPpl: number) {
    //this.data.setPeopleAmount(amtOfPpl);
    this.countDownMS = this.TIMEOUT_TIMEM_MS;
    this.data.requestTable(amtOfPpl, function(tData) {
		//alert("ReserveQueue"+JSON.stringify(tData));
      if (tData.tableInfo.length > 0) {
        this.router.navigate(["guide"]);
      } else {
        this.router.navigate(["request"]);
      }
    }.bind(this));
  }

  testFx(xx) {
    alert(xx);
  }

  backToMain(){
    this.router.navigate([""]);
  }

  ngOnInit() {

    $(document).ready(() => {
      this.timeoutTimer = setInterval(() => {

        if (this.router.url !== "/reserve") {
          clearInterval(this.timeoutTimer);
          return;
        }

        this.countDownMS -= 1000;
        if (this.countDownMS < 0) {
          // this.data.invalidateSR("PLACEHOLDER UUID");
          this.router.navigate([""]);
        }
      }, 1000);
    });

    // this.rb.setRobotBusy();
    // var weekdayArr = ['testGuidePage', 'testQueuePage', '1', '2', '3', '4', '5', '6'];
    // var timeOutTimeMS = 500 * 1000;// change from 1000--> 100000 to enlarge time because its too fast  by Gail
    // var countDownMS = timeOutTimeMS;

    // var mobileSelect1 = new MobileSelect({
    //
    //   trigger: '#trigger1',
    //
    //   wheels: [
    //     { data: weekdayArr }
    //   ],
    //
    //   callback: function(indexArr, data) {
    //     $(document).ready(function() {
    //       $(document).click(function() {
    //         countDownMS = timeOutTimeMS;
    //         // comment out by gail for easy implement UI
    //         // alert("Time replaced: " + timeOutTimeMS);
    //       });
    //
    //       // Timer count down
    //       setInterval(() => {
    //         countDownMS = countDownMS - 500;
    //         if (countDownMS < 0) {
    //           this.router.navigate([""]);
    //         }
    //       }, 500);
    //     });
    //
    //     // Test/Bypass
    //     let testingCase = weekdayArr[indexArr];
    //     /* UNKNOW ERROR USING SWITCH CASE*/
    //     //     swtich(testingCase){
    //     //       case "testGuidePage":
    //     //   this.router.navigate(["guide"]);
    //     //   break;
    //     //   case 'testQueuePage':
    //     //   this.router.navigate(["request"]);
    //     //   break;
    //     //   default:
    //     //     console.log("no by pass");
    //     //   break;
    //     // }
    //     if (testingCase === "testGuidePage") {
    //       this.data.simTable();
    //       this.router.navigate(["guide"]);
    //       return;
    //     }
    //     if (testingCase === "testQueuePage") {
    //       this.data.simQueue();
    //       this.router.navigate(["request"]);
    //       return;
    //     }
    //
    //
    //     this.data.requestTable(weekdayArr[indexArr], function(tData) {
    //       // console.log(JSON.stringify(tData));
    //       if (tData.tableInfo.length > 0) {
    //         this.router.navigate(["guide"]);
    //       } else {
    //         this.router.navigate(["request"]);
    //       }
    //     }.bind(this));
    //
    //   }.bind(this),
    //
    //   //onPopUpEvent: function () {
    //   //  countDownMS = timeOutTimeMS;
    //   //}
    //
    // });


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
