import { Component, Input } from '@angular/core';
import { Band } from '../models/band.model';

@Component({
  selector: 'app-show-listing',
  templateUrl: './show-listing.component.html',
  styleUrls: ['./show-listing.component.css']
})
export class ShowListingComponent {
@Input() childBandList: Band[];

  setBlockColor() {
    const randomColorHex = Math.floor(Math.random() * 16777215).toString(16);
    return ('#' + randomColorHex);
  }

}
