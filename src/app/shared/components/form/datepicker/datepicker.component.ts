import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms'

import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
})
export class DatepickerComponent implements OnInit {

  model!: NgbDateStruct;

  @Input() parentForm!: FormGroup;
  @Input() formContName! : string;

  constructor() { }

  ngOnInit(): void {
  }

}
