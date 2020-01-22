import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import * as _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: any;
  filteredArray: any;
  displayArray:any;
  objectFlag: boolean;
  pageOfItems:any;
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    if(this.dataService.filteredData ===undefined)
      this.getData();
    else if(this.dataService.searchText === undefined || this.dataService.searchText === "")
      this.dataService.filteredData = this.dataService.data;
  }

  getData() {
    this.dataService.fetchData()
      .subscribe(
        (data: any) => {
          // console.log(data);
          this.data = data;
          this.dataService.setData(data);
          this.dataService.setFilteredData(data);
          this.filteredArray = this.dataService.filteredData;
        },
        error => {
          console.log(error);
        }
      )
  }

  setIndex(index: number) {
    this.router.navigate(['solution/' + index + '/solution-insights']);
  }

  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
}
  
}
