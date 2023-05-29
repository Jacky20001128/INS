import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Booth } from 'src/app/modules/booths/booths.page'; // Import the Bulletin interface from the BulletinPage component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-booth',
  templateUrl: './update-booth.page.html',
  styleUrls: ['./update-booth.page.scss'],
})

export class UpdateBoothPage implements OnInit {
  boothId: string;
  booths: Booth;

  isLoading: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private afs: AngularFirestore,
    private changeDetectorRef: ChangeDetectorRef
  ) { }

  ngOnInit() {

    this.route.paramMap.subscribe((params) => {
      this.boothId = params.get('id');
      this.getBooth();
    });

  }

  getBooth() {

    this.afs
      .collection<Booth>('booths')
      .doc(this.boothId)
      .valueChanges()
      .subscribe((booth) => {
        this.booths = booth;
        this.changeDetectorRef.detectChanges(); // Trigger change detection manually
      });

  }

  updateBooth() {
    this.isLoading = true;

    setTimeout(() => {

      this.afs
        .collection<Booth>('booths')
        .doc(this.boothId)
        .update(this.booths)
        .then(() => {

          this.isLoading = false;
          this.router.navigate(['/booths']);
          
        });

    }, 12500);
  }

}
