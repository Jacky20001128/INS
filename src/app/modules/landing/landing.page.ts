import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {Facebook, FacebookLoginResponse} from '@ionic-native/facebook/ngx';
// import {firebaseAuth} from '../../../environments/authconfig';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  constructor(private nav: NavController) { }

  ngOnInit() {
  }

  gotoLoginpage() {
    this.nav.navigateForward(['login'])
  }

  registerUser() { 
    this.nav.navigateForward(['signup'])
  }

  loginwithFacebook(){

  }

}
