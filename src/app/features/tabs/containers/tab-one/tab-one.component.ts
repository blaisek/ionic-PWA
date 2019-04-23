import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http/http.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ModalController } from '@ionic/angular';
import { ModalOptions } from '@ionic/core';
import { ModalComponent } from '../../../../shared/components';

@Component({
  selector: 'app-tab-one',
  templateUrl: './tab-one.component.html',
  styleUrls: ['./tab-one.component.scss'],
})
export class TabOneComponent implements OnInit {

  public data$: Observable<any>;

  constructor(
    private _httpXXX: HttpService,
    private _modalCtrl: ModalController
    ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.data$ = this._httpXXX.loadData('https://jsonplaceholder.typicode.com/posts').pipe(
      map(res => res || [])
    );
  }

  async edit(item: any) {
    const ops: ModalOptions = {
      component: ModalComponent,
      componentProps: {data: item}
    };
    const modal = await this._modalCtrl.create(ops);
    await modal.present();
    modal.onDidDismiss()
         .then(data => console.log('data from modal-> ', data));
  }
}
