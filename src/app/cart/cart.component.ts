import { Component, OnInit } from '@angular/core';
import { appPath } from '../app-path.const';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  /**
   * 給 Template 用的路由定義
   *
   * @memberof CartComponent
   */
  path = appPath;

  constructor() { }

  ngOnInit() {
  }

}
