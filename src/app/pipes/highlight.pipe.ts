import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';
@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  transform(value: string,searchText:string){
    console.log(value);
    
    let arr = value.split(" ");
    let transformedvalue= "";
    
    if(searchText !== undefined && searchText !== "" && searchText.length > 1)  {
  //     let searchTextArr = searchText.split(" ");
  //     for(let i=0;i<searchTextArr.length;i++) {
  //       _.each(arr,(ele,index) => {
       
         
  //         if(searchTextArr[i] !==""){
  //           let temp = searchTextArr[i].toLowerCase();
  //           var regex = new RegExp("^[^a-zA-Z0-9]*"+temp);
  //           if(ele.toLowerCase().match(regex)) {
  //             transformedvalue = transformedvalue +"<strong> "+ele+"</strong>";
              
  //           }
  //           else {
  //             transformedvalue = transformedvalue + " "+ele;
  //           }
  //         }
       

      
  // })
  //   }
  searchText= searchText.replace(/\s+$/, '')
  var regex = new RegExp("[^a-zA-Z0-9]*"+searchText,"ig");
      let index = value.toLowerCase().indexOf(searchText.toLowerCase());
      let substring =value.substring(index,index + searchText.length);
      transformedvalue =value.replace(regex,"<strong> "+substring+"</strong>")

  }
    else{
    transformedvalue = value;
    }
    

    

    return transformedvalue;
  }

}
