import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-action-buttons',
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.css']
})
export class ActionButtonsComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  public goto(location: string) {
    this.router.navigate([location]);
  }
}
