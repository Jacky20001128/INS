import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { AlertController, NavController,LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

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

  ValidationFormUSer : FormGroup;
  loading:any;

  constructor(
    private formbuilder: FormBuilder,
    private authService: AuthService,
    private navCtr: NavController,
    private router: Router,
    private alertCtrl: AlertController,
    public loadingCtrl : LoadingController
  ) { this.loading = this.loadingCtrl }

  ngOnInit() {
    this.ValidationFormUSer = this.formbuilder.group({
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

  registerUser(value) {
    this.showalert();
    
    try{
      this.authService.userRegistration(value).then( response => {

        console.log(response);
      
        if(response.user) {
          // response.updateProfile({
          //   email: value.email,
          // });
          
          // this.preference.store(value.phone,'userPhoneNumber');
          this.loading.dismiss();
          this.router.navigate(['login']);
        }
    }, error => {

      // this.loading.dismiss();
      // this.errorLoading(error.message);
    })
  }catch(erro) {
    console.log(erro)
  }
}

async errorLoading(message: any){
  const loading = await this.alertCtrl.create({
    header:"Error Registering",
    message:message,
    buttons:[{
      text:'ok',
      handler: ()=>{
      this.navCtr.navigateBack(['signup'])
    }
    }]
  })
   await loading.present();
}

async showalert() {
  var load = await this.loadingCtrl.create({
    message: "please wait....",
  })
  load.present();
}

}
