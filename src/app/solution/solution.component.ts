import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router,ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { FnParam } from '@angular/compiler/src/output/output_ast';
import * as _ from 'lodash';

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})
export class SolutionComponent implements OnInit {
  index:number;
  solution;
  data;
  constructor(private router:Router,private route:ActivatedRoute,private dataService:DataService) {}
  
  ngOnInit(){
    
    this.index = this.route.snapshot.params['id'];
    this.dataService.setIndex((this.index));
    this.data =this.dataService.getFilteredData();;
    if(this.data == undefined) {
      this.dataService.fetchData().subscribe(
        (data:any) => {
          console.log(data);
          this.data=data;
          this.dataService.setData(data);
          this.dataService.setFilteredData(data);
          this.solution = _.filter(this.data,(ele) => {
            return ele.id == this.index;
          })[0];
          console.log("solution",this.solution);
        },
        error => {
          console.log(error);
        }
      )
      
    } else {
      this.solution = _.filter(this.data,(ele) => {
        return ele.id == this.index;
      })[0];
    }

  }
}
