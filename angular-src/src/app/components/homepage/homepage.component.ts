import { Component, OnInit } from '@angular/core';

import { RobotsService } from '../../robots.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private rb: RobotsService) {
    var x;
  }

  ngOnInit() {
    //enableLoop;
    this.rb.setRobotFree();
  }



}
/*function enableLoop() {
  this.loop = true;
  this.load();
} */
