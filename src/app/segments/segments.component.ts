import { Component,  OnInit } from '@angular/core';
import {Options} from 'ng5-slider'
import { Subject } from 'rxjs'; 

@Component({
  selector: 'app-segments',
  templateUrl: './segments.component.html',
  styleUrls: ['./segments.component.css']
})
export class SegmentsComponent implements OnInit {
 isMapped: boolean = false;

 segmentCharacteristics: string[] = [
  'self obsessed about their looks',
  'Need Continuous validation of their good look',
  'Highly Affluent',
  'Moderate affinity towards trial of new products'
];



functionalNeeds: string[] = [
  'Squaky clean',
  'Deposit Removal',
  
];



functionalNeeds2: string[] = [
  'Likes being noticed',
  'Likes being talked about'
];

segmentCharacteristicsSocialite1: string[] = [
  'Care free and easy going',
  'Work hard-party hard',
  'Fairly Affluent',
  'Highly Independent'
];



functionalNeedsSocialite: string[] = [
  'Long Lasting Style',
  'Less Maintenance',
  
];



functionalNeeds2Socialite: string[] = [
  'Likes being noticed',
  'Enjoys Freedom'
];



ngOnInit(): void {
  this.loadSavedData();
  this.saveData()
}



loadSavedData(): void {
  const savedSegmentCharacteristics = localStorage.getItem('segmentCharacteristics');
  const savedFunctionalNeeds = localStorage.getItem('functionalNeeds');
  const savedFunctionalNeeds2 = localStorage.getItem('functionalNeeds2');
  const savedSegmentCharacteristicsSocialite1 = localStorage.getItem('segmentCharacteristicsSocialite1');
  const savedFunctionalNeedsSocialite = localStorage.getItem('functionalNeedsSocialite');
  const savedFunctionalNeeds2Socialite = localStorage.getItem('functionalNeeds2Socialite');


  if (savedSegmentCharacteristics) {
    this.segmentCharacteristics = JSON.parse(savedSegmentCharacteristics);
  }



  if (savedFunctionalNeeds) {
    this.functionalNeeds = JSON.parse(savedFunctionalNeeds);
  }



  if (savedFunctionalNeeds2) {
    this.functionalNeeds2 = JSON.parse(savedFunctionalNeeds2);
  }
  if (savedSegmentCharacteristicsSocialite1) {
    this.segmentCharacteristicsSocialite1 = JSON.parse(savedSegmentCharacteristicsSocialite1);
  }



  if (savedFunctionalNeedsSocialite) {
    this.functionalNeedsSocialite = JSON.parse(savedFunctionalNeedsSocialite);
  }



  if (savedFunctionalNeeds2Socialite) {
    this.functionalNeeds2 = JSON.parse(savedFunctionalNeeds2Socialite);
  }
}


saveData(): void {
  localStorage.setItem('segmentCharacteristics', JSON.stringify(this.segmentCharacteristics));
  localStorage.setItem('functionalNeeds', JSON.stringify(this.functionalNeeds));
  localStorage.setItem('functionalNeeds2', JSON.stringify(this.functionalNeeds2));
  localStorage.setItem('segmentCharacteristicsSocialite1', JSON.stringify(this.segmentCharacteristicsSocialite1));
  localStorage.setItem('functionalNeedsSocialite', JSON.stringify(this.functionalNeedsSocialite));
  localStorage.setItem('functionalNeeds2Socialite', JSON.stringify(this.functionalNeeds2Socialite));
}



addCharacteristic(): void {
  this.segmentCharacteristics.push('');
  this.saveData();
}

addCharacteristicSocialite(): void {
  this.segmentCharacteristicsSocialite1.push('');
  this.saveData();
}



addFunctionalNeed(): void {
  this.functionalNeeds.push('');
  this.saveData();
}

addFunctionalNeedSocialite(): void {
  this.functionalNeedsSocialite.push('');
  this.saveData();
}



addFunctionalNeed2(): void {
  this.functionalNeeds2.push('');
  this.saveData();
}

addFunctionalNeed2Socialite(): void {
  this.functionalNeeds2Socialite.push('');
  this.saveData();
}

removeCharacteristic(index: number): void {
  this.segmentCharacteristics.splice(index, 1);
  this.saveData();
}

removeCharacteristicSocialite(index: number): void {
  this.segmentCharacteristicsSocialite1.splice(index, 1);
  this.saveData();
}

removeFunctionalNeed(index: number): void {
  this.functionalNeeds.splice(index, 1);
  this.saveData();
}

removeFunctionalNeedSocialite(index: number): void {
  this.functionalNeedsSocialite.splice(index, 1);
  this.saveData();
}


removeFunctionalNeed2(index: number): void {
  this.functionalNeeds2.splice(index, 1);
  this.saveData();
}

removeFunctionalNeed2Socialite(index: number): void {
  this.functionalNeeds2Socialite.splice(index, 1);
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
