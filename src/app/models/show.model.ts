import { Band } from './band.model';
import { Venue } from './venue.model';

export class Show {
  venue: Venue;
  bandList: Band[];
  showDateYear: number;
  showDateDay: number;
  showDateMonth: number;

  constructor(public showDate: Date) {
    this.showDateYear = this.showDate.getFullYear();
    this.showDateDay = this.showDate.getDay();
    this.showDateMonth = this.showDate.getMonth() + 1;
  }

  addVenue(newVenue: Venue) {
    this.venue = newVenue;
  }

  addBandToShow(bandToAdd: Band) {
    this.bandList.push(bandToAdd);
  }
}
