import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Booth } from 'src/app/modules/booths/booths.page';

@Component({
  selector: 'app-booth-detail',
  templateUrl: './booth-detail.page.html',
  styleUrls: ['./booth-detail.page.scss'],
})
export class BoothDetailPage implements OnInit {
  boothId: string;
  booths: Booth;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private afs: AngularFirestore,
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
      });

  }

  sanitizeImageUrl(imageUrl: string): string {
    if (imageUrl.includes('C:\\fakepath\\')) {
      return 'assets/images/' + imageUrl.substr(imageUrl.lastIndexOf('\\') + 1);
    } else {
      return imageUrl;
    }
  }

}
