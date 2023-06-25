import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import axios from 'axios';
import { AdminMessage } from '../common/admin-message';
import { Router } from '@angular/router';
import { ValidationService } from './validation.service';

var target_url = `http://localhost:8080/api/messages/`;

@Injectable({
  providedIn: 'root'
})
export class AdminMessageService {

  message: AdminMessage = new AdminMessage;

  constructor(private authService: AuthenticationService, private router: Router,
    private validationService: ValidationService) { }

  async sendMessage() {
    var headers = this.authService.getHeaders();
    if (this.validationService.validateMessage()) {
      await axios.post(`${target_url}sendMessage`, {
        text: this.message.text
      }, {
        headers
      })
        .then(() => {
          this.redirectMessageSent();
        }, function () {
          alert(`Failed`);
        })
    }
  }

  setMessage(tempMessage: AdminMessage) {
    this.message = tempMessage;
  }

  redirectMessageSent() {
    this.router.navigate([`messages/messageSent`]);
  }

  redirectMessageForm() {
    this.router.navigate([`messages/messageForm`]);
  }

  redirectAllMessages() {
    this.router.navigate([`messages`]);
  }

  redirectMessageDetails(messageId: any) {
    this.router.navigate([`messages/messageDetails/${messageId}`]);
  }

  collectAllMessages() {
    var headers = this.authService.getHeaders()
    return axios.get(`${target_url}allMessages`, {
      headers
    })
  }

  getMessageById(messageId: any) {
    var headers = this.authService.getHeaders();
    return axios.get(`${target_url}messageDetails/${messageId}`, {
      headers
    })
  }

  async deleteMessage(messageId: any) {
    var headers = this.authService.getHeaders();
    return await axios.delete(`${target_url}deleteMessage/${messageId}`, {
      headers
    })
  }
}
