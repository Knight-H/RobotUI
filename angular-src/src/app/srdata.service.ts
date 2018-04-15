import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import * as $ from 'jquery';

@Injectable()
export class SrdataService {

  private tableDataSrc = new BehaviorSubject<any>(null);
  public currentTableData = this.tableDataSrc.asObservable();

  public requestTable(amountOfPeople, callback) {
    $.getJSON(`http://localhost:100/sr/checkTable?amountOfPeople=${amountOfPeople}`, function(data) {
      callback(data);
      this.changeTableData(data);
    }.bind(this));
  }

  public clearTable(){
    this.changeTableData(null);
  }

  private changeTableData(tableData) {
    this.tableDataSrc.next(tableData);
  }

}
