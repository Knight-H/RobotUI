import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-bob',
  templateUrl: './bob.component.html',
  styleUrls: ['./bob.component.css']
})
export class BobComponent implements OnInit {

  constructor() { }

  ngOnInit() {

 

    $(document).ready(function () {
      $("button").click(function () {
        $("#Mouth").toggleClass("cssSadMouth");
      });
    });

  }

}
