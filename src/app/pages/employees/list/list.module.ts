import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { FilterComponent } from './filter/filter.component';

import { SharedModule } from '../../../shared/shared.module';


@NgModule({
  declarations: [
    ListComponent,
    FilterComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ListModule { }
