import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.css']
})
export class AnalysisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
