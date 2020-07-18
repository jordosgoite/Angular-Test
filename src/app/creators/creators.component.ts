import { Component, OnInit } from '@angular/core';
import { CreatorsApiService} from './creator/shared/creators-api.service';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.css']
})
export class CreatorsComponent implements OnInit {

  constructor(private creatorSvc: CreatorsApiService) { }
  allCreators: Observable<any>;
  textoDeInput: string;

  ngOnInit() {
  this.getCreators();
  }

  getCreators() {
    this.creatorSvc.getAllCreators().subscribe(heroes=> this.allCreators=heroes);
  }

}
