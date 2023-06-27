import { Component, OnInit } from '@angular/core';
import  html2canvas from 'html2canvas';
import { ClusterAnalysisComponent } from '../cluster-analysis/cluster-analysis.component';
import {jsPDF} from 'jspdf'
import {saveAs} from 'file-saver'
@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {
 

  constructor() { }

  captureScreenshot(componentId: string): Promise<string> {
    const componentElement = document.getElementById(componentId);
    return html2canvas(componentElement, {
      scrollY: -window.scrollY,
      useCORS: true,
    }).then((canvas: HTMLCanvasElement) => {
      return canvas.toDataURL('image/png');
    });
  }
  
   
  
  captureScreenshots(): Promise<string[]> {
    const analysisComponentId = 'analysisComponent';
    const clusterAnalysisComponentId = 'clusterAnalysisComponent';
  
   
  
    const promises = [
      this.captureScreenshot(analysisComponentId),
      this.captureScreenshot(clusterAnalysisComponentId),
    ];
  
   
  
    return Promise.all(promises);
  }

  convertImageToPDF(image: HTMLImageElement): Promise<Blob> {
    return new Promise<Blob>((resolve) => {
      const pdf = new jsPDF('p', 'px', [image.width, image.height]);
      const canvas = document.createElement('canvas');
      canvas.width = image.width;
      canvas.height = image.height;
  
   
  
      const ctx = canvas.getContext('2d');
      ctx.drawImage(image, 0, 0, image.width, image.height);
  
   
  
      canvas.toBlob((blob) => {
        resolve(blob);
      }, 'image/jpeg');
    });
  }
  
  
  triggerDownload(pdfBlob: Blob, fileName: string): void {
    console.log(pdfBlob)
   saveAs(pdfBlob, fileName)
  }
 
  downloadPDF(): void {
    this.captureScreenshots().then((screenshots: string[]) => {
      const combinedImage = this.combineImages(screenshots);
      this.convertImageToPDF(combinedImage).then((pdfBlob: Blob) => {
        this.triggerDownload(pdfBlob, 'analysis.pdf');
      });
    });
  }
  
 
   
  
  combineImages(screenshots: string[]): HTMLImageElement {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
  
   
  
    const images = screenshots.map((screenshot) => {
      const img = new Image();
      img.src = screenshot;
      return img;
    });
  
   
  
    canvas.width = Math.max(...images.map((img) => img.width));
    canvas.height = images.reduce((sum, img) => sum + img.height, 0);
  
   
  
    let offsetY = 0;
    images.forEach((img) => {
      ctx.drawImage(img, 0, offsetY);
      offsetY += img.height;
    });
  
   
  
    const combinedImage = new Image();
    combinedImage.src = canvas.toDataURL('image/png');
  
   
  
    return combinedImage;
  }
  
   
  
 
  
 
 
  ngOnInit() {
   
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
