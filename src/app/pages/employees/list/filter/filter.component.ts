import { Component, OnInit } from '@angular/core';
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
  fecha!: Date

  constructor(private fb: FormBuilder) {
    this.days = Array.from({ length: 30 }, (_, i) => i + 1)
    this.months = Array.from({ length: 12 }, (_, i) => i + 1)
    this.years = Array.from(Array.from(Array(Math.ceil((2022 - 2020))).keys()), x => 2020 + x)
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
    this.fecha = new Date(this.filterForm.value.year, this.filterForm.value.month - 1, this.filterForm.value.day)
    console.log(this.fecha)
    console.log(this.filterForm.value)
  }

}
