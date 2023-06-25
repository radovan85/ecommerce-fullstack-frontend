import { Injectable, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { User } from '../common/user';
import axios from 'axios';

var target_url = `http://localhost:8080/api/users/`;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private authService: AuthenticationService) { }

  collectAllUsers() {
    var headers = this.authService.getHeaders();
    return axios.get(`${target_url}allUsers`, {
      headers
    })
  }

  getTargetUrl() {
    return target_url;
  }

  async suspendUser(userId: any) {
    var headers = this.authService.getHeaders();
    return await
      axios.put(`${target_url}suspendUser/${userId}`, {}, {
        headers
      })
  }


  async reactivateUser(userId: any) {
    var headers = this.authService.getHeaders();
    return await
      axios.put(`${target_url}reactivateUser/${userId}`, {}, {
        headers
      })
  }

  getCurrentUser() {
    var headers = this.authService.getHeaders();
    return axios.get(`${target_url}currentUser`, {
      headers
    })
  }
}
