import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { SrdataService } from '../../srdata.service';

@Component({
  selector: 'app-guidetotable',
  templateUrl: './guidetotable.component.html',
  styleUrls: ['./guidetotable.component.css']
})
export class GuidetotableComponent implements OnInit {

  constructor(private srData: SrdataService, private router: Router) { }

  ngOnInit() {
    //this.srData.invalidateSR(this.srData.tableInfo);
  }

}
