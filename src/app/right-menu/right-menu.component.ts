import { Component, Output, EventEmitter } from '@angular/core';
import { Band } from '../models/band.model';

@Component({
  selector: 'app-right-menu',
  templateUrl: './right-menu.component.html',
  styleUrls: ['./right-menu.component.css']
})
export class RightMenuComponent {
  @Output() sendBand = new EventEmitter();

  addNewBand = null;

  createNewBandToggle() {
    if (this.addNewBand) {
      this.addNewBand = null;
    } else {
      this.addNewBand = true;
    }
  }

  submitForm(bandName: string, bandLocation: string) {
    let newBand = new Band(bandName, bandLocation);
    console.log("SendBand about to fire off");
    this.sendBand.emit(newBand);
  }
}
