import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { exhaustMap, share } from 'rxjs/operators';
import { Status } from '../models/status';
import { StatusService } from './status.service';

@Injectable({
  providedIn: 'root'
})
export class StatusPollerService {
  statusStream$: Observable<Status>;

  constructor(public statusService:StatusService) { }

  fetchUpdatingStatus(interval?: number): Observable<Status> {
    if (!interval) interval = 5000;
    if (!this.statusStream$) {
      this.statusStream$ =  timer(0,interval).pipe(
        exhaustMap(_ => this.statusService.fetchStatus()),
        share()
      );
    }
    return this.statusStream$;
  }
}
