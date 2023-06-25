import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-stock-error',
  templateUrl: './stock-error.component.html',
  styleUrls: ['./stock-error.component.css']
})
export class StockErrorComponent implements OnInit {

  constructor(private mainService:MainService) { }

  ngOnInit(): void {
  }

  redirectHome(){
    this.mainService.redirectHome();
  }
}
