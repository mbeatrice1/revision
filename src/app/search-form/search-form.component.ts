import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  username: string;
  
  @Output() searchGithubUsername = new EventEmitter<string>();

  submitUsername() {
    this.searchGithubUsername.emit(this.username);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
