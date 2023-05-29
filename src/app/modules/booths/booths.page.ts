import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

export interface Booth {
  id: string;
  name: string,
  description: string,
  type: string,
  location: string,
  logo: string,
  email: string,
  contact: string,
  website: string,
  product: string,
  from_time: string,
  to_time: string
}

@Component({
  selector: 'app-booths',
  templateUrl: './booths.page.html',
  styleUrls: ['./booths.page.scss'],
})

export class BoothsPage implements OnInit {

  private boothCollection: AngularFirestoreCollection<Booth>;
  booth$: Observable<Booth[]>;
  isLoading: boolean = false;

  constructor(
    private nav: NavController,
    private firestore: AngularFirestore
  ) { }

  ngOnInit(): void {
    this.boothCollection = this.firestore.collection<Booth>('booths');
    this.booth$ = this.boothCollection.valueChanges();
  }

  deleteBooth(documentId: string): void {
    this.isLoading = true; // Set loading state to true
  
    setTimeout(() => {
      const docRef = this.firestore.collection('booths').doc(documentId);
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

  sanitizeImageUrl(imageUrl: string): string {
    if (imageUrl.includes('C:\\fakepath\\')) {
      return 'assets/images/' + imageUrl.substr(imageUrl.lastIndexOf('\\') + 1);
    } else {
      return imageUrl;
    }
  }
  

}
