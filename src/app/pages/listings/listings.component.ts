import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {
  isCollapsed = false;
  selectedTabIndex = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
