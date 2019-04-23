import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  item: any;
  constructor(
    private _navparams: NavParams,
    private _modalCtrl: ModalController
    ) { }

  ngOnInit() {
    const { data: item = null} = this._navparams.data;
    console.log(item);
    this.item = item;
  }

  close() {
    this._modalCtrl.dismiss(this.item);
  }
}
