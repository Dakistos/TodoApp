import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage {

  title;
  about;

  constructor(public navCtrl: NavController, public view: ViewController) {
  }

  saveItem(){

    if(this.title !== undefined){

      this.view.dismiss({
        title: this.title,
        about: this.about
      })

    }else{
      this.view.dismiss()
    }
  }

  close(){
    this.view.dismiss()
  }

}
