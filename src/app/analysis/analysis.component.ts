import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GeneralServiceService } from '../general-service.service';
import {jsPDF} from 'jspdf';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { RecProductService } from '../Services/rec-product.service';
@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {


  constructor(private gs: GeneralServiceService,  private http: HttpClient,private recProductService:RecProductService) { }
  id: Number = null;

  // Event handler for hovering over a td element
  toggleTooltip(event: MouseEvent,id:Number): void {
    if(event.type === 'mouseenter'){
        this.id=id;
    }else if(event.type === 'mouseleave'){
        this.id=null;
    }
  }
  
  @ViewChild('content', {static:false})el!:ElementRef;
  capture(){
    this.captureScreen()
  }
    private captureScreen() {
      const element = this.el.nativeElement;
      this.gs.captureScreen(element);
    }
  
    lowestAverage:number;
    lower:any=[];
    lowestSerial:any;

    RecProduct:any=[];

  ngOnInit() {
    const data = [
      { array: this.flamboyant, serial: 0},
      { array: this.neutralising, serial: 1 },
      { array: this.purist, serial: 2 },
      { array: this.sensible, serial: 3 },
      { array: this.aspirant, serial: 4},
      { array: this.hoverer, serial: 5 },
    ];
  
    let lowestAverage = Number.POSITIVE_INFINITY;
    let lowestSerial = null;
  
    for (const { array, serial } of data) {
      const sum = array.reduce((total, num) => total + num, 0);
      const average = sum / array.length;
      
      if (average < lowestAverage) {
        lowestAverage = average;
        lowestSerial = serial;
      }
      this.lower.push(average);
    }
    this.lowestAverage = lowestAverage;
    this.lowestSerial = lowestSerial;

  if(JSON.parse(localStorage.getItem('data'))){
    this.data=JSON.parse(localStorage.getItem('data'));
    console.log(this.data);
  }
    this.RecProduct=this.data[lowestSerial];
    this.recProductService.RecProduct=this.RecProduct; 

    this.flamboyant.push(this.lower[0].toFixed(2));
    this.neutralising.push(this.lower[1].toFixed(2));
    this.purist.push(this.lower[2].toFixed(2));
    this.sensible.push(this.lower[3].toFixed(2));
    this.aspirant.push(this.lower[4].toFixed(2));
    this.hoverer.push(this.lower[5].toFixed(2));
    
  }

  generatePDF() {
    const images = this.gs.getCapturedImages();

    // Generate the PDF
    const pdf = new jsPDF();
    images.forEach((imageData) => {
      pdf.addImage(imageData, 'JPEG', 10, 10, 190, 160);
      pdf.addPage();
    });
    pdf.save('screens.pdf');
  }
  previewPDF(): void {
    const images = this.gs.getCapturedImages();
    const pdf = new jsPDF();
    const previewWindow = window.open("", "_blank"); // Open a new browser window/tab

    images.forEach((imageData) => {
      pdf.addImage(imageData, 'JPEG', 10, 10, 190, 160);
      pdf.addPage();
    });

    const pdfData = pdf.output('datauristring'); // Get the PDF as data URI
    previewWindow.document.write('<iframe width="100%" height="100%" src="' + pdfData + '"></iframe>'); // Render the PDF in the new window/tab
  }
  flamboyant: number[] = [8.11,2.85,7.04,7.44,2.38,4.38,7.75,8.65,7.87,8.02,7.93,8.65];
  neutralising: number[] =[5.74,6.15,6.65,2.25,6.1,6.45,7.32,5.97,2.24,5.82,6.44,7.32]; 
  purist: number[] =[2.44,2.35,2.41,2.35,2.41,2.38,2.44,2.46,2.25,2.45,2.35,2.46];
  sensible: number[] =  [4.03,7.04,5.24,7.66,7.99,5.45,8.04,7.74,8.78,6.1,7.83,8.1];
  aspirant: number[] =[2.23,7.82,8.17,7.63,7.94,7.98,7.86,8.63,7.78,7.08,7.37,8.63];
  hoverer: number[] = [6.24,7.74,7.91,2.01,8.1,7.77,8.06,6.35,7.69,2.18,7.45,8.35]; 
 
  
  // getBackgroundColor(value: number): string {
  //   // if (value >= 10 && value <= 20) {
  //   //   return "#89CFF0";
  //   // } else if (value > 20 && value <= 30) {
  //   //   return "#6CB4EE";
  //   // } else
  //   if (value >= 0 && value < 3) {
  //     return "#E9E9E9";
  //   } else if (value >= 3 && value < 5) {
  //     return "#999999";
  //   } else if (value >= 5 && value <8) {
  //     return "#4E4E4E";
  //   }else if (value >= 8) {
  //     return "#222222";
  //   }
  //   return ""; 
  // }
  getBackgroundColor(value: number) {
    if (value >= 0 && value < 3) {
      return { 'background-color': '#E9E9E9', 'color': 'black' };
    } else if (value >= 3 && value < 5) {
      return { 'background-color': '#999999', 'color': 'black' };
    } else if (value >= 5 && value < 8) {
      return { 'background-color': '#4E4E4E', 'color': 'white' };
    } else if (value >= 8) {
      return { 'background-color': '#222222', 'color': 'white' };
    }
    return { 'background-color': '', 'color': '' };
  }
  
  data1:any=[];
  data:any=[];
getPersonas(){
  debugger
  this.http.get('http://3.111.229.37:5000/get_personas').subscribe(res=>{
    console.log("res", res)
    this.data1= res;
     this.data = this.data1.personas;
     console.log(this.data);
  })
}
}
