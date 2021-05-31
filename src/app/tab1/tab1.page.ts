import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { IProduto } from '../models/IProduto.model';
import { DadosService } from '../services/dados.service';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  titulo = 'Ilook App';

  listaFilmes: IProduto[] = [
    {
      nome: 'Mortal Kombat (2021)',
      data: '15/04/2021',
      duracao: '1h 50m',
      classificacao: 76,
      capa: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ijvC2w2yANsfgLT3LMu2zFr0fxh.jpg',
      generos: [
        'Ação',
        'Fantasia',
        'Aventura'
      ],
      pagina: '/mortal-kombat'
    },
    {
      nome: 'Sem Remorso (2021)',
      data: '30/04/2021',
      duracao: '1h 50m',
      classificacao: 73,
      capa: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uHEZ4ZMziIjlAgCTQAEh9ROvtj0.jpg',
      generos: [
        'Ação',
        'Thriller',
        'Guerra'
      ],
      pagina: '/sem-remorso'
    }
  ];

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public route: Router) { }

  exibirFilme(filme: IProduto) {
    this.dadosService.guardarDados('filme', filme);
    this.route.navigateByUrl('/dados-filme');
  }

  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      cssClass: 'color:danger',
      header: 'Alerta!',
      message: 'Deseja realmente favoritar?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Sim, favoritar',
          handler: () => {
            this.apresentarToast();
          }
        }
      ]
    });

    await alert.present();
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos.',
      duration: 2000,
      color: 'success'
    });
    toast.present();
  }

}
