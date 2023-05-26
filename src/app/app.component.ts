import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/landing', icon: 'home' },
    { title: 'Bulletin', url: '/bulletin', icon: 'calendar' },
    // { title: 'Booth', url: '/booths', icon: 'heart' },
    { title: 'Event', url: '/events', icon: 'speedometer' },
    // { title: 'Attendee', url: '/attendee', icon: 'archive' },
    { title: 'Sign Out', url: '/landing', icon: 'log-out' },
  ];
  public labels = [];
  constructor() {}
}
