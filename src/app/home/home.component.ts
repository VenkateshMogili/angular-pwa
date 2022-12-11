import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  name: any = '';
  constructor() {}

  ngOnInit(): void {}

  changeName() {
    this.name = this.name === 'Venkatesh' ? 'Vivek' : 'Venkatesh';
  }
}
