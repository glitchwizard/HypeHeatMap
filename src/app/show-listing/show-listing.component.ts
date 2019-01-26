import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Band } from '../models/band.model';
import { removeDebugNodeFromIndex } from '@angular/core/src/debug/debug_node';

@Component({
  selector: 'app-show-listing',
  templateUrl: './show-listing.component.html',
  styleUrls: ['./show-listing.component.css']
})
export class ShowListingComponent {
@Input() childBandList: Band[];

  constructor(){

  }

  setBlockColor(){
    debugger;
    let randomColorHex = this.randomColorHexGen();
    return ("#" + randomColorHex);
  }

  randomColorHexGen(){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    return (randomColor);
  }
  
}
