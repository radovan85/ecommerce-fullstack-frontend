import { Component, OnInit } from '@angular/core';
import { AdminMessage } from 'src/app/common/admin-message';
import { Customer } from 'src/app/common/customer';
import { User } from 'src/app/common/user';
import { AdminMessageService } from 'src/app/services/admin-message.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CustomerService } from 'src/app/services/customer.service';
import { UserService } from 'src/app/services/user.service';
declare var jQuery: any;
declare var $: any;

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  messageList: AdminMessage[] = [];
  customerList: Customer[] = [];
  userList: User[] = [];

  constructor(private authService: AuthenticationService, private userService: UserService,
    private messageService: AdminMessageService, private customerService: CustomerService) { }

  ngOnInit(): void {
    this.listAllUsers();
    this.listAllCustomers();
    this.listAllMessages();
  }

  listAllUsers() {
    this.userService.collectAllUsers()
      .then((response) => {
        setTimeout(() => this.userList = response.data);
      })
  }

  listAllMessages() {
    this.messageService.collectAllMessages()
      .then((response) => {
        $(`#listingTable`).DataTable().destroy();
        setTimeout(function () {
          $(`#listingTable`).DataTable();
        }, 5)
        setTimeout(() => this.messageList = response.data);
      })
  }

  listAllCustomers() {
    this.customerService.collectAllCustomers()
      .then((response) => {
        setTimeout(() => this.customerList = response.data);
      })
  }

  redirectMessageDetails(messageId: any) {
    this.messageService.redirectMessageDetails(messageId);
  }

  deleteMessage(messageId: any) {
    if (confirm(`Remove this message?`)) {
      this.messageService.deleteMessage(messageId)
        .then(() => {
          this.listAllMessages();
          this.messageService.redirectAllMessages();
        }, function () {
          alert(`Failed!`);
        })
    }
  }

}
