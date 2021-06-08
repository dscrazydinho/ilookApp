import { Component } from '@angular/core';
import { IPost } from '../models/IPosts.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public post: IPost;

  constructor(
    private postService: UsersService
  ) {
    this.postService.buscarPost().subscribe(dados => {
      console.log(dados);
      this.post = dados;
    });
  }



}
