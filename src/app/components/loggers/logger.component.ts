/**
 * Created by Ernest on 3/26/2017.
 */
import { Component, OnInit } from '@angular/core';
import { FeathersService } from '../../services/feathers.service';
import { Logger } from '../../Logger';

@Component({
  selector: 'logger',
  templateUrl: './logger.component.html'
})
export class LoggerComponent implements OnInit{
  loggers: Array<Logger> = [];
  logText: string;
  logDev: string;
  logDate: string;

  constructor(private _feathersService: FeathersService) {

  }

  ngOnInit() {
    this._feathersService.getLogs().subscribe(loggers => {
      this.loggers = loggers;
    });
  }

  addLog() {
    var logDate = new Date();
    var newLog = {
      developer: this.logDev,
      text: this.logText,
      date: logDate
    }

    this._feathersService.addLog(newLog)
      .subscribe(data => {
        this.loggers.push({
          _id: data._id,
          text: this.logText,
          developer: this.logDev,
          date: data.date
        });
        this.logText = '';
        this.logDev = '';
      });
  }

  deleteLog(id) {
    this._feathersService.deleteLog(id)
      .subscribe(data => {
        for(var i=0; i < this.loggers.length; i++) {
          if(this.loggers[i]._id == id) {
            this.loggers.splice(i,1);
          }
        }
      });
  }
}
