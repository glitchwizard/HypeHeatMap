import { Band } from './band.model';

export class Show {
  venue: string;
  bandList: Band[];

  constructor(public venueName: string) {}
}