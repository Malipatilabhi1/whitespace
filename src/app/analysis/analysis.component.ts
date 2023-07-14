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
  //  this.getPersonas();

  if(JSON.parse(localStorage.getItem('data'))){
    this.data=JSON.parse(localStorage.getItem('data'));
    console.log(this.data);
  }

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
  flamboyant: number[] = [29.26,30.56,29.68,28.04,29.6,28.2,28.74,29.18,31.42,28.8,31.36,31.42];
  neutralising: number[] =[24.64,23.2,23.1,26.7,23.3,24.64,25.24,23.5,23.5,27.6,24.64,27.6]; 
  purist: number[] =[8.46,8.53,9.04,8.17,9.02,8.92,8.65,9.16,9.07,8.87,9.06,9.16];
  sensible: number[] =  [28.73,28.45,26.91,28.23,28.09,26.65,28.23,28.61,28.11,27.69,29.07,30.61];
  aspirant: number[] =[29.85,29.25,30.05,29.09,29.81,28.19,27.71,29.67,31.73,30.41,30.35,31.73];
  hoverer: number[] = [29.25,28.39,30.19,28.61,29.69,29.05,28.29,30.65,30.53,29.55,30.47,30.65]; 
 
 

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
    return ""; 
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
