import { Component, OnInit } from '@angular/core';
import {SectionService} from '../services/section.service';
import {StudentService} from '../services/student.service';
import {Student} from '../Structs/studentClass';
import {Section} from '../Structs/sectionClass';

@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.component.html',
  styleUrls: ['./create-class.component.css']
})
export class CreateClassComponent implements OnInit {

  students : Array<Student>;
  section: Section;

  constructor(private sectionService: SectionService,
              private studentService: StudentService) { }

  ngOnInit() {
    this.section = new Section();
    this.students = new Array<Student>();
  }

  editName(name: string) : void {
    this.section.name = name;
  }

  addStudent(name: string, handle: string): void {
    const stu = new Student(name, handle);
    this.students.push(stu);
  }

  addTopic(topic: string) : void {

  }

  addStudents() : void{
    //donothing
  }

  createSection() : void {
    this.sectionService.addSection(this.section);
  }
}
