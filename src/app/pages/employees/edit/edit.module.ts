import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { EditRoutingModule } from './edit-routing.module';
import { EditComponent } from './edit.component';
import { DatepickerPopupComponent } from './datepicker-popup/datepicker-popup.component';


@NgModule({
  declarations: [
    EditComponent,
    DatepickerPopupComponent
  ],
  imports: [
    CommonModule,
    EditRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ]
})
export class EditModule { }
