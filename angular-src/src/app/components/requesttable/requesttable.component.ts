import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as $ from 'jquery';

import { SrdataService } from '../../srdata.service';

@Component({
  selector: 'app-requesttable',
  templateUrl: './requesttable.component.html',
  styleUrls: ['./requesttable.component.css']
})
export class RequesttableComponent implements OnInit {

  private tableData: any = null;

  constructor(private router: Router, private data: SrdataService) {
    this.data.currentTableData.subscribe((tableData) => {
      this.tableData = tableData;
    });
  }

  ngOnInit() {
    console.log("sdf:" + JSON.stringify(this.tableData));
    $("#waitingQueueCount").text(this.tableData.waitingQ);
  }

  requestQueuePlis(){
    this.data.requestQueue(this.data.getPeopleAmount(), (d)=>{
		//alert("Name plis: " + JSON.stringify(this.tableData));
      console.log(d);
      this.router.navigate(["/result"]);
    });
  }

}
