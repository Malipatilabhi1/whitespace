import { Component, OnInit,ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralServiceService } from '../general-service.service';
@Component({
  selector: 'app-product-characteristics',
  templateUrl: './product-characteristics.component.html',
  styleUrls: ['./product-characteristics.component.css']
})
export class ProductCharacteristicsComponent implements OnInit {

  constructor(private router:Router,  private gs: GeneralServiceService) { }

  ngOnInit(): void {
  }
tabContent=[
  {name:"aroma", value:"9.5", name1:"dry", value1:"9.1"},
  {name:"dry", value:"9.1", name1:"softness", value1:"9.1"},
  {name:"volume", value:"9.5", name1:"stickiness", value1:"9.1"},
  {name:"pocketSize", value:"9.1", name1:"oil", value1:"9.1"},
  {name:"price", value:"9.1", name1:"lather", value1:"9.1"},
  {name:"ph", value:"9.1", name1:"viscocity", value1:"9.1"},
]
tabJson={
  "0": {
    "aroma": 1.8,
    "protein": 2.6,
    "vitamin": 1.1,
    "bubble": 1.1,
    "viscocity": 1.0,
    "ph":2.1,
  },
  "01":{
    "natural": 1.7,
    "removes_oil": 2.0,
    "lather": 1.5,
    "scalp_irritation": 1.7,
    "softness": 1.7,
    "price": 1.7
  },
  "1": {
    "aroma": 1.2,
    "protein": 1.1,
    "vitamin": 1.2,
    "bubble": 2.7,
    "viscocity": 2.4,
    "ph": 2.9,
  },
  "11":{
    "natural": 1.4,
    "removes_oil": 2.7,
    "lather": 2.0,
    "scalp_irritation": 2.4,
    "softness":  2.4,
    "price":  2.4
  },
  "2": {
    
  },
  "22":{
    "natural": 2.2,
    "removes_oil": 1.3,
    "lather": 1.2,
    "scalp_irritation": 2.3,
    "softness": 1.2,
    "price": 1.2
  },
  "3": {
    "aroma": 1.1,
    "protein": 2.7,
    "vitamin": 2.4,
    "bubble": 2.0,
    "viscocity": 1.0,
    "ph": 2.3,
  },
  "33":{
    "natural": 1.1,
    "removes_oil": 1.7,
    "lather": 1.8,
    "scalp_irritation": 2.5,
    "softness": 2.4,
    "price": 1.0
  },
  "4": {
    "aroma": 2.6,
    "protein": 1.5,
    "vitamin": 1.0,
    "bubble": 2.8,
    "viscocity": 2.6,
    "ph": 2.9,
  },
  "44":{
    "natural": 1.0,
    "removes_oil": 2.1,
    "lather": 1.0,
    "scalp_irritation": 2.1,
    "softness": 2.0,
    "price": 1.8
  },
  "5": {
    "aroma": 2.1,
    "protein": 1.6,
    "vitamin": 1.9,
    "bubble": 2.6,
    "viscocity": 2.5,
    "ph": 2.2
  },
  "55":{
    "natural": 1.0,
    "removes_oil": 2.1,
    "lather": 2.0,
    "scalp_irritation": 2.3,
    "softness": 1.9,
    "price": 2.7
  }
}
// Assuming tabContent is an array of strings containing the key names

getKeys(obj: any): string[] {
  return Object.keys(obj);
}

getValues(obj: any): any[] {
  return Object.values(obj);
}







populateTable(){
  
}
@ViewChild('content', {static:false})el!:ElementRef;

isLoading1 = false;
gotoWhitespace(){
  
  this.captureScreen()
  console.log("clicked")
  this.isLoading1 = true;
  setTimeout(() => {
    this.router.navigate(['./whitespaceAnalysis']).then(() => {
      this.isLoading1 = false;
    });
  }, 3000); // Delay of 3 seconds
 
}
private captureScreen() {
  const element = this.el.nativeElement;
  this.gs.captureScreen(element);
}
}
