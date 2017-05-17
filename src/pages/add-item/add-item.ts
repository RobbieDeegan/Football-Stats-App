import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html'
})
export class AddItemPage {

	title;
	location;

	constructor(public nav: NavController, public view: ViewController) {

	}

	saveItem(){
		let newItem = {
		  title: this.title,
		  location: this.location
		};

		this.view.dismiss(newItem);

	}

	close(){
		this.view.dismiss();
	}
}