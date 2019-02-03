import { Component, OnInit} from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { ShowService } from '../services/show.service';
import { Show } from '../models/show.model';

@Component({
  selector: 'app-show-listing',
  templateUrl: './show-listing.component.html',
  styleUrls: ['./show-listing.component.css'],
  providers: [ShowService]
})
export class ShowListingComponent implements OnInit {
  showList: Show[];
  isBandListPopulated = null;


  constructor(private ShowService: ShowService) {
    
   }

  ngOnInit() {
    console.log('something');

        this.ShowService.getShows().subscribe(dataLastEmittedFromObserver => { this.showList = dataLastEmittedFromObserver;
        console.log(this.showList);
    });
    debugger;
    this.checkBandList();
    console.log("test123");
    console.log(this.isBandListPopulated);

    //WIP
    /*
    the goal right now is to try to get this thing to check to see whether the band list has anything in it for a show, and if it does, return true if the list is greater than zero items. It keeps returning as 'undefined' and I can't figure out how to get it to populate and THEN check.
    */
  }

  checkBandList() {
    if (this.showList.length | async > 0) {
      this.isBandListPopulated = 'yes';
    }
  }

  getRandomHexColor() {
    const randomColorHex = Math.floor(Math.random() * 16777215).toString(16);
    return ('#' + randomColorHex);
  }
}
