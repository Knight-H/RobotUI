import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

import { RobotsService } from '../../robots.service';
import { SrdataService } from '../../srdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  private interval = null;
  private intervalCallQueue = null;

  constructor(private rb: RobotsService, private data: SrdataService, private router: Router) { }

  ngOnInit() {
    //enableLoop;
    this.rb.setRobotFree();
    console.log(this.router.url);

    $(document).ready(function() {

      this.interval = setInterval(() => {
        if (this.router.url === "/") {
          // alert("ajkflsajfl;jsakf;l ");
          //this.data.checkCallingQueue();
          // if(groupID!=null){
          //   this.router.navigate(["call"]);
          // }
        } else {
          clearInterval(this.interval);
        }
      }, 1000);

      this.intervalCallQueue = setInterval(() => {
        if (this.router.url !== "/") {
          clearInterval(this.intervalCallQueue);
          return;
        }

        this.data.checkCallingQueue((wq)=>{
          if(wq.groupID !== null){
            this.router.navigate(["call"]);
          }
        });
      }, 250);


    }.bind(this));



  }
}
/*function enableLoop() {
  this.loop = true;
  this.load();
} */
