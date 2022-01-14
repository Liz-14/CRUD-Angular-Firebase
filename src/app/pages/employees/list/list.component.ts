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
  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  }

  constructor(private router: Router, private employeeSvc: FireServiceService) {
   }

  ngOnInit(): void {
    this.employeeSaved = this.employeeSvc.employeeSaved
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
       alert(`${item.name} ${item.lastName} eliminado`)
     }catch(err){
       console.log(err)
     }

  }

  onClickClose(){
    this.employeeSvc.employeeSaved = false
    this.employeeSaved = false
  }
}
