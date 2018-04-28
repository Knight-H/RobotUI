import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import * as $ from 'jquery';

@Injectable()
export class SrdataService {

  private numOfPpl: number = -1;

  private queueDataSrc = new BehaviorSubject<any>(null);
  public currentQueueData = this.queueDataSrc.asObservable();

  private tableDataSrc = new BehaviorSubject<any>(null);
  public currentTableData = this.tableDataSrc.asObservable();

  public requestTable(amountOfPeople, callback) {
    $.getJSON(`http://localhost:100/sr/checkTable?amountOfPeople=${amountOfPeople}`, function(data) {
      callback(data);
      this.changeTableData(data);
    }.bind(this));
  }

  public simTable() {
    let data = {
      "error": null, // Value have is integer
      "exceedMaxSeatCount": false, // Does not exceed max seat count
      "tableInfo": [ // The table assigned
        { "tableNo": 5, "seatCount": 2, "positionID": "fe63b0af-0225-4286-b40c-24276aa57a4f" }
      ],
      "waitingQ": -1 // The amount of people waiting
      // -1 imply the information is not provided
    };
    this.changeTableData(data);
  }

  public simQueue() {
    let data = {
      "error": null, // Value have is integer
      "exceedMaxSeatCount": false, // Does not exceed max seat count
      "tableInfo": [], // Imply no table available
      "waitingQ": 0 // 0 queues before you
    };
    this.changeTableData(data);
  }

  public clearTable() {
    this.changeTableData(null);
  }

  private changeTableData(tableData) {
    this.tableDataSrc.next(tableData);
  }

  public invalidateSR(srUUID, callback) {
    $.getJSON(`http://localhost:100/sr/srInvalid?groupID=${srUUID}`, function(data) {
      callback(data);
    }.bind(this));
  }

  public requestQueue(amountOfPeople, callback) {
    $.getJSON(`http://localhost:100/sr/requestQueue?amountOfPeople=${amountOfPeople}`, function(data) {
      this.changeQueueData(data);
      callback(data);
    }.bind(this));
  }

  private changeQueueData(queueData){
    this.queueDataSrc.next(queueData);
  }

  public checkCallingQueue(callback) {
    $.getJSON(`http://localhost:100/sr/checkCallingQueue`, function(data) {
      this.changeQueueData(data);
      callback(data);
    }.bind(this));
  }

  public setPeopleAmount(ppl:number){
    this.numOfPpl = ppl;
  }

  public getPeopleAmount(){
    return this.numOfPpl;
  }

}
