import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  days!: number[]
  months!: number[]
  years!: number[]
  filterForm!: FormGroup
  @Output() dateFilterClick = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    this.days = Array.from({ length: 30 }, (_, i) => i + 1)
    this.months = Array.from({ length: 12 }, (_, i) => i + 1)
    this.years = Array.from(Array.from(Array(Math.ceil((2023 - 2020))).keys()), x => 2020 + x)
    this.initForm()
  }

  ngOnInit(): void {
  }

  private initForm(): void {
    this.filterForm = this.fb.group({
      day: [null],
      month: [null],
      year: [null]
    })
  }

  onFilter() {
    this.dateFilterClick.emit(this.filterForm.value)
  }

  onClickRestart(){
    this.filterForm.reset();
    this.dateFilterClick.emit(this.filterForm.value)
  }

}
