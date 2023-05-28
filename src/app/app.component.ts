import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  currentUserEmail: string | null;

  public appPages = [
    { title: 'Navigation', url: '/maps', icon: 'navigate' },
    { title: 'Bulletin', url: '/bulletin', icon: 'megaphone' },
    { title: 'Booth', url: '/booths', icon: 'trail-sign' },
    { title: 'Event', url: '/events', icon: 'calendar' },
    // { title: 'Attendee', url: '/attendee', icon: 'archive' },
    { title: 'Sign Out', url: '/landing', icon: 'log-out' },
  ];

  public labels = [];

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) {}

  ngOnInit() {
    this.afAuth.onAuthStateChanged((user) => {
      this.currentUserEmail = user?.email || null;
    });
  }

  async signOut() {
    try {
      await this.afAuth.signOut();
      this.router.navigate(['/landing']); // Redirect to the landing page or any other desired page
    } catch (error) {
      console.log(error);
    }
  }
  
}
