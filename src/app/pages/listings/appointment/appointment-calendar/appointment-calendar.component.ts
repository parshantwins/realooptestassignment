import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment-calendar',
  templateUrl: './appointment-calendar.component.html',
  styleUrls: ['./appointment-calendar.component.css']
})
export class AppointmentCalendarComponent implements OnInit {

  toggleFirst: boolean = true;
  toggleSecond: boolean = false;
  toggleThird: boolean = true;
  toggleFourth: boolean = true;
  toggleFifth: boolean = false;
  toggleSixth: boolean = true;
  toggleSeventh: boolean = true;
  listOfData: any = [
    {
      key: '1',
      time: '9 am',
      activeFirst: true,
      activeSecond: false,
      activeThird: true,
      activeFourth: true,
      activeFifth: false,
      activeSixth: true,
      activeSeventh: true
    },
    {
      key: '2',
      time: '10 am',
      activeFirst: true,
      activeSecond: false,
      activeThird: true,
      activeFourth: true,
      activeFifth: false,
      activeSixth: true,
      activeSeventh: true
    },
    {
      key: '3',
      time: '11 am',
      activeFirst: true,
      activeSecond: false,
      activeThird: true,
      activeFourth: true,
      activeFifth: false,
      activeSixth: true,
      activeSeventh: true
    },
    {
      key: '4',
      time: '12 am',
      activeFirst: true,
      activeSecond: false,
      activeThird: true,
      activeFourth: true,
      activeFifth: false,
      activeSixth: true,
      activeSeventh: true
    },
    {
      key: '5',
      time: '1 pm',
      activeFirst: true,
      activeSecond: false,
      activeThird: true,
      activeFourth: true,
      activeFifth: false,
      activeSixth: true,
      activeSeventh: true
    },
    {
      key: '6',
      time: '2 pm',
      activeFirst: true,
      activeSecond: false,
      activeThird: true,
      activeFourth: true,
      activeFifth: false,
      activeSixth: true,
      activeSeventh: true
    },
    {
      key: '7',
      time: '3 pm',
      activeFirst: true,
      activeSecond: false,
      activeThird: true,
      activeFourth: true,
      activeFifth: false,
      activeSixth: true,
      activeSeventh: true
    },
    {
      key: '8',
      time: '4 pm',
      activeFirst: true,
      activeSecond: false,
      activeThird: true,
      activeFourth: true,
      activeFifth: false,
      activeSixth: true,
      activeSeventh: true
    },
    {
      key: '9',
      time: '5 pm',
      activeFirst: true,
      activeSecond: false,
      activeThird: true,
      activeFourth: true,
      activeFifth: false,
      activeSixth: true,
      activeSeventh: true
    },
    {
      key: '10',
      time: '6 pm',
      activeFirst: true,
      activeSecond: false,
      activeThird: true,
      activeFourth: true,
      activeFifth: false,
      activeSixth: true,
      activeSeventh: true
    },
    {
      key: '11',
      time: '7 pm',
      activeFirst: true,
      activeSecond: false,
      activeThird: true,
      activeFourth: true,
      activeFifth: false,
      activeSixth: true,
      activeSeventh: true
    },
    {
      key: '12',
      time: '8 pm',
      activeFirst: true,
      activeSecond: false,
      activeThird: true,
      activeFourth: true,
      activeFifth: false,
      activeSixth: true,
      activeSeventh: true
    },
    {
      key: '13',
      time: '9 pm',
      activeFirst: true,
      activeSecond: false,
      activeThird: true,
      activeFourth: true,
      activeFifth: false,
      activeSixth: true,
      activeSeventh: true
    }
  ];

  constructor() { }

  ngOnInit(): void {

  }

  toggleSwitch(value, toggleItem) {
    for (let i = 0; i < this.listOfData.length; i++) {
      this.listOfData[i][toggleItem] = value;
    }

    switch (toggleItem) {
      case 'activeFirst': this.toggleFirst = value; break;
      case 'activeSecond': this.toggleSecond = value; break;
      case 'activeThird': this.toggleThird = value; break;
      case 'activeFourth': this.toggleFourth = value; break;
      case 'activeFifth': this.toggleFifth = value; break;
      case 'activeSixth': this.toggleSixth = value; break;
      case 'activeSeventh': this.toggleSeventh = value; break;
    }
  }

}
