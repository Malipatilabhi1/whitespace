import { Component, OnInit, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { ClusterAnalysisComponent } from '../cluster-analysis/cluster-analysis.component';
import html2canvas from 'html2canvas';
import {  ViewContainerRef} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit, AfterViewInit {
  @ViewChild('printScreen', { read: ViewContainerRef, static: true }) printScreen!: ViewContainerRef;
  a:boolean=false;
  constructor() { }

  captureScreenshots() {
    const analysisComponent = document.getElementById('analysisComponent');
    const clusterAnalysisComponent = document.getElementById('clusterAnalysisComponent');
  
   
  
    html2canvas(analysisComponent).then(canvas1 => {
      html2canvas(clusterAnalysisComponent).then(canvas2 => {
        this.printScreenshots([canvas1, canvas2]);
      });
    });
  }
  printScreenshots(screenshots: HTMLCanvasElement[]) {
    const printWindow = window.open('', '_blank');
    const printDocument = printWindow?.document;
  
   
  
    if (printDocument) {
      printDocument.open();
      printDocument.write('<html><head><title>Print</title></head><body></body></html>');
  
   
  
      for (const screenshot of screenshots) {
        const img = printDocument.createElement('img');
        img.src = screenshot.toDataURL();
        printDocument.body.appendChild(img);
      }
  
   
  
      printDocument.close();
      printWindow?.print();
    }
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
