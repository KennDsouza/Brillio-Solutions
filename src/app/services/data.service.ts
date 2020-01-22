import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as _ from 'lodash';
import { ActivatedRoute, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  data:any;
  filteredData:any;
  index:number;
  searchText:string;
  objectFlag:boolean = false;
  searchedFlag: boolean = false;

  constructor(private http: HttpClient,private router:Router,private route:ActivatedRoute) { }

  fetchData() {
    let url="assets/content.json"
    return this.http.get(url);
  }

  setData(data:any) {
    this.data = data;
    let i=0;
    _.each(this.data,(ele)=>{
      ele['id'] = i++;
    })
    console.log(JSON.stringify(this.data));
  }

  getData(){
    return this.data;
  }

  setIndex(index:number){
    this.index = index
  }

  getIndex() {
    return this.index;
  }

  setFilteredData(obj:any) {
    this.filteredData = obj;
  }

  getFilteredData() {
    return this.filteredData;
  }


  search(searchText) {
    this.searchText = searchText;
    this.searchText= searchText.replace(/\s+$/, '')
    if(this.router.url == '/'){
      this.searchedFlag = true;
      let that = this;
      this.filteredData = _.filter(this.data, function (element) {
        that.objectFlag = false;
        that.checkKeyWord(element);
        return that.objectFlag;
      })
    }
    else{
      this.router.navigate[this.router.url];
      this.searchedFlag = false;
      
    }

    
  }

  iterate(element) {
    let that = this;
    _.each(element, function (o) {
      that.checkKeyWord(o);
    })
  }

  checkKeyWord(element) {
    if (typeof (element) == 'string') {
      if (this.searchInString(element)) {
        this.objectFlag = true;
        return true;
      }
    }
    else {
      this.iterate(element);
    }
    return false;
  }

  searchInString(element: string) {
    
    if (element.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1) {
      return true;
    }
    return false;
  }

}
