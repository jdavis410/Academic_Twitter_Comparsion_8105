import { Component, OnInit } from '@angular/core';
import {SectionService} from '../services/section.service';
import {Section} from '../Structs/sectionClass';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private sectionService: SectionService) { }

  sections: Array<Section>;
  selectedValue: number;

  ngOnInit() {
    this.getSections();
  }

  getSections() : void {
    this.sectionService.getSections()
      .subscribe(
        sections => {
          this.sections = sections;
          console.log('Recieved these sections' + sections);

        });
  }

  gotoSection() : void {

  }

}
