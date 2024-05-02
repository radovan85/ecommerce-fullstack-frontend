import { Injectable } from '@angular/core';
import axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private targetUrl = `http://localhost:8080/api/users/`;

  getCurrentUser() {
    return axios.get(`${this.targetUrl}currentUser`);
  }

  collectAllUsers() {
    return axios.get(`${this.targetUrl}allUsers`);
  }

  async suspendUser(userId: any) {
    return await axios.put(`${this.targetUrl}suspendUser/${userId}`);
  }

  async reactivateUser(userId: any) {
    return await axios.put(`${this.targetUrl}reactivateUser/${userId}`);
  }


}
