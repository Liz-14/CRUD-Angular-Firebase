import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  }

  constructor(private router: Router) { }

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
