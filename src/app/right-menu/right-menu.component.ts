import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Band } from '../models/band.model';
import { ShowListingService } from '../services/show-listing.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Show } from '../models/show.model';
import { BandListingService } from '../services/band-listing.service';

@Component({
  selector: 'app-right-menu',
  templateUrl: './right-menu.component.html',
  styleUrls: ['./right-menu.component.css'],
  providers: [ShowListingService, BandListingService]
})
export class RightMenuComponent implements OnInit {
  shows: FirebaseListObservable<any[]>;

  addNewShow = null;

  constructor(private showListingService: ShowListingService, private bandListingService: BandListingService) {}

  ngOnInit() {
    this.shows = this.showListingService.getShows();
  }

  createNewShowToggle() {
    if (this.addNewShow) {
      this.addNewShow = null;
    } else {
      this.addNewShow = true;
    }
  }

  submitForm(bandName: string, bandorigin: string) {
    const newBand = new Band(bandName, bandorigin);
    const formBandList: Band[] = [newBand];
    const newShow = new Show(formBandList);
    this.showListingService.addShow(newShow);
    this.bandListingService.addBand(newBand);
  }
}
