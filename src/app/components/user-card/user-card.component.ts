import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  public userID = '';

  constructor(public route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userID = this.route.snapshot.params.id;
  }
}
