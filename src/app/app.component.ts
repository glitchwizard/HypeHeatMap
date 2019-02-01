import { Component } from '@angular/core';
import { Band } from './models/band.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HypeHeatMap';

  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDay();
  year: number = this.currentTime.getFullYear();

  addBand(newBand: Band) {
    this.masterBandList.push(newBand);
  }
}
