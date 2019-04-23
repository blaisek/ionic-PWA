import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Geolocation } = Plugins;


@Component({
  selector: 'app-tab-three',
  templateUrl: './tab-three.component.html',
  styleUrls: ['./tab-three.component.scss'],
})
export class TabThreeComponent implements OnInit {

  title = 'Page 3';
  constructor() { }

  ngOnInit() {
    this.getCurrentPosition()
  }

  async getCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    console.log('Current', coordinates);
  }

  watchPosition() {
    const wait = Geolocation.watchPosition({}, (position, err) => {
    })
  }

  onEmitted($event) {
    console.log($event);
  }
}
