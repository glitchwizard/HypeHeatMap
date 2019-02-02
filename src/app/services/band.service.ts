import { Injectable } from '@angular/core';
import { Band } from '../models/band.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Show } from '../models/show.model';

@Injectable({
  providedIn: 'root'
})
export class BandService {
  show: Show;
  band: Band;
  bands: FirebaseListObservable<any[]>;
  shows: FirebaseListObservable<any[]>;


  constructor(private database: AngularFireDatabase) {
    this.shows = database.list('shows');
    this.bands = database.list('bands');
  }

  getBands() {
    return this.bands;
  }

  addBand(newBand: Band) {
    this.bands.push(newBand);
  }

  getBandById(bandId: string) {
    return this.database.object(bandId);
  }

  updateBand(localUpdatedBand) {
    const bandEntryInFirebase = this.getBandById(localUpdatedBand.$key);
    bandEntryInFirebase.update({title: localUpdatedBand.title,
                                artist: localUpdatedBand.artist,
                                description: localUpdatedBand.description});
  }
}
