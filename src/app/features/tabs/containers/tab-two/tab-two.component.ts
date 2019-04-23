import { Component, OnInit } from '@angular/core';


import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';


@Component({
  selector: 'app-tab-two',
  templateUrl: './tab-two.component.html',
  styleUrls: ['./tab-two.component.scss'],
})
export class TabTwoComponent {

  image: SafeResourceUrl;

  constructor( private sanitizer: DomSanitizer) {
  }

  async takePicture() {
    const { Camera } = Plugins;
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera
    }).catch(err => err);
    console.log('image', image );
    if (!image) {
      this.image = null;
      return;
    }
    // Example of using the Base64 return type. It's recommended to use CameraResultType.Uri
    // instead for performance reasons when showing large, or a large amount of images.
    this.image = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.base64Data));
  }
}
