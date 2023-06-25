import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-message-sent',
  templateUrl: './message-sent.component.html',
  styleUrls: ['./message-sent.component.css']
})
export class MessageSentComponent implements OnInit {

  constructor(private mainService:MainService) { }

  ngOnInit(): void {
  }

  redirectHome(){
    this.mainService.redirectHome();
  }

}
