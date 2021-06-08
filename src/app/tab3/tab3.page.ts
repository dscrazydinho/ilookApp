import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from '../models/IUser.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public user: IUser;

  private id = 1;

  constructor(
    private route: Router,
    private userService: UsersService
  ) {
    this.exibirUser(this.id);
  }


  exibirUser(id: number) {
    this.userService.buscaUsuario(id).subscribe(dados => {
      console.log(dados);
      this.user = dados;
    });
  }

}
