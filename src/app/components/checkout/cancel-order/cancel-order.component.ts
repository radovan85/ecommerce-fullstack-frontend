import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-cancel-order',
  templateUrl: './cancel-order.component.html',
  styleUrls: ['./cancel-order.component.css']
})
export class CancelOrderComponent implements OnInit {

  constructor(private mainService:MainService) { }

  ngOnInit(): void {
  }

  redirectHome(){
    this.mainService.redirectHome();
  }
}
