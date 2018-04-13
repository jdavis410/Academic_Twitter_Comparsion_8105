import { Component } from '@angular/core';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Academic Twitter Companion';

  constructor(iconRegistry: MatIconRegistry, sanitizer : DomSanitizer) {
    iconRegistry.addSvgIcon('twitter_bird',
      sanitizer.bypassSecurityTrustResourceUrl('../assets/Twitter_Logo_Blue.svg'));
  }
}


