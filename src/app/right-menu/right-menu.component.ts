import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Band } from '../models/band.model';
import { ShowListingService } from '../show-listing.service';

@Component({
  selector: 'app-right-menu',
  templateUrl: './right-menu.component.html',
  styleUrls: ['./right-menu.component.css'],
  providers: [ShowListingService]
})
export class RightMenuComponent implements OnInit {
  bands: Band[];

  addNewBand = null;

  constructor(private showListingService: ShowListingService) {}

  ngOnInit(){
    this.bands = this.showListingService.getBands();
  }

  createNewBandToggle() {
    if (this.addNewBand) {
      this.addNewBand = null;
    } else {
      this.addNewBand = true;
    }
  }

  submitForm(bandName: string, bandLocation: string) {
    const newBand = new Band(bandName, bandLocation);
    this.showListingService.addBand(newBand);
  }
}
