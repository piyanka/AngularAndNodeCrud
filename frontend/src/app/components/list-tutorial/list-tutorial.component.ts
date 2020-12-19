import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-list-tutorial',
  templateUrl: './list-tutorial.component.html',
  styleUrls: ['./list-tutorial.component.css']
})
export class ListTutorialComponent implements OnInit {
  
  headers = ["firstName","lastName","subjectName","marks","class","Actions"]
  currentData= null;
  currentIndex=-1;
  tutorials: any;
  firstName = '';
  message =  '';

  constructor( private tutorialService: TutorialService) { }

  ngOnInit() {
   this.retrieveTutorial();
   this.currentIndex = -1;
  }

  editRow(tut,index){
    this.currentData = tut;
    this.currentIndex = index;
}

deleteRow(tut,index){
 this.tutorialService.delete(tut.id).subscribe(response => {
      console.log(response);
      this.retrieveTutorial();
    },error => {
      console.log(error)
    })
  }

  retrieveTutorial() {
    this.tutorialService.getAll().subscribe(data =>{
        this.tutorials = data;
    },error =>{
        console.log(error);
    });
  }

  deleteAllTutorials() {
    this.tutorialService.deleteAll().subscribe(data => {
      this.retrieveTutorial();
    },error => {
      console.log("error",error);
    })
  }

  searchTitle(){
    this.tutorialService.findByTitle(this.firstName).subscribe(data => {
      this.tutorials = data;

    })
  }

}
