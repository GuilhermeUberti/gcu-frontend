import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignutPage } from './signut';
import { CidadeService } from '../../services/domain/cidade.service';
import { EstadoService } from '../../services/domain/estado.service ';

@NgModule({
  declarations: [
    SignutPage,
  ],
  imports: [
    IonicPageModule.forChild(SignutPage),
  ],
  providers: [
    CidadeService,
    EstadoService
  ]
})
export class SignutPageModule {}
