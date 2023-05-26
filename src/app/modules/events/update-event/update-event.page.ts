import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Events } from 'src/app/modules/events/events.page';

@Component({
  selector: 'app-update-event',
  templateUrl: './update-event.page.html',
  styleUrls: ['./update-event.page.scss'],
})
export class UpdateEventPage implements OnInit {
  eventId: string;
  events: Events;

  isLoading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private afs: AngularFirestore,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.eventId = params.get('id');
      this.getEvent();
    });
  }

  getEvent() {
    this.afs
      .collection<Events>('events')
      .doc(this.eventId)
      .valueChanges()
      .subscribe((event) => {
        if (event) {
          this.events = event as Events;
          this.changeDetectorRef.detectChanges(); // Trigger change detection manually
        }
      });
  }

  updateEvent() {
    this.isLoading = true;

    this.afs
      .collection<Events>('events')
      .doc(this.eventId)
      .update(this.events)
      .then(() => {
        this.isLoading = false;
        this.router.navigate(['/events']);
      });
  }
}
