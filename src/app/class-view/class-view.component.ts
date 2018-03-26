import {Component, Input, OnInit} from '@angular/core';
import {Section} from '../Structs/sectionClass';
import {ActivatedRoute} from '@angular/router';
import {SectionService} from '../services/section.service';
import { Location} from '@angular/common';
import {Student} from '../Structs/studentClass';

@Component({
  selector: 'app-class-view',
  templateUrl: './class-view.component.html',
  styleUrls: ['./class-view.component.css']
})
export class ClassViewComponent implements OnInit {

  section: Section;
  students: Student[];
  studentSelected : Student;

  constructor(
    private route: ActivatedRoute,
    private sectionService: SectionService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getSection();
  }

  getSection() : void {
    const courseNum = +this.route.snapshot.paramMap.get('courseNum');
    this.sectionService.getSection(courseNum)
      .subscribe(section => {
        this.section = section;
        this.students = this.section.roster;
        console.log('got section');
        console.log(section);
        console.log('Students list');
        console.log(this.students);
      });
  }

  goBack() : void {
    this.location.back();
  }
}
