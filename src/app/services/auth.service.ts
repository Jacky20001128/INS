import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
// import { GooglePlus } from '@ionic-native/google-plus/ngx';

// export  interface UserPro {
//   username: string;
//   uid: string;
// }

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private user: UserPro;

  constructor(
    public auth: AngularFireAuth,
    // private googleplus: GooglePlus
  ) { }

  loginFireauth(value: { email: string; password: string; }) {
    return new Promise<any> ( (resolve, reject)=>{
      firebase.auth().signInWithEmailAndPassword(value.email, value.password).then(
        res => resolve(res),
        error => reject(error)
      )
    })
  }

  userRegistration(value: { email: string; password: string; }){
    return new Promise<any> ( (resolve, reject)=>{
      firebase.auth().createUserWithEmailAndPassword(value.email,value.password).then(
        res => resolve(res),
        error => reject(error)
      )
    })
  }
}
