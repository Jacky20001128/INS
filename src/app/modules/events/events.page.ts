import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

export interface Events {
  id: string;
  title: string;
  type: string;
  description: string;
  organized: string;
  location: string;
  datetime: string;
  speaker: string;
}

@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})

export class EventsPage implements OnInit {

  private eventsCollection: AngularFirestoreCollection<Events>;
  events$: Observable<Events[]>;
  isLoading: boolean = false;

  constructor(
    private nav: NavController,
    private firestore: AngularFirestore
  ) { }

  ngOnInit(): void {
    this.eventsCollection = this.firestore.collection<Events>('events');
    this.events$ = this.eventsCollection.valueChanges();
  }

  deleteEvent(documentId: string): void {
    this.isLoading = true; // Set loading state to true
  
    setTimeout(() => {
      const docRef = this.firestore.collection('events').doc(documentId);
      docRef.delete()
        .then(() => {
          console.log('Document successfully deleted!');
          this.isLoading = false; // Set loading state to false after deletion`
        })
        .catch((error) => {
          console.error('Error removing document: ', error);
          this.isLoading = false; // Set loading state to false in case of error
        });
    }, 12500); // Set the desired delay in milliseconds (e.g., 2000ms for 2 seconds)
  }  

  PathtoCreate() {
    this.nav.navigateForward(['events', 'create-event'])
  }

  navigateToUpdate(documentId: string) {
    this.nav.navigateForward(['events', 'update-event', documentId]);

    console.log('successful');
  }
}
