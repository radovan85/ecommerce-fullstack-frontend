import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { AuthenticationRequest } from '../common/authentication-request';
import { User } from '../common/user';

var target_url = `http://localhost:8080/api/`;

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  authRequest: AuthenticationRequest = new AuthenticationRequest;
  authUser: User = new User;

  constructor(private router: Router) { }

  isAdmin(): boolean {
    var role = localStorage.getItem(`role`);
    if (role) {
      if (role == "ADMIN") {
        return true;
      } else {
        return false;
      }
    }

    return false;
  }

  isUser(): boolean {
    var role = localStorage.getItem(`role`);
    if (role) {
      if (role == "ROLE_USER") {
        return true;
      } else {
        return false;
      }
    }

    return false;
  }

  isAuthenticated() {
    var returnValue = false;
    var authUser = localStorage.getItem('currentUser');
    var authToken = localStorage.getItem('authToken');
    if (authUser) {
      if (authToken) {
        returnValue = true;
      }
    }

    return returnValue;
  }

  async login() {
    var alertMessage = document.getElementById(`alertMessage`);
    await
      axios.post(`${target_url}login`, {
        username: this.authRequest.username,
        password: this.authRequest.password
      })
        .then((response) => {
          localStorage.setItem(`currentUser`, JSON.stringify(response));
          this.authUser = response.data;
          var enabledStr = this.authUser.enabled;
          if(enabledStr == `0`){
            alert(`Account suspended!`);
          }
          var tokenStr = this.authUser.authToken;
          var authToken = '';
          if (tokenStr) {
            authToken = `Bearer ${tokenStr}`;
            localStorage.setItem(`authToken`, authToken);
            var roleIdStr = this.authUser.rolesIds;
            if (roleIdStr) {
              var roleId = JSON.parse(Object.values(roleIdStr)[0]);
              if (roleId == `1`) {
                localStorage.setItem(`role`, `ADMIN`);
              }

              if (roleId == `2`) {
                localStorage.setItem(`role`, `ROLE_USER`);
              }
            }



          }

          if (alertMessage) {
            alertMessage.style.visibility = `hidden`;
          }

          console.log(`Login completed!`);
          this.router.navigate([`home`]);

        }, function () {
          if (alertMessage) {
            alertMessage.style.visibility = `visible`;
          }
        })
  }

  logout() {
    localStorage.clear();
    this.router.navigate([`login`]);
  }

  getHeaders() {
    var authToken = localStorage.getItem('authToken');
    if (authToken) {
      return {
        authorization: authToken,
        'Content-Type': "application/json; charset=UTF-8"
      }
    }

    return {};
  }

  setAuthRequest(tempRequest: AuthenticationRequest) {
    this.authRequest = tempRequest;
  }
}
