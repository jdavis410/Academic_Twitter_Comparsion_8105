import {Component, Input, OnInit} from '@angular/core';
import {Section} from '../Structs/sectionClass';
import {SectionService} from '../services/section.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Student} from '../Structs/studentClass';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-edit-class',
  templateUrl: './edit-class.component.html',
  styleUrls: ['./edit-class.component.css']
})
export class EditClassComponent implements OnInit {

  section: Section;
  students: Student[];
  inputName: string;
  inputHandle: string;


  constructor(private sectionService: SectionService,
              private route: ActivatedRoute,
              private location: Location,
              public snackBar: MatSnackBar) { }

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

  addStudent(name: string, handle: string) : void {
    let stu = new Student(name, handle);
    stu.section = this.section.name;

    this.section.roster.push(stu);

    this.sectionService.updateSection(this.section).subscribe(() => this.snackBar.open('Student Added','', {duration: 500}) );
  }

  addTopic(topic : string) {
    this.section.topics.push(topic);
    this.sectionService.updateSection(this.section).subscribe();
  }

  deleteTopic() {}

  deleteStudent(student: Student) {
    const i = this.students.indexOf(student);

    this.students.splice(i,1);

    this.section.roster = this.students;
    this.sectionService.updateSection(this.section).subscribe(() => this.snackBar.open('Student Removed', '', {duration: 500}));
  }

  deleteSection() : void {
    this.sectionService.deleteSection(this.section).subscribe(() => this.goback());
  }

  goback(): void {
    this.location.back();
  }

}
