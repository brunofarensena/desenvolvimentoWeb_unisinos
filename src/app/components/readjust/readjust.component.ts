import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-readjust',
  templateUrl: './readjust.component.html',
  styleUrls: ['./readjust.component.css']
})
export class ReadjustComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
  public goto(location: string) {
    this.router.navigate([location]);
  }
}
