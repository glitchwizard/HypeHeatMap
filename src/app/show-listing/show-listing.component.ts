import { Component, Input , OnInit} from '@angular/core';
import { Band } from '../models/band.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { ShowListingService } from '../show-listing.service';

@Component({
  selector: 'app-show-listing',
  templateUrl: './show-listing.component.html',
  styleUrls: ['./show-listing.component.css'],
  providers: [ShowListingService]
})
export class ShowListingComponent implements OnInit {
  @Input() childBandList: Band[];
  bandList: FirebaseListObservable<any[]>;

  constructor(private showListingService: ShowListingService) { }

  ngOnInit() {
    this.bandList = this.showListingService.getBands();
  }

  getRandomHexColor() {
    const randomColorHex = Math.floor(Math.random() * 16777215).toString(16);
    return ('#' + randomColorHex);
  }
}
