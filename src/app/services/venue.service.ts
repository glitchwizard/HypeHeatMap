import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Venue } from '../models/venue.model';

@Injectable({
  providedIn: 'root'
})
export class VenueService {
  venues: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.venues = database.list('venues');
  }

  getVenues() {
    return this.venues;
  }

  addVenue(newVenue: Venue) {
    this.venues.push(newVenue);
  }

  getVenueById(venueId: string) {
    return this.database.object(venueId);
  }

  updateVenue(localUpdatedVenue) {
    const venueEntryInFirebase = this.getVenueById(localUpdatedVenue.$key);
    venueEntryInFirebase.update({title: localUpdatedVenue.title,
                                artist: localUpdatedVenue.artist,
                                description: localUpdatedVenue.description});
  }
}
