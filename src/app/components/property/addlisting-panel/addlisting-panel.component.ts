import { Component, OnInit, Output } from '@angular/core';
import { AuthService } from '../../../service/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-addlisting-panel',
  templateUrl: './addlisting-panel.component.html',
  styleUrls: ['./addlisting-panel.component.scss']
})
export class AddlistingPanelComponent implements OnInit {
  id: string;
  docId: string;
  stage: number;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.stage = 1;
  }

  onNewDoc(docId: string){
    console.log(docId)
    this.docId = docId
    this.stage = 2
  }

  onStage3(stage: number){
    this.stage = 3
  }

  onStage4(stage: number){
    this.stage = 4
  }

  onStage5(stage: number){
    this.stage = 5
  }

  onStage6(stage: number){
    this.stage = 6
  }


}
