import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import { Logger } from 'angular2-logger/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  remember:boolean;
    user = {remember: false};
  
    constructor(private _logger: Logger,public dialogRef: MatDialogRef<LoginComponent>) { 

      this._logger.unstore();  
      this._logger.error("Priority level #1 error msg..");  
      this._logger.warn("Priority level #2 warning msg..");  
      this._logger.info("Priority level #3 warning msg..");  
      this._logger.debug("Priority level #4 debug msg..");  
      this._logger.log("Priority level #5 log msg.");  
    }
  
    ngOnInit() {
     // this.logger.debug('ngOnInit');
    }
  
    onSubmit() {
      console.log("User: ", this.user);
      this.dialogRef.close();
    }
  
  }