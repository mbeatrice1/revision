import { Component, OnInit, ɵConsole } from '@angular/core';
import { User } from '../user-class/user';
import { UserService } from '../user-service/user.service';
import { RepositoryService } from '../repo-service/repository.service';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  user: User;
  repos = [];
  isHighlight: boolean = true;
  githubUsername: string = "bella-amandine";

  constructor(private userService: UserService, private repoService: RepositoryService) { 
  }

  getUsernameToSearch(username){
    this.githubUsername = username;
    this.userService.getUser(this.githubUsername);
    this.repoService.getRepos(this.githubUsername);
    this.user = this.userService.user;
    this.repos = this.repoService.repositories;
  }


  ngOnInit(): void {
    this.userService.getUser(this.githubUsername);
    this.user = this.userService.user;
    this.repoService.getRepos(this.githubUsername);
    this.repos = this.repoService.repositories;
  }


  checkDescription(repo) {
    if(repo.description === null) {
      this.isHighlight = false;
    }
    else {
      this.isHighlight = true;
    }
    return this.isHighlight;
  }

}
