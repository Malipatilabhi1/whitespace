import { Component,  OnInit } from '@angular/core';
import {Options} from 'ng5-slider'

@Component({
  selector: 'app-segments',
  templateUrl: './segments.component.html',
  styleUrls: ['./segments.component.css']
})
export class SegmentsComponent implements OnInit {
  

 isMapped: boolean = false;
 segmentCharacteristics: string[] = [];
 functionalNeeds: string[] = [];
 functionalNeeds2: string[] = [];



 ngOnInit(): void {
   this.loadSavedData();
 }



 loadSavedData(): void {
   const savedSegmentCharacteristics = localStorage.getItem('segmentCharacteristics');
   const savedFunctionalNeeds = localStorage.getItem('functionalNeeds');
   const savedFunctionalNeeds2 = localStorage.getItem('functionalNeeds2');



   if (savedSegmentCharacteristics) {
     this.segmentCharacteristics = JSON.parse(savedSegmentCharacteristics);
   }



   if (savedFunctionalNeeds) {
     this.functionalNeeds = JSON.parse(savedFunctionalNeeds);
   }



   if (savedFunctionalNeeds2) {
     this.functionalNeeds2 = JSON.parse(savedFunctionalNeeds2);
   }
 }



 saveData(): void {
   localStorage.setItem('segmentCharacteristics', JSON.stringify(this.segmentCharacteristics));
   localStorage.setItem('functionalNeeds', JSON.stringify(this.functionalNeeds));
   localStorage.setItem('functionalNeeds2', JSON.stringify(this.functionalNeeds2));
 }



 addCharacteristic(): void {
   this.segmentCharacteristics.push('');
   this.saveData();
 }



 addFunctionalNeed(): void {
   this.functionalNeeds.push('');
   this.saveData();
 }



 addFunctionalNeed2(): void {
   this.functionalNeeds2.push('');
   this.saveData();
 }



 removeCharacteristic(index: number): void {
   this.segmentCharacteristics.splice(index, 1);
   this.saveData();
 }



 removeFunctionalNeed(index: number): void {
   this.functionalNeeds.splice(index, 1);
   this.saveData();
 }



 removeFunctionalNeed2(index: number): void {
   this.functionalNeeds2.splice(index, 1);
   this.saveData();
 }

  sliderValues: number[] = [50, 10, 20, 70, 30, 60];
  sliderOptions: Options = {
    floor: 0,
    ceil: 100,
    showSelectionBar: true,
    getSelectionBarColor: (value: number) => {
      if (value >= 0 && value <= 100) {
        return 'blue';
      }
      return '';
    }
  };

 

  logAllSliderValues() {
    console.log('Slider Values:', this.sliderValues);
    this.isMapped = true;
  }
 
}
