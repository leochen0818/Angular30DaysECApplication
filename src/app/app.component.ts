import { Component } from '@angular/core';

// Constant
import { appPath } from './app-path.const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /**
   * 給 Template 用的路由定義
   *
   * @memberof AppComponent
   */
  path = appPath;

}
