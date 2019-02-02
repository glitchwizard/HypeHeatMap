import { Injectable } from '@angular/core';
import { Band } from '../models/band.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Show } from '../models/show.model';

@Injectable({
  providedIn: 'root'
})
export class ShowService {
  show: Show;
  band: Band;
  bands: FirebaseListObservable<any[]>;
  shows: FirebaseListObservable<any[]>;


  constructor(private database: AngularFireDatabase) {
    this.shows = database.list('shows');
    this.bands = database.list('bands');
  }

  getShows() {
    return this.shows;
  }

  addShow(newShow: Show) {
    this.shows.push(newShow);
  }

  getShowById(showId: string) {
    return this.database.object(showId);
  }

  updateShow(localUpdatedShow) {
    const showEntryInFirebase = this.getShowById(localUpdatedShow.$key);
    showEntryInFirebase.update({title: localUpdatedShow.title,
                                artist: localUpdatedShow.artist,
                                description: localUpdatedShow.description});
  }
}
