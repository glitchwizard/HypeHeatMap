import { Component, OnInit} from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { ShowService } from '../services/show.service';

@Component({
  selector: 'app-show-listing',
  templateUrl: './show-listing.component.html',
  styleUrls: ['./show-listing.component.css'],
  providers: [ShowService]
})
export class ShowListingComponent implements OnInit {
  showList: FirebaseListObservable<any[]>;

  constructor(private ShowService: ShowService) { }

  ngOnInit() {
    this.showList = this.ShowService.getShows();
  }

  getRandomHexColor() {
    const randomColorHex = Math.floor(Math.random() * 16777215).toString(16);
    return ('#' + randomColorHex);
  }
}
