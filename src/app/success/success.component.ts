import { Component, OnInit } from '@angular/core';
import { appPath } from '../app-path.const';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  /**
   * 給 Template 用的路由定義
   *
   * @memberof SuccessComponent
   */
  path = appPath;

  constructor() { }

  ngOnInit() {
  }

}
