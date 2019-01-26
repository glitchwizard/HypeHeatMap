import { Component } from '@angular/core';

@Component({
  selector: 'app-right-menu',
  templateUrl: './right-menu.component.html',
  styleUrls: ['./right-menu.component.css']
})
export class RightMenuComponent {
  addNewBand = null;

  createNewBandToggle() {
    
    if (this.addNewBand) {
      this.addNewBand = null;
    } else {
      this.addNewBand = true;
    }
  }
}
