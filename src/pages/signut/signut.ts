import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-signut',
  templateUrl: 'signut.html',
})
export class SignutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  signupUser() {
    console.log('Enviou o Cadastro com Sucesso!')
  }
}
