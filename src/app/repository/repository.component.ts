import { Component, OnInit } from '@angular/core';
import { RepositoryService } from '../repo-service/repository.service';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})
export class RepositoryComponent implements OnInit {

  repos = []; 

  githubUsername: string =  "";

  constructor(private repoService: RepositoryService) { }

  findRepositories(githubUsername) {
    this.githubUsername = githubUsername;
    this.repoService.getRepos(this.githubUsername);
    this.repos = this.repoService.repositories;
  }

  checkDescription(repo) {
    if(repo.description === null) {
      return false;
    }
    else {
      return true;
    }
  }

  ngOnInit(): void {

  }

}
