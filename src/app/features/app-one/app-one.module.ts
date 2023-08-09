import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppOneRoutingModule } from './app-one-routing.module';
import { AppOneComponent } from './app-one.component';

@NgModule({
  declarations: [AppOneComponent],
  imports: [
    CommonModule,
    AppOneRoutingModule
  ]
})
export class AppOneModule { }
