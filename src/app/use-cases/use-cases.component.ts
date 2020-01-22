import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-use-cases',
  templateUrl: './use-cases.component.html',
  styleUrls: ['./use-cases.component.css']
})
export class UseCasesComponent implements OnInit {
  data:any;
  useCases:any;
  essentialGlossaries:any;
  index:number;
  constructor(private dataService:DataService,private route:ActivatedRoute) { }

  ngOnInit() {
    console.log(this.dataService.searchText);
    this.index = this.dataService.getIndex();
   
    this.data =this.dataService.getFilteredData();
    if(this.data == undefined) {
      this.dataService.fetchData().subscribe(
        (data:any) => {
          this.data=data;
          this.dataService.setData(data);
          this.dataService.setFilteredData(data);
          let temp = _.filter(this.data,(ele) => {
            return ele.id == this.index;
          })[0]
          this.essentialGlossaries = temp.essentialGlossaries;
          this.useCases=temp.useCase;
        },
        error => {
          console.log(error);
        }
      )
    
      } else {
        let temp = _.filter(this.data,(ele) => {
          return ele.id == this.index;
        })[0]
        this.essentialGlossaries = temp.essentialGlossaries;
        this.useCases=temp.useCase;
      }
  }

  accordionItems = [
    { title: 'title 1', content: 'content 1' },
    { title: 'title 2', content: 'content 2' },
    { title: 'title 3', content: 'content 3' },
    { title: 'title 4', content: 'content 4' },
  ];
}
