
import { Component , OnInit } from '@angular/core';

import { mobiscroll } from '@mobiscroll/angular-lite';


declare var MobileSelect: any;

mobiscroll.settings = {
    theme: 'auto'
};
@Component({
  selector: 'app-testgail',
  templateUrl: './testgail.component.html',
  styleUrls: ['./testgail.component.css']
})
export class TestgailComponent implements OnInit{
   

  ngOnInit() {
    var weekdayArr=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    
    var mobileSelect1 = new MobileSelect({
  
      trigger: '#trigger1',
  
      wheels: [
  
        {data: weekdayArr}
  
      ],
  
  });
  }
}