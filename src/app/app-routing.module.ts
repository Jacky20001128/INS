import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'maps',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'bulletin',
    loadChildren: () => import('./modules/bulletin/bulletin.module').then( m => m.BulletinPageModule)
  },
  {
    path: 'bulletin/update-bulletin/:id',
    loadChildren: () => import('./modules/bulletin/update-bulletin/update-bulletin.module').then(m => m.UpdateBulletinPageModule)
  },
  {
    path: 'booths',
    loadChildren: () => import('./modules/booths/booths.module').then( m => m.BoothsPageModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./modules/events/events.module').then( m => m.EventsPageModule)
  },
  {
    path: 'events/update-event/:id',
    loadChildren: () => import('./modules/events/update-event/update-event.module').then(m => m.UpdateEventPageModule)
  },
  {
    path: 'attendee',
    loadChildren: () => import('./modules/attendee/attendee.module').then( m => m.AttendeePageModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./modules/landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./modules/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./modules/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'modules',
    loadChildren: () => import('./modules/modules.module').then( m => m.ModulesPageModule)
  },
  {
    path: 'maps',
    loadChildren: () => import('./modules/maps/maps.module').then( m => m.MapsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}