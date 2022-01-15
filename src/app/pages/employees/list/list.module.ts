import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { FilterComponent } from './filter/filter.component';


@NgModule({
  declarations: [
    ListComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    ReactiveFormsModule
  ]
})
export class ListModule { }
