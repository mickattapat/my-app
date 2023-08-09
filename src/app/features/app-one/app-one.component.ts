import { Component } from '@angular/core';

@Component({
  selector: 'app-app-one',
  templateUrl: './app-one.component.html',
  styleUrls: ['./app-one.component.scss']
})
export class AppOneComponent {
  readonly title = 'my-app';
  public name: string = ""

  public checkName() {
    console.log(this.name);
  }
}
