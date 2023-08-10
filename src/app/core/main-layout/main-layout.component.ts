import { Component } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {

  public path = [
   {
    name:"app-one",
    url:"/app-one"
   },
   {
    name:"app-service",
    url:"/app-service"
   },
   {
    name:"app-form",
    url:"/app-form"
   },
  ]
}
