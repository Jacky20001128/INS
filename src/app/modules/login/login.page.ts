import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
// import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  validationMessages = {
    email: [
      {
        type: 'required',
        message:"Email is required"
      },
      {
        type:"pattern", 
        message:"Please enter a valid email address"
      }
    ],
    password: [
      {
        type: "required", 
        message: "Password is required"
      },
      {
        type:"minlength", 
        message: "Password must be at least 12 character"
      },
      {
        type:"pattern", 
        message: "Password must contain at least one uppercase letter, one lowercase letter, and one number."
      }
    ]
  }

  validationFormUser: FormGroup;

  constructor(
    public formbuilder: FormBuilder, 
    public authservice: AuthService,
    private router: Router, 
    // private firestore: AngularFirestore, 
    private nav: NavController,
  ) { }

  ngOnInit() {
    this.validationFormUser = this.formbuilder.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(12),
        Validators.pattern('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$')
      ]))
    })
  }

  LoginUser(value: any){
    console.log("Am logged in");
    try{
       this.authservice.loginFireauth(value).then( resp =>{
        console.log(resp);
        this.router.navigate(['maps'])
      })
    }catch(err){
      console.log(err);
    }
  }

  registerUser() { 
    this.nav.navigateForward(['signup'])
  }

}
