import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ShowService } from '../services/show.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { BandService } from '../services/band.service';
import { Venue } from '../models/venue.model';
import { VenueService } from '../services/venue.service';
import { Show } from '../models/show.model';

@Component({
  selector: 'app-right-menu',
  templateUrl: './right-menu.component.html',
  styleUrls: ['./right-menu.component.css'],
  providers: [ShowService, BandService]
})
export class RightMenuComponent implements OnInit {
  shows: FirebaseListObservable<any[]>;

  addNewShow = null;
  addNewVenue = null;
  addNewBand = null;

  constructor(private venueService: VenueService, private showService: ShowService) {}

  ngOnInit() {
    this.shows = this.venueService.getVenues();
  }

  createNewBandToggle() {
    if (this.addNewBand) {
      this.addNewBand = null;
    } else {
      this.addNewBand = true;
    }
  }

  createNewVenueToggle() {
    if (this.addNewVenue) {
      this.addNewVenue = null;
    } else {
      this.addNewVenue = true;
    }
  }

  createNewShowToggle() {
    if (this.addNewShow) {
      this.addNewShow = null;
    } else {
      this.addNewShow = true;
    }
  }

  submitVenueForm(venueName: string) {
    const newVenue: Venue = new Venue(venueName);
    this.venueService.addVenue(newVenue);
  }

  submitShowForm(showDate: Date) {
    const newShow: Show = new Show(showDate);
    debugger;
    this.showService.addShow(newShow);
  }
}
