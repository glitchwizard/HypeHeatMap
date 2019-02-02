import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ShowService } from '../services/show.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { BandService } from '../services/band.service';
import { Venue } from '../models/venue.model';
import { VenueService } from '../services/venue.service';

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

  constructor(private venueService: VenueService) {}

  ngOnInit() {
    this.shows = this.venueService.getVenues();
  }

  createNewShowToggle() {
    if (this.addNewShow) {
      this.addNewShow = null;
    } else {
      this.addNewShow = true;
    }
  }
  createNewVenueToggle() {
    if (this.addNewVenue) {
      this.addNewVenue = null;
    } else {
      this.addNewVenue = true;
    }
  }

  createNewBandToggle() {
    if (this.addNewBand) {
      this.addNewBand = null;
    } else {
      this.addNewBand = true;
    }
  }

  submitForm(venueName: string) {
    const newVenue: Venue = new Venue(venueName);
    // const formBandList: Band[] = [newBand];
    // const newShow = new Show(formBandList);
    // this.showService.addShow(newShow);
    // this.bandService.addBand(newBand);
    this.venueService.addVenue(newVenue);
  }
}
