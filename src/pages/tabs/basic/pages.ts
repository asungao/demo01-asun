import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';


@Component({
  template: `
    <ion-header>
      <ion-navbar>
        <ion-title>Tabs</ion-title>
      </ion-navbar>
    </ion-header>

    <ion-content>
      <button>Hellow</button>
    </ion-content>
`})
export class TabBasicContentPage {
  isAndroid: boolean = false;

  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }
}

@Component({
  template: `
    <ion-header>
      <ion-navbar>
        <ion-title>Tabs</ion-title>
      </ion-navbar>
    </ion-header>

    <ion-content>
      <button>Asun Do it</button>
    </ion-content>
`})
export class TabBasicContentPage1 {
  isAndroid: boolean = false;

  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }
}

@Component({
  template: `
    <ion-tabs class="tabs-basic">
      <ion-tab tabTitle="Music" [root]="rootPage"></ion-tab>
      <ion-tab tabTitle="Movies" [root]="root1Page"></ion-tab>
      <ion-tab tabTitle="Games" [root]="rootPage"></ion-tab>
    </ion-tabs>
`})
export class TabBasicPage {
  rootPage = TabBasicContentPage;
  root1Page = TabBasicContentPage1;
}
