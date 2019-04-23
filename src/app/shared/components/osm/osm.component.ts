import { Component, OnInit, Input, Output, ViewEncapsulation, EventEmitter } from '@angular/core';
import OlMap from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import OSM from 'ol/source/OSM';
import {fromLonLat} from 'ol/proj.js';

import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../modal/modal.component';


@Component({
  selector: 'app-osm',
  templateUrl: './osm.component.html',
  styleUrls: ['./osm.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OSMComponent implements OnInit {

  @Input() coords: {lon: number, lat: number};
  @Input() zoom: number;
  @Output() dataEmitted: EventEmitter<any> = new EventEmitter();
  public olMap: OlMap;

  constructor(
    private _modalCtrl: ModalController
  ) {}

  ngOnInit() {
    setTimeout(() => {
      this.initMap();
    }, 0);
  }

  initMap() {
    console.log('initMap...');
    if (!this.coords) {
      return alert('Error no coords');
    }
    // build marker with current position
    const geoMarker = new Feature({
      type: 'geoMarker',
      geometry: new Point(fromLonLat([this.coords.lon, this.coords.lat]))
    });
    const vectorLayer = new VectorLayer({
      source: new VectorSource({
        features: [geoMarker]
      }),
    });
    // build map
    this.olMap = new OlMap({
      target: 'map',
      layers: [
        //   new TileLayer({
        //     source: new OSM()
        //   })
        new TileLayer({
          source: new XYZ({
            url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          })
        }),
        vectorLayer
      ],
      view: new View({
        center: fromLonLat([this.coords.lon, this.coords.lat]),
        zoom: this.zoom || 13
      })
    });
    // listener event Map
    this.olMap.on('singleclick', (evt: any) => {
      this._openModal(evt.coordinate);
    });
  }

  async _openModal(coordinate) {
    const modal = await this._modalCtrl.create({
      component: ModalComponent,
      componentProps: {data: coordinate}
    });
    await modal.present();
    modal.onDidDismiss().then(data => this.dataEmitted.emit(data));
  }
}
