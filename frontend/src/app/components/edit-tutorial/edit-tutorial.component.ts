import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/tutorial.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-tutorial',
  templateUrl: './edit-tutorial.component.html',
  // styleUrls: ['./edit-tutorial.component.css']
})


export class EditTutorialComponent implements OnInit {
  currentData= null;

  constructor(private tutorialService: TutorialService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.getStudentDetail(this.route.snapshot.paramMap.get('id'));

  }
  getStudentDetail(id){
  this.tutorialService.get(id).subscribe(data => {
    this.currentData = data;
    console.log(data);
  },error => {
     console.log(error);
  })
}

  updateTutorial() {
    this.tutorialService.update(this.currentData.id,this.currentData).subscribe(response =>{
      this.router.navigate(['students'])
    },error => {
      console.log(error);
    });
  }
}
