import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppOneRoutingModule } from './app-one-routing.module';
import { AppOneComponent } from './app-one.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppOneComponent],
  imports: [
    CommonModule,
    FormsModule,
    AppOneRoutingModule
  ]
})
export class AppOneModule { }
