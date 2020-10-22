import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  checkOptionsOne = [
    { label: 'Sellers', value: 'Sellers' },
    { label: 'Listing Agent', value: 'Listing Agent' },
    { label: 'Auto', value: 'Auto', checked: true }
  ];

  checkOptionsTwo = [
    { label: '15 mins', value: '15 mins' },
    { label: '30 mins', value: '30 mins', checked: true },
    { label: '60 mins', value: '60 mins', checked: true },
    { label: 'custom', value: 'custom' }
  ];

  setup: any = {
    selectedNotice: null,
    selectedBooking: null,
    officeInstruction: "",
    checkOptionsOne: this.checkOptionsOne,
    checkOptionsTwo: this.checkOptionsTwo
  }

  instructions: any = {
    selectedLockbox: null,
    selectedFeedback: null,
    agentInstructions: "",
  }

  constructor() { }

  ngOnInit(): void {
  }

  submitSetupForm() {
    let requestPayload = this.setup;
  }

  submitInstructionsForm() {
    let requestPayload = this.instructions;
  }

}
