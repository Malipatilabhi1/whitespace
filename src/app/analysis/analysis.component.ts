import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GeneralServiceService } from '../general-service.service';
import {jsPDF} from 'jspdf';
@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {


  constructor(private gs: GeneralServiceService) { }

  
  @ViewChild('content', {static:false})el!:ElementRef;
  capture(){
    this.captureScreen()
  }
    private captureScreen() {
      const element = this.el.nativeElement;
      this.gs.captureScreen(element);
    }
  
  ngOnInit() {
   
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
  flamboyant: number[] = [15, 25, 35, 45, 55,15, 25, 35, 45, 55, 25, 20]; 
  purist: number[] = [15, 25, 35, 45, 55,15, 25, 35, 45, 55, 25, 22];
  sensible: number[] = [15, 25, 35, 45, 55,15, 25, 35, 45, 55, 25, 26]; 
  aspirant: number[] = [15, 25, 35, 45, 55,15, 25, 35, 45, 55, 25, 32];
  hoverer: number[] = [15, 25, 35, 45, 55,15, 25, 35, 45, 55, 25, 52];
  neutralising: number[] =[15,11, 20, 12, 11,12, 15, 17, 15, 25, 15, 11 ]
 

  getBackgroundColor(value: number): string {
    // if (value >= 10 && value <= 20) {
    //   return "#89CFF0";
    // } else if (value > 20 && value <= 30) {
    //   return "#6CB4EE";
    // } else
     if (value > 10 && value <= 30) {
      return "#E9E9E9";
    } else if (value > 30 && value <= 50) {
      return "#6B6B6B";
    } else if (value > 40 && value <= 60) {
      return "#222222";
    }
    return ""; // Return empty string for no background color
  }

}
