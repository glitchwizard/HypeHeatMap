import { Component, OnInit} from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { ShowListingService } from '../services/show-listing.service';

@Component({
  selector: 'app-show-listing',
  templateUrl: './show-listing.component.html',
  styleUrls: ['./show-listing.component.css'],
  providers: [ShowListingService]
})
export class ShowListingComponent implements OnInit {
  showList: FirebaseListObservable<any[]>;

  constructor(private showListingService: ShowListingService) { }

  ngOnInit() {
    this.showList = this.showListingService.getShows();
  }

  getRandomHexColor() {
    const randomColorHex = Math.floor(Math.random() * 16777215).toString(16);
    return ('#' + randomColorHex);
  }
}
