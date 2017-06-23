import { Component } from '@angular/core';

import { Platform } from 'ionic-angular';


@Component({
  template: `
    <ion-header>
      <ion-navbar [color]="isAndroid ? 'danger' : 'primary'">
        <ion-title>Tabs</ion-title>
      </ion-navbar>
    </ion-header>

    <ion-content>
      page...
    </ion-content>
`})
export class TabIconContentPage {
  isAndroid: boolean = false;

  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }
}

@Component({
  template: `
    <ion-header>
      <ion-navbar [color]="isAndroid ? 'danger' : 'primary'">
        <ion-title>Tabs</ion-title>
      </ion-navbar>
    </ion-header>

    <ion-content>
       page1
    </ion-content>
`})
export class TabIconContentPage1 {
  isAndroid: boolean = false;

  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }
}

@Component({
  template: `
  <ion-tabs class="tabs-icon" [color]="isAndroid ? 'danger' : 'primary'">
    <ion-tab tabIcon="contact" [root]="rootPage"></ion-tab>
    <ion-tab tabIcon="compass" [root]="rootPage1"></ion-tab>
    <ion-tab tabIcon="analytics" [root]="rootPage"></ion-tab>
    <ion-tab tabIcon="settings" [root]="rootPage"></ion-tab>
  </ion-tabs>
`})
export class IconPage {
   rootPage = TabIconContentPage;
   rootPage1 = TabIconContentPage1;
  isAndroid: boolean = false;

  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }
}
