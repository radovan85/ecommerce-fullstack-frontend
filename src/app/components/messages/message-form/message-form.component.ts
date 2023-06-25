import { Component, OnInit } from '@angular/core';
import { AdminMessage } from 'src/app/common/admin-message';
import { AdminMessageService } from 'src/app/services/admin-message.service';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent implements OnInit {

  message: AdminMessage = new AdminMessage

  constructor(private messageService: AdminMessageService) { }

  ngOnInit(): void {

  }

  sendMessage() {
    this.messageService.setMessage(this.message);
    this.messageService.sendMessage();
  }

}
