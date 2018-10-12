import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController } from 'ionic-angular';
import { AddItemPage } from '../add-item/add-item';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public Items = [];

   constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }
   ionViewDidLoad(){
  }

   addItem(){
     let addModal = this.modalCtrl.create(AddItemPage);
     addModal.onDidDismiss((item) => {
       if(item){
         this.saveItem(item);
       }
     });
     addModal.present();
   }

   saveItem(item){
     this.Items.push(item);
   }

   delete(item){
     let index = this.Items.indexOf(item, 0);
       if(index > -1){
         this.Items.splice(index, 1);
       }
    }
}
