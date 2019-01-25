import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Band } from '../models/band.model';

@Component({
  selector: 'app-show-listing',
  templateUrl: './show-listing.component.html',
  styleUrls: ['./show-listing.component.css']
})
export class ShowListingComponent {
@Input() childBandList: Band[];

  constructor(){
    
  }


}
