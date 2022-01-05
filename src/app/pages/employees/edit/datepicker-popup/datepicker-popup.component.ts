import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms'

import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-datepicker-popup',
  templateUrl: './datepicker-popup.component.html',
  styleUrls: ['./datepicker-popup.component.scss']
})
export class DatepickerPopupComponent implements OnInit {

  model!: NgbDateStruct;

  @Input() parentForm!: FormGroup;
  @Input() formControlName! : string;

  constructor() { }

  ngOnInit(): void {
  }

}
