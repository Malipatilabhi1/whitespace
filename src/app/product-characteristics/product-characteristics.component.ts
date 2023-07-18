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
    "natural": 1.7,
    "removes_oil": 2.0,
    "lather": 1.5,
    "scalp_irritation": 1.7,
    "softness": 1.7,
    "price": 1.7
  },
  "01":{
    "aroma": 1.2,
    "protein": 1.1,
    "vitamin": 1.2,
    "bubble": 2.7,
    "viscocity": 2.4,
    "ph": 2.9,
    "natural": 1.4,
    "removes_oil": 2.7,
    "lather": 2.0,
    "scalp_irritation": 2.4,
    "softness":  2.4,
    "price":  2.4
  },
  "1": {
    "aroma": 1.1,
    "protein": 2.0,
    "vitamin": 1.3,
    "bubble": 2.5,
    "viscocity": 2.4,
    "ph": 2.6,
    "natural": 2.2,
    "removes_oil": 1.3,
    "lather": 1.2,
    "scalp_irritation": 2.3,
    "softness":  1.2,
    "price":  1.2
    },
  "11":{
    "aroma": 1.1,
    "protein": 2.7,
    "vitamin": 2.4,
    "bubble": 2.0,
    "viscocity": 1.0,
    "ph": 2.3,
    "natural": 1.1,
    "removes_oil": 1.7,
    "lather": 1.8,
    "scalp_irritation": 2.5,
    "softness":  2.4,
    "price":  1.0
  },
  "2": {
  
  },
  "22":{
    "aroma": 2.6,
    "protein": 1.5,
    "vitamin": 1.0,
    "bubble": 2.8,
    "viscocity": 2.6,
    "ph": 2.9,
    "natural": 1.0,
    "removes_oil": 2.1,
    "lather": 1.0,
    "scalp_irritation": 2.1,
    "softness":  2.0,
    "price":  1.8
  },
  "3": {
    "aroma": 2.1,
    "protein": 1.6,
    "vitamin": 1.9,
    "bubble": 2.6,
    "viscocity": 2.5,
    "ph": 2.2,
    "natural": 1.0,
    "removes_oil": 2.1,
    "lather": 2.0,
    "scalp_irritation": 2.3,
    "softness":  1.9,
    "price":  2.7
  },
  "33":{
    "aroma": 1.5,
    "protein": 1.7,
    "vitamin": 1.3,
    "bubble": 1.5,
    "viscocity": 2.2,
    "ph": 2.0,
    "natural": 1.2,
    "removes_oil": 1.6,
    "lather": 2.8,
    "scalp_irritation": 1.3,
    "softness":  1.9,
    "price":  2.6
  },
  "4": {
    "aroma": 2.3,
    "protein": 1.6,
    "vitamin": 1.6,
    "bubble": 1.8,
    "viscocity": 2.3,
    "ph": 2.8,
    "natural": 2.0,
    "removes_oil": 2.4,
    "lather": 2.0,
    "scalp_irritation": 2.1,
    "softness":  1.4,
    "price":  1.5
  },
  "44":{
    "aroma": 2.2,
    "protein": 1.2,
    "vitamin": 1.8,
    "bubble": 2.3,
    "viscocity": 1.2,
    "ph": 1.0,
    "natural": 1.8,
    "removes_oil": 1.1,
    "lather": 1.4,
    "scalp_irritation": 2.1,
    "softness":  2.5,
    "price":  1.9
  },
  "5": {
    "aroma": 1.0,
    "protein": 2.7,
    "vitamin": 2.6,
    "bubble": 1.5,
    "viscocity": 2.2,
    "ph": 1.2,
    "natural": 1.6,
    "removes_oil": 1.3,
    "lather": 2.5,
    "scalp_irritation": 1.7,
    "softness":  2.3,
    "price":  1.5
  },
  "55":{
    "aroma": 2.3,
    "protein": 1.9,
    "vitamin": 1.9,
    "bubble": 2.7,
    "viscocity": 2.2,
    "ph": 1.3,
    "natural": 2.5,
    "removes_oil": 1.6,
    "lather": 1.4,
    "scalp_irritation": 1.8,
    "softness":  1.0,
    "price":  2.2
  }
}
// Assuming tabContent is an array of strings containing the key names

getKeys(obj: any): string[] {
  return Object.keys(obj);
}

getValues(obj: any): any[] {
  return Object.values(obj);
}


isEmptyObject(obj: any): boolean {
  return Object.keys(obj).length === 0;
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
