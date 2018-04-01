import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
declare var move: any;
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

    var object = $(".cssEye");
        if(object.length > 0){
            var offset = object.offset(); 
            
            
            
            $("#box").mousemove(move);
        }
        function move(e){
          var center_X = (offset.left + 5) + (object.width() / 2);
          var center_Y = (offset.top) + (object.height() / 2);
          var mouse_X = e.pageX;
          var mouse_Y = e.pageY;
          
          var radius = Math.atan2(mouse_X - center_X, mouse_Y - center_Y);
          var degree = (radius * (180 / Math.PI) * -1);
          
          object.css('transform','rotate('+degree+'deg)');        
      }

  }

}
