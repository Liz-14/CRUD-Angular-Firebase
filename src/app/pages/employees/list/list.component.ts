import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  mock = [
    {
      name: 'Mauricio',
      lastName: 'Rodriguez',
      email: 'hola@gmail.com',
      phone: '541315443',
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
      phone: '541315443',
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
      phone: '541315443',
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
      phone: '541315443',
      startDate: {
        year: 2021,
        month: 12,
        day: 12
      }
    }
  ]

  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  }

  constructor(private router: Router) {
   }

  ngOnInit(): void {
  }

  onClickEdit(item: any): void{
    this.navigationExtras.state!.value = item;
    this.router.navigate(['edit'], this.navigationExtras)
  }

  onClickSee(item: any): void{
    this.navigationExtras.state!.value = item;
    this.router.navigate(['details'], this.navigationExtras)
  }

  onClickDelete(item: any): void{
    alert(`${item} eliminado`)
  }
}
