import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-solution-insights',
  templateUrl: './solution-insights.component.html',
  styleUrls: ['./solution-insights.component.css']
})
export class SolutionInsightsComponent implements OnInit {


  index:number;
  data:any;
  solution:any; 
  listFlag:boolean;
  constructor(private dataService:DataService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.index = this.dataService.getIndex();
   
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
          })[0].solution;
          console.log("solution",this.solution);
        },
        error => {
          console.log(error);
        }
      )
      
    } else {
      this.solution = _.filter(this.data,(ele) => {
        return ele.id == this.index;
      })[0].solution;
    }
   
    
  }

  checkIfList(element:any) {
    if(typeof(element) == "string") {
      return false;
    }
    return true;
  }

}
