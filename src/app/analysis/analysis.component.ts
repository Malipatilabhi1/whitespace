import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GeneralServiceService } from '../general-service.service';
import {jsPDF} from 'jspdf';
import { HttpClient, HttpEventType } from '@angular/common/http';
@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {


  constructor(private gs: GeneralServiceService,  private http: HttpClient) { }

  
  @ViewChild('content', {static:false})el!:ElementRef;
  capture(){
    this.captureScreen()
  }
    private captureScreen() {
      const element = this.el.nativeElement;
      this.gs.captureScreen(element);
    }
  
  ngOnInit() {
   this.getPersonas()
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
  flamboyant: number[] = [14.84 , 10.02 , 12.84 , 13.02 , 14.84 , 12.02 , 10.84 , 13.02 ,14.84 , 12.02 , 14.84 , 13.02 ];
  neutralising: number[] =[10.76 , 13.18 , 14.76 , 12.18 , 14.76 , 13.18 , 14.76 , 11.18 ,14.76 , 13.18 , 10.76 , 13.18 ]; 
  purist: number[] =[13.7  , 10.06 , 13.7  , 14.06 , 13.7  , 14.06 , 13.7  , 13.06 ,13.7  , 14.06 , 13.7  , 13.06 ];
  sensible: number[] =  [ 2.752,  2.608,  2.752,  2.608,  2.752,  2.608,  2.752, 2.608,2.752,  2.608,  2.752,  2.608];
  aspirant: number[] =[14.32 , 10.99 , 14.32 , 12.99 , 14.32 , 10.99 , 14.32 , 12.99 ,14.32 , 12.99 , 14.32 , 12.99 ];
  hoverer: number[] = [14.27 , 12.81 , 14.27 , 10.81 , 14.27 , 12.81 , 14.27 , 12.81 ,14.27 , 10.81 , 14.27 , 12.81 ]; 
 
 

  getBackgroundColor(value: number): string {
    // if (value >= 10 && value <= 20) {
    //   return "#89CFF0";
    // } else if (value > 20 && value <= 30) {
    //   return "#6CB4EE";
    // } else
     if (value > 1 && value < 3) {
      return "#E9E9E9";
    } else if (value > 3 && value < 11) {
      return "#4E4E4E";
    } else if (value > 11 && value <14) {
      return "#999999";
    }else if (value > 14) {
      return "#222222";
    }
    return ""; // Return empty string for no background color
  }
  data1:any=[];
  data:any=[];
getPersonas(){
  debugger
  this.http.get('http://3.111.229.37:5000/get_personas').subscribe(res=>{
    console.log("res", res)
    this.data1= res;
     this.data = this.data1.personas;
     console.log(this.data)
  })
}
}
