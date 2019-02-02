import { Band } from './band.model';
import { Venue } from './venue.model';

export class Show {
  venue: Venue;
  bandList: Band[];
  showdate: Date;

  constructor(public showDate: Date) {}

  addVenue(newVenue: Venue) {
    this.venue = newVenue;
  }

  addBandToShow(bandToAdd: Band) {
    this.bandList.push(bandToAdd);
  }
}
