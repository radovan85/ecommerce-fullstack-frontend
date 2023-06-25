import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminMessage } from 'src/app/common/admin-message';
import { Customer } from 'src/app/common/customer';
import { User } from 'src/app/common/user';
import { AdminMessageService } from 'src/app/services/admin-message.service';
import { CustomerService } from 'src/app/services/customer.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-message-details',
  templateUrl: './message-details.component.html',
  styleUrls: ['./message-details.component.css']
})
export class MessageDetailsComponent implements OnInit {

  tempMessage: AdminMessage = new AdminMessage;
  customerList: Customer[] = [];
  userList: User[] = [];

  constructor(private route: ActivatedRoute, private messageService: AdminMessageService,
    private customerService: CustomerService, private userService: UserService) { }

  ngOnInit(): void {
    this.listAllUsers();
    this.listAllCustomers();
    this.getMessageDetails(this.route.snapshot.params[`messageId`]);
  }

  getMessageDetails(messageId: any) {
    this.messageService.getMessageById(messageId)
      .then((response) => {
        this.tempMessage = response.data;
      })
  }

  listAllCustomers() {
    this.customerService.collectAllCustomers()
      .then((response) => {
        setTimeout(() => this.customerList = response.data);
      })
  }

  listAllUsers() {
    this.userService.collectAllUsers()
      .then((response) => {
        setTimeout(() => this.userList = response.data);
      })
  }

  redirectAllMessages() {
    this.messageService.redirectAllMessages();
  }

  deleteMessage(messageId: any) {
    if (confirm(`Remove this message?`)) {
      this.messageService.deleteMessage(messageId)
        .then(() => {
          this.messageService.collectAllMessages();
          this.messageService.redirectAllMessages();
        }, function () {
          alert(`Failed`);
        })
    }
  }

}
