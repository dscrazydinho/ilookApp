import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { IPost } from '../models/IPosts.model';
import { IUser } from '../models/IUser.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiURL = 'https://jsonplaceholder.typicode.com/users/';

  private postURL = 'https://jsonplaceholder.typicode.com/posts/';

  constructor(private http: HttpClient, public toastController: ToastController) { }

  buscaUsuario(id: number): Observable<IUser> {
    const url = `${this.apiURL}${id}`;

    return this.http.get<IUser>(url).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }

  buscarPost(): Observable<IPost>{
    const url = `${this.postURL}`;

    return this.http.get<IPost>(url).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }

  async exibirErro(erro) {
    const toast = await this.toastController.create({
      message: 'Erro ao consultar a API',
      duration: 2000,
      color: 'danger',
      position: 'middle'
    });
    toast.present();
    return null;
  }


}
