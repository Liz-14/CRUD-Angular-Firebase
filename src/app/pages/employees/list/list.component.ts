import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

import { Employee } from 'src/app/interfaces/employee.interface';

import { FireServiceService } from '../../../pages/service/fire-service.service'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  listEmployees$ = this.employeeSvc.employees
  employeeSaved!: boolean
  employeeDeleted!: boolean
  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  }
  dateFilterToPipe!: any

  constructor(private router: Router, private employeeSvc: FireServiceService) {
   }

  ngOnInit(): void {
    this.employeeSaved = this.employeeSvc.employeeSaved
    this.employeeDeleted = false
  }

  onClickEdit(item: Employee): void{
    this.navigationExtras.state!.value = item;
    this.router.navigate(['edit'], this.navigationExtras)
  }

  onClickSee(item: Employee): void{
    this.navigationExtras.state!.value = item;
    this.router.navigate(['details'], this.navigationExtras)
  }

   async onClickDelete(item: Employee): Promise<void>{
     try{
       await this.employeeSvc.onDelete(item.id)
       this.employeeDeleted = true
     }catch(err){
       console.log(err)
     }

  }

  onClickClose(){
    this.employeeSvc.employeeSaved = false
    this.employeeSaved = false
    this.employeeDeleted = false
  }

  dateFilter(event: any): void{
    this.dateFilterToPipe = event
    console.log(event)
  }

}
