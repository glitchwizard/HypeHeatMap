import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Band } from '../models/band.model';
import { ShowListingService } from '../services/show-listing.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-right-menu',
  templateUrl: './right-menu.component.html',
  styleUrls: ['./right-menu.component.css'],
  providers: [ShowListingService]
})
export class RightMenuComponent implements OnInit {
  bands: FirebaseListObservable<any[]>;

  addNewBand = null;

  constructor(private showListingService: ShowListingService) {}

  ngOnInit() {
    this.bands = this.showListingService.getBands();
  }

  createNewBandToggle() {
    if (this.addNewBand) {
      this.addNewBand = null;
    } else {
      this.addNewBand = true;
    }
  }

  submitForm(bandName: string, bandorigin: string) {
    const newBand = new Band(bandName, bandorigin);
    this.showListingService.addBand(newBand);
  }
}
