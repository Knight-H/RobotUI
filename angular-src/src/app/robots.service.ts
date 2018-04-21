import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import * as $ from 'jquery';

@Injectable()
export class RobotsService {

  private isSim: boolean = true;
  // private robotUUID = "66acd781-2bdc-4a94-a874-68e0bca95560";

  private robotSrc = new BehaviorSubject<any>(null);
  public currentRobotData = this.robotSrc.asObservable();

  constructor() { }

  public setRobotBusy() {
    this.setRobotStatus(2);
  }

  public setRobotFree() {
    this.setRobotStatus(1);
  }

  public setRobotStatus(rstatus) {
    if (this.isSim) {
      return;
    }
    $.getJSON(`http://localhost:100/robot/updateStatus?robotUUID=66acd781-2bdc-4a94-a874-68e0bca95560&rstatus=${rstatus}`);
  }

}
