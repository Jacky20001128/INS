import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Bulletin } from 'src/app/modules/bulletin/bulletin.page'; // Import the Bulletin interface from the BulletinPage component

@Component({
  selector: 'app-update-bulletin',
  templateUrl: './update-bulletin.page.html',
  styleUrls: ['./update-bulletin.page.scss'],
})

export class UpdateBulletinPage implements OnInit {
  bulletinId: string;
  bulletin: Bulletin;

  isLoading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private afs: AngularFirestore,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit() {

    this.route.paramMap.subscribe((params) => {
      this.bulletinId = params.get('id');
      this.getBulletin();
    });

  }

  getBulletin() {

    this.afs
      .collection<Bulletin>('bulletins')
      .doc(this.bulletinId)
      .valueChanges()
      .subscribe((bulletin) => {
        this.bulletin = bulletin;
        this.changeDetectorRef.detectChanges(); // Trigger change detection manually
      });

  }

  updateBulletin() {
    this.isLoading = true;

    setTimeout(() => {

      this.afs
        .collection<Bulletin>('bulletins')
        .doc(this.bulletinId)
        .update(this.bulletin)
        .then(() => {

          this.isLoading = false;
          this.router.navigate(['/bulletin']);
          
        });

    }, 12500);
  }
}
