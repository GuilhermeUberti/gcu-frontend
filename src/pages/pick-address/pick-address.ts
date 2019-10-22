import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EnderecoDTO } from '../../models/endereco.dto';

@IonicPage()
@Component({
  selector: 'page-pick-address',
  templateUrl: 'pick-address.html',
})
export class PickAddressPage {

  items : EnderecoDTO[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.items = [
      {
        id : "1",
        logradouro : "Rua Jéssia Ribeiro",
        numero : "233",
        complemento : "Apto 301",
        bairro : "Santa Mônica",
        cep : "88037145",
        cidade : {
          id : "1",
          nome : "Uberlândia",
          estado : {
            id : "1",
            nome : "Minas Gerais"
          }
        }
      },
      {
        id : "2",
        logradouro : "Rua Izabela Ribeiro",
        numero : "1282",
        complemento : "Casa",
        bairro : "Santa Rabetinha",
        cep : "88030100",
        cidade : {
          id : "3",
          nome : "São Paulo",
          estado : {
            id : "2",
            nome : "São Paulo"
          }
        }
      }      
    ];
  }
}
