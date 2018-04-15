import { Injectable } from '@angular/core';

import * as $ from 'jquery';

@Injectable()
export class SrdataService {

  private tableData: any = null;

  public requestTable(amountOfPeople, callback) {
    $.getJSON(`http://localhost:100/sr/checkTable?amountOfPeople=${amountOfPeople}`, function(data) {
      callback(data);
      this.tableData = data;
    });
  }

  public getTableData(callback) {
    callback(this.tableData);
  }

}
