import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-cart-error',
  templateUrl: './cart-error.component.html',
  styleUrls: ['./cart-error.component.css']
})
export class CartErrorComponent implements OnInit {

  constructor(private mainService:MainService) { }

  ngOnInit(): void {
  }

  redirectHome(){
    this.mainService.redirectHome();
  }

}
