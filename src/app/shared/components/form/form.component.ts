import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormGroup, FormBuilder, Validators  } from '@angular/forms'

import { Employee } from 'src/app/interfaces/employee.interface';

import { FireServiceService } from '../../../pages/service/fire-service.service'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  employee: Employee;
  employeeForm!: FormGroup
  private isEmail = /\S+@\S+\.\S+/
  private isNumber = /^\d+$/

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private employeeSvc: FireServiceService) {
    const navigation = this.router.getCurrentNavigation()
    this.employee = navigation?.extras?.state?.value
    this.initForm()
  }

  ngOnInit(): void {
    if(typeof this.employee === 'undefined'){
      this.router.navigate(['new'])
    }else{
      this.employeeForm.patchValue(this.employee)
    }
  }

  private initForm(): void{
    this.employeeForm = this.fb.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern(this.isEmail)]],
      startDate: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern(this.isNumber)]]
    })
  }

  get name() {return this.employeeForm.get('name')}
  get lastName() {return this.employeeForm.get('lastName')}
  get email() {return this.employeeForm.get('email')}
  get startDate() {return this.employeeForm.get('startDate')}
  get phone() {return this.employeeForm.get('phone')}

  onSave(): void{
    const employeeToSend = this.employeeForm.value
    const employeeId = this.employee?.id || null
    this.employeeSvc.onSave(employeeToSend, employeeId)
    this.employeeForm.reset();
    this.employeeSvc.employeeSaved = true
    this.router.navigate(['list'])
  }

  onClickBack(): void{
    this.router.navigate(['list'])
  }

}
