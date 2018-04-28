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

  private TIMEOUT_TIMEM_MS:number = 60 * 1000;
  private countDownMS:number = this.TIMEOUT_TIMEM_MS;

  constructor(private data: SrdataService, private router: Router) { }

  ngOnInit() {
    this.countDownMS = this.TIMEOUT_TIMEM_MS;
    $(document).ready(function(){ 
      alert("Time replaced: " + this.TIMEOUT_TIMEM_MS);
      setInterval(() => {
        this.countDownMS -= 1000;
        if (this.countDownMS < 0) {
          // this.data.invalidateSR("PLACEHOLDER UUID");
          this.router.navigate([""]);
        }
      }, 1000);
    }.bind(this));
  }

}
