import { Component, OnInit } from '@angular/core';
import { Capacitor, Plugins, GeolocationPosition, GeolocationOptions } from '@capacitor/core';
import { LoadingController } from '@ionic/angular';
const { Geolocation, Toast } = Plugins;

@Component({
  selector: 'app-tab-three',
  templateUrl: './tab-three.component.html',
  styleUrls: ['./tab-three.component.scss'],
})
export class TabThreeComponent implements OnInit {

  title = 'Page 3';
  position: GeolocationPosition;
  loading: HTMLIonLoadingElement;
  constructor(
    private _loadingCtrl: LoadingController
  ) { }

  async ngOnInit() {
    // open waiting spinner
    this.loading = await this._loadingCtrl.create({
      message: 'watching position...'
    });
    await this.loading.present();
    this.getCurrentPosition();
  }

  async getCurrentPosition() {
    const isAvailable = Capacitor.isPluginAvailable('Geolocation');
    if (!isAvailable) {
      await Toast.show({
        text: 'Geolocation not supported on this platform 😢'
      });
    }
    const ops: GeolocationOptions = {
      enableHighAccuracy: true
    };
    const coordinates = await Geolocation.getCurrentPosition(ops).catch(err => (this._closeLoading(), err));
    console.log('Current--->', coordinates);
    if (!coordinates.coords) {
      await Toast.show({
        text: coordinates.message || 'Error no coordonate 😢'
      });
      this.position = null;
      return;
    }
    this.position = coordinates;
    this._closeLoading();
  }

  watchPosition() {
    const wait = Geolocation.watchPosition({}, (position, err) => {
    });
  }

  onEmitted($event) {
    console.log($event);
  }

  private _closeLoading() {
    if (this.loading) {
      this.loading.dismiss();
      this.loading = null;
    }
  }
}
