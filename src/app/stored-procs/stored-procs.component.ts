import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Status } from '../models/status';
import { StatusPollerService } from '../services/status-poller.service';
@Component({
  selector: 'app-stored-procs',
  templateUrl: './stored-procs.component.html',
  styleUrls: ['./stored-procs.component.css']
})
export class StoredProcsComponent implements OnInit {
  status$: Observable<Status>;

  constructor(public statusService: StatusPollerService) {
  }

  ngOnInit() {
    this.status$ = this.statusService.fetchUpdatingStatus();
  }
}
