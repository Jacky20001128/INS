import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-booth',
  templateUrl: './create-booth.page.html',
  styleUrls: ['./create-booth.page.scss'],
})

export class CreateBoothPage implements OnInit {

  isLoading: boolean = false;

  booths = {
    name: '',
    description: '',
    type: '',
    location: '',
    logo: '',
    email: '',
    contact: '',
    website: '',
    product: '',
    from_time: '',
    to_time: ''
  };

  constructor(
    private router: Router,
    private afs: AngularFirestore
  ) { }

  ngOnInit() {
    
  }

  createBooth() {
    this.isLoading = true;

    setTimeout(() => {

        this.afs.collection('booths').add({

          name: this.booths.name,
          description: this.booths.description,
          type: this.booths.type,
          location: this.booths.location,
          logo: this.booths.logo,
          email: this.booths.email,
          contact: this.booths.contact,
          website: this.booths.website,
          product: this.booths.product,
          from_time: this.booths.from_time,
          to_time: this.booths.to_time

        }).then((docRef) => {

          const docId = docRef.id;
          return docRef.update({ id: docId });

        }).then(() => {

          this.router.navigate(['/booths']);

        })

    }, 12500);
  }

}

