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
  showList: FirebaseListObservable<any[]>;
  showListWithObjects: Show[];


  constructor(private ShowService: ShowService) { }

  ngOnInit() {
    this.showList = this.ShowService.getShows();
    console.log('showlist: ');
    console.log(this.showList);

    console.log("Data last emitted from observer: ");
    
    this.ShowService.getShows().subscribe(dataLastEmittedFromObserver => { this.showListWithObjects = dataLastEmittedFromObserver;
    console.log(this.showListWithObjects);
    });

  }



  getRandomHexColor() {
    const randomColorHex = Math.floor(Math.random() * 16777215).toString(16);
    return ('#' + randomColorHex);
  }
}
