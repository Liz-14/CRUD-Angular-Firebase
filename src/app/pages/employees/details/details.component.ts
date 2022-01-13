import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  employee: any = null

  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  }

  constructor(private router: Router) {
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

  onClickDelete(): void{
    alert(`${this.employee.value} eliminado`)
  }

}
