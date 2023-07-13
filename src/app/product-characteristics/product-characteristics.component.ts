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
    "aroma": 0.76,
    "protein": 0.79,
    "vitamin": 0.57,
    "bubble": 0.67,
    "viscocity": 0.6,
    "ph": 0.67,
  },
  "01":{
    "natural": 0.57,
    "removes_oil": 0.62,
    "lather": 0.67,
    "scalp_irritation": 0.64,
    "softness": 0.69,
    "price": 0.57
  },
  "1": {
    "aroma": 0.57,
    "protein": 0.53,
    "vitamin": 1.0,
    "bubble": 1.0,
    "viscocity": 0.69,
    "ph": 1.0,
  },
  "11":{
    "natural": 3.0,
    "removes_oil": 1.0,
    "lather": 1.0,
    "scalp_irritation": 0.53,
    "softness": 1.0,
    "price": 1.0
  },
  "2": {
    "aroma": 0.74,
    "protein": 0.74,
    "vitamin": 0.78,
    "bubble": 0.64,
    "viscocity": 0.61,
    "ph": 0.75
  },
  "22":{
    "natural": 0.71,
    "removes_oil": 0.65,
    "lather": 0.74,
    "scalp_irritation": 0.68,
    "softness": 0.5,
    "price": 0.61
  },
  "3": {
    "aroma": 0.45,
    "protein": 0.65,
    "vitamin": 0.8,
    "bubble": 0.69,
    "viscocity": 0.67,
    "ph": 0.53,
  },
  "33":{
    "natural": 0.76,
    "removes_oil": 0.76,
    "lather": 0.69,
    "scalp_irritation": 0.65,
    "softness": 0.69,
    "price": 0.69
  },
  "4": {
    "aroma": 0.61,
    "protein": 0.74,
    "vitamin": 0.57,
    "bubble": 0.61,
    "viscocity": 0.59,
    "ph": 0.74,
  },
  "44":{
    "natural": 0.61,
    "removes_oil": 0.63,
    "lather": 0.67,
    "scalp_irritation": 0.76,
    "softness": 0.69,
    "price": 0.6
  },
  "5": {
    "aroma": 0.64,
    "protein": 0.78,
    "vitamin": 0.78,
    "bubble": 0.75,
    "viscocity": 0.64,
    "ph": 0.81
  },
  "55":{
    "natural": 0.69,
    "removes_oil": 0.58,
    "lather": 0.69,
    "scalp_irritation": 0.72,
    "softness": 0.64,
    "price": 0.6
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
