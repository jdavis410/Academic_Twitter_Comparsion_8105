import { Component, OnInit } from '@angular/core';
import {SectionService} from '../services/section.service';
import {Section} from '../Structs/sectionClass';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(private sectionService: SectionService,
              private route: Router,
              private location: Location) { }
  sections;

  ngOnInit() {
    this.sectionService.getSections()
      .subscribe(
        sections => {
          this.sections = sections;
          console.log('Recieved these sections' + sections);
          for (const sect of sections) {
            console.log(sect);
          }

        });
  }

  goTo(section: Section) {
    this.route.navigate(['/view', {id: section.id}]);
  }

  goBack() : void {
    this.location.back();
  }
}
