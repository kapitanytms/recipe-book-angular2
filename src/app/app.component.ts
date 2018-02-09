import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      // YOUR CREDENTIALS
      apiKey: 'HERE',
      authDomain: 'AND HERE'
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
