import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchText;
  constructor(private dataService:DataService) { }

  ngOnInit() {
   
  }

  search(){
      
      this.dataService.search(this.searchText);
      if(this.dataService.searchText === undefined || this.dataService.searchText === ""){
        this.dataService.searchedFlag = false;
      }
      else{
        //this.dataService.search(this.searchText);
      }
    
    
  }
}
