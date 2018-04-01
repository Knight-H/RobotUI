import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-bob2',
  templateUrl: './bob2.component.html',
  styleUrls: ['./bob2.component.css']
})
export class Bob2Component implements OnInit {

  constructor() { }

  ngOnInit() {
    var object1 = $(".circle1");
    var object2 = $(".circle2");
    
    $(".bg-img").mousemove(this.move_gen(object1));
    $(".bg-img").mousemove(this.move_gen(object2));
  }
  move_gen(object){
    function move(e){
      let offset = object.offset();
      var center_X = (offset.left + 5) + (object.width() / 2);
      var center_Y = (offset.top) + (object.height() / 2);
      var mouse_X = e.pageX;
      var mouse_Y = e.pageY;
      
      var radius = Math.atan2(mouse_X - center_X, mouse_Y - center_Y);
      var degree = (radius * (180 / Math.PI) * -1);
      
      object.css('transform','rotate('+degree+'deg)');        
    }
    return move;
  }
}


