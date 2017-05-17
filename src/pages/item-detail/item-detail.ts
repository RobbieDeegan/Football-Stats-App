import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {

  title;
  location;

  constructor(public navParams: NavParams){

  }

  ionViewDidLoad() {
    this.title = this.navParams.get('item').title;
    this.location = this.navParams.get('item').location;
  }

}