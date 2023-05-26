import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-bulletin',
  templateUrl: './create-bulletin.page.html',
  styleUrls: ['./create-bulletin.page.scss'],
})

export class CreateBulletinPage implements OnInit {

  isLoading: boolean = false;

  bulletin = {
    title: '',
    description: '',
    datetime: '',
    type: '',
    exhibitor: ''
  };


  constructor(
    private router: Router,
    private afs: AngularFirestore
  ) { }

  ngOnInit() {
    
  }

  createBulletin() {
    this.isLoading = true;

    setTimeout(() => {

      this.afs.collection('bulletins').add({

        title: this.bulletin.title,
        type: this.bulletin.type,
        description: this.bulletin.description,
        datetime: this.bulletin.datetime,
        exhibitor: this.bulletin.exhibitor

      }).then((docRef) => {

        const docId = docRef.id;
        return docRef.update({ id: docId });

      }).then(() => {

        this.router.navigate(['/bulletin']);

      });

    }, 12500);
  }
  
}
