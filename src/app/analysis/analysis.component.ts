import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit, AfterViewInit {

  constructor(private elementRef: ElementRef) { }
  printScreen() {
    const fourthComponentElement = document.getElementById('fourth-component');
  
   
  
    if (!fourthComponentElement) {
      console.error('Fourth component element not found.');
      return;
    }
  
   
  
    html2canvas(fourthComponentElement).then(canvas => {
      const imageData = canvas.toDataURL(); // Convert canvas to base64 image data
  
   
  
      const popupWindow = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
      popupWindow.document.open();
      popupWindow.document.write(`
  <html>
  <head>
  <title>Print</title>
  </head>
  <body>
  <img src="${imageData}" style="max-width: 100%; height: auto;">
  </body>
  </html>
      `);
      popupWindow.document.close();
  
   
  
      setTimeout(() => {
        popupWindow.print();
        popupWindow.close();
      }, 1000); // Adjust the delay time if needed
    });
  }
  
  
  ngOnInit() {
   
  }

 

  ngAfterViewInit() {
   
  }
  flamboyant: number[] = [15, 25, 35, 45, 55,15, 25, 35, 45, 55, 25, 20]; 
  purist: number[] = [15, 25, 35, 45, 55,15, 25, 35, 45, 55, 25, 22];
  sensible: number[] = [15, 25, 35, 45, 55,15, 25, 35, 45, 55, 25, 26]; 
  aspirant: number[] = [15, 25, 35, 45, 55,15, 25, 35, 45, 55, 25, 32];
  hoverer: number[] = [15, 25, 35, 45, 55,15, 25, 35, 45, 55, 25, 52];
  neutralising: number[] =[15]
 

  getBackgroundColor(value: number): string {
    if (value >= 10 && value <= 20) {
      return "#89CFF0";
    } else if (value > 20 && value <= 30) {
      return "#6CB4EE";
    } else if (value > 30 && value <= 40) {
      return "#5072A7";
    } else if (value > 40 && value <= 50) {
      return "#318CE7";
    } else if (value > 50 && value <= 60) {
      return "#0039a6";
    }
    return ""; // Return empty string for no background color
  }

}
