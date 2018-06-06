import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {
  
  //string, number, any
  //por padrão as variáveis são públicas

  public nome_usuario: string = "Isaac Borges";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public somaDoisNumero(num1: number, num2: number): void{
    alert(num1 + num2);
  }

  //Executa quando a página tiver sido carregada
  ionViewDidLoad() {
    //this.somaDoisNumero(10, 99);
    console.log('ionViewDidLoad FeedPage');
  }

}
