import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Total Home Control';
  userUtils = [
  	{
  		"name": "Earth",
  		"id": 0
  	},
  	{
  		"name": "Wind",
  		"id": 1
  	},
  	{
  		"name": "Fire",
  		"id": 2,
  		"toggle": true
  	}
  ];
}
