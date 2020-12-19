import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent implements OnInit {

  student = {
    firstName: '',
    lastName: '',
    class:'',
    subjectName: '',
    marks: '',
  };
  submitted = false;
  constructor(private tutorialService: TutorialService) { }

  ngOnInit() {
  }

  saveStudent() {
    const data = {
      firstName: this.student.firstName,
      lastName: this.student.lastName,
      class: this.student.class,
      subjectName: this.student.subjectName,
      marks: this.student.marks
    };
    this.tutorialService.create(data).subscribe(response => {
    this.submitted = true;
    },error => {
    console.log(error)
    });
  }

  newstudent(){
   this.submitted = false;
   this.student = {
    firstName: '',
    lastName: '',
    subjectName: '',
    marks:'',
    class:''
  };
  }

}
