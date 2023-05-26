import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.page.html',
  styleUrls: ['./create-event.page.scss'],
})

export class CreateEventPage implements OnInit {

  isLoading: boolean = false;

  events = {
    title: '',
    type: '',
    description: '',
    organized: '',
    location: '',
    datetime: '',
    speaker: ''
  };


  constructor(
    private router: Router,
    private afs: AngularFirestore
  ) { }

  ngOnInit() {
    
  }

  createEvents() {
    this.isLoading = true;

    setTimeout(() => {

      this.afs.collection('events').add({

        title: this.events.title,
        type: this.events.type,
        description: this.events.description,
        organized: this.events.organized,
        location: this.events.location,
        datetime: this.events.datetime,
        speaker: this.events.speaker

      }).then((docRef) => {

        const docId = docRef.id;
        return docRef.update({ id: docId });

      }).then(() => {

        this.router.navigate(['/events']);

      });

    }, 12500);
  }
}
