import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Navigation', url: '/maps', icon: 'navigate' },
    { title: 'Bulletin', url: '/bulletin', icon: 'megaphone' },
    { title: 'Booth', url: '/booths', icon: 'trail-sign' },
    { title: 'Event', url: '/events', icon: 'calendar' },
    // { title: 'Attendee', url: '/attendee', icon: 'archive' },
    { title: 'Sign Out', url: '/landing', icon: 'log-out' },
  ];
  public labels = [];
  constructor() {}
}
