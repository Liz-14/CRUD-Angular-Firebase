import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

import { Employee } from 'src/app/interfaces/employee.interface';

import { FireServiceService } from '../../../pages/service/fire-service.service'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  employee: Employee

  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  }

  constructor(private router: Router, private employeeSvc: FireServiceService) {
    const navigation = this.router.getCurrentNavigation();
    this.employee = navigation?.extras?.state?.value
   }

  ngOnInit(): void {
    if(typeof this.employee === 'undefined'){
      this.router.navigate(['list'])
    }
  }

  onClickBack(): void{
    this.router.navigate(['list'])
  }

  onClickEdit(): void{
    this.navigationExtras.state!.value = this.employee;
    this.router.navigate(['edit'], this.navigationExtras)
  }

  async onClickDelete(): Promise<void>{
    try{
      await this.employeeSvc.onDelete(this.employee.id)
      alert(`${this.employee.name} ${this.employee.lastName} eliminado`)
      this.router.navigate(['list'])
    }catch(err){
      console.log(err)
    }
  }

}
