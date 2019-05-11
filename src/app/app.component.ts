import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private _router: Router,
    private _menuCtrl: MenuController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then((readySource) => {
      // readySource info:
      // For example, when Cordova is ready,
      // the resolved ready source is cordova.
      // The default ready source value will be dom.
      // The readySource is useful if different logic should run depending on the platform the app is running from.
      // For example, only Capacitor and Cordova can execute the status bar plugin, so the web should not run status bar plugin logic.
      this.displayToastInstall(this.platform.platforms().toString());
    });
  }

  navTo(url) {
    this._menuCtrl.close();
    this._router.navigate([url]);
  }

  displayToastInstall(platform: string = null) {
    // Detects if device is on iOS
    const isIos = () => {
      const userAgent = platform || window.navigator.userAgent.toLowerCase();
      return /iphone|ipad|ipod/.test( userAgent.toLowerCase() );
    };
    // Detects if device is in standalone mode
    const isInStandaloneMode = () => ('standalone' in (window as any).navigator) && ((window as any).navigator.standalone);
    // Checks if should display install popup notification:
    if (isIos() && !isInStandaloneMode()) {
      console.log('XXXX install....');
      //
    }
  }

}
