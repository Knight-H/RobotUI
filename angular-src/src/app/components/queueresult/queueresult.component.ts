import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as $ from 'jquery';

import { SrdataService } from '../../srdata.service';


@Component({
  selector: 'app-queueresult',
  templateUrl: './queueresult.component.html',
  styleUrls: ['./queueresult.component.css']
})
export class QueueresultComponent implements OnInit {

  private queueData: any = null;

  constructor(private router: Router, private data: SrdataService) {
    this.data.currentQueueData.subscribe((qData) => {
      this.queueData = qData;
    });
  }

  ngOnInit() {
    // try to implement jquery to the <p> queue

    $(document).ready(() => {
      // alert("Show: "+JSON.stringify(this.queueData));
      $("#queueShow").text(this.queueData.queueNo);
    });

}

}
