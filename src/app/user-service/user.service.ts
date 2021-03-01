import { Injectable } from '@angular/core';
import { User } from '../user-class/user';
import { HttpClient } from '@angular/common/http';
import { rejects } from 'assert';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;

  constructor(private http: HttpClient) { 
    this.user = new User("", "");
  }

  getUser(username) {
    interface ApiResponse {
      login: string;
      avatar_url: string;
    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<ApiResponse>(`https://api.github.com/users/${username}?access_token=${environment.myGithubToken}`).toPromise().then(response => {
        this.user.username = response.login;
        this.user.profilePic = response.avatar_url;

        resolve()
      },
      error => {
        this.user.username = "Wrong username";
        this.user.profilePic = "Wrong picture url";

        reject(error)
      })
    })
    return promise;
  }
}
