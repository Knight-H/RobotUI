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

  constructor(private rb: RobotsService, private data: SrdataService, private router: Router) {
    var x;
  }

  ngOnInit() {
    //enableLoop;
    this.rb.setRobotFree();
    console.log(this.router.url);
    
    $(document).ready(function(){ 
      
        this.interval = setInterval(() => {
          
        
        if(this.router.url === "/"){
          alert("ajkflsajfl;jsakf;l ");
          //this.data.checkCallingQueue();
          // if(groupID!=null){
          //   this.router.navigate(["call"]);
          // }
        }else{
          clearInterval(this.interval);
        }
        
      }, 1000); }
    .bind(this));
  
    
    
  }



}
/*function enableLoop() {
  this.loop = true;
  this.load();
} */
