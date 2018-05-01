import { Component, OnInit } from '@angular/core';
import { SrdataService } from '../../srdata.service';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-queuecall',
  templateUrl: './queuecall.component.html',
  styleUrls: ['./queuecall.component.css']
})
export class QueuecallComponent implements OnInit {

  private internalSRdata = null;
  private timeoutTimer = null;

  private TIMEOUT_TIMEM_MS: number = 6 * 1000;
  private countDownMS: number = this.TIMEOUT_TIMEM_MS;

  constructor(private data: SrdataService, private router: Router) {
    this.data.currentQueueData.subscribe((queueData) => {
      this.internalSRdata = queueData;
    });
  }

  ngOnInit() {
    this.countDownMS = this.TIMEOUT_TIMEM_MS;

    $("#queueDisplay").text(this.internalSRdata.queueNo);






    $(document).ready(function() {
      //alert("Time replaced: " + this.TIMEOUT_TIMEM_MS);

      $("#timeDisplayClock").text(this.countDownMS/1000);

      this.timeoutTimer = setInterval(() => {

        if (this.router.url !== "/call") {
          clearInterval(this.timeoutTimer);
          return;
        }

        $("#timeDisplayClock").text(this.countDownMS/1000);
        this.countDownMS -= 1000;
        if (this.countDownMS < 0) {
          this.data.invalidateSR(this.internalSRdata.groupID, (d)=>{});
          this.router.navigate([""]);
        }

      }, 1000);

    }.bind(this));
  }

}
