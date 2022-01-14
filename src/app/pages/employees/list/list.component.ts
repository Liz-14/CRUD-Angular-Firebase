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

  mock: Employee[] = [
    {
      name: 'Mauricio',
      lastName: 'Rodriguez',
      email: 'hola@gmail.com',
      phone: 541315443,
      startDate: {
        year: 2021,
        month: 12,
        day: 12
      }
    },
    {
      name: 'Carlos',
      lastName: 'Rodriguez',
      email: 'hola@gmail.com',
      phone: 541315443,
      startDate: {
        year: 2021,
        month: 12,
        day: 12
      }
    },
    {
      name: 'Lucia',
      lastName: 'Rodriguez',
      email: 'hola@gmail.com',
      phone: 541315443,
      startDate: {
        year: 2021,
        month: 12,
        day: 12
      }
    },
    {
      name: 'Camila',
      lastName: 'Rodriguez',
      email: 'hola@gmail.com',
      phone: 541315443,
      startDate: {
        year: 2021,
        month: 12,
        day: 12
      }
    }
  ]
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

  onClickDelete(item: Employee): void{
    alert(`${item.name} ${item.lastName} eliminado`)
  }

  onClickClose(){
    this.employeeSvc.employeeSaved = false
    this.employeeSaved = false
  }
}
