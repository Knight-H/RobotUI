import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';


@Component({
  selector: 'app-queueresult',
  templateUrl: './queueresult.component.html',
  styleUrls: ['./queueresult.component.css']
})
export class QueueresultComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // try to implement jquery to the <p> queue

    $(document).ready(function () {
      $("#queue").load(function () {
        $("#queue").val("Dolly Duck");
      });
      // jQuery methods go here...

    });

}

}
