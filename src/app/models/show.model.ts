import { Band } from './band.model';
import { Venue } from './venue.model';

export class Show {
  venue: Venue;
  bandList: Band[] = [new Band('The Heavy Hustle', 'Portland Oregon'), new Band('The Cabin Project', 'Portland, OR')];
  showDateYear: number;
  showDateDay: number;
  showDateMonth: number;
  showDateString: Date;
  showDateISOString: string;
  keyString: string;

  constructor(public showDate: Date) {
    this.showDate = new Date(showDate);
    this.showDate = new Date(this.showDate.getTime() + this.showDate.getTimezoneOffset() * 60 * 1000);
    this.showDateYear = this.showDate.getFullYear();
    this.showDateDay = this.showDate.getDate();
    this.showDateMonth = this.showDate.getMonth() + 1;
    this.showDateISOString = this.showDate.toISOString();
  }

  addVenue(newVenue: Venue) {
    this.venue = newVenue;
  }

  addBandToShow(bandToAdd: Band) {
    this.bandList.push(bandToAdd);
  }

}
