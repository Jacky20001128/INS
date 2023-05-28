import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

export interface Bulletin {
  id: string;
  title: string;
  description: string;
  type: string;
  datetime: string;
  exhibitor: string;
}

@Component({
  selector: 'app-booths',
  templateUrl: './booths.page.html',
  styleUrls: ['./booths.page.scss'],
})

export class BoothsPage implements OnInit {

  private bulletinsCollection: AngularFirestoreCollection<Bulletin>;
  bulletins$: Observable<Bulletin[]>;
  isLoading: boolean = false;

  constructor(
    private nav: NavController,
    private router: Router,
    private firestore: AngularFirestore
  ) { }

  ngOnInit(): void {
    this.bulletinsCollection = this.firestore.collection<Bulletin>('bulletins');
    this.bulletins$ = this.bulletinsCollection.valueChanges();
  }

  deleteBulletin(documentId: string): void {
    this.isLoading = true; // Set loading state to true
  
    setTimeout(() => {
      const docRef = this.firestore.collection('bulletins').doc(documentId);
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
    this.nav.navigateForward(['booths', 'create-booth'])
  }

  navigateToUpdate(documentId: string) {
    this.nav.navigateForward(['booths', 'update-booth', documentId]);

    console.log('successful');
  }

}
