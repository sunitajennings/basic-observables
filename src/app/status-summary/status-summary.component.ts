import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Status } from '../models/status';
import { StatusPollerService } from '../services/status-poller.service';

@Component({
  selector: 'app-status-summary',
  templateUrl: './status-summary.component.html',
  styleUrls: ['./status-summary.component.css']
})
export class StatusSummaryComponent implements OnInit {
  status$:Observable<Status>;

  constructor(public statusService:StatusPollerService) { }

  ngOnInit() {
    this.status$ = this.statusService.fetchUpdatingStatus(3000);
  }

}
