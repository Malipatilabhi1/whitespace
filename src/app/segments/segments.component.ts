import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
import { Subject } from 'rxjs';

 

@Component({
  selector: 'app-segments',
  templateUrl: './segments.component.html',
  styleUrls: ['./segments.component.css']
})
export class SegmentsComponent implements OnInit {
  isMapped: boolean = false;
  segments: any = [
    {
      name: 'Segment 1',
      ename:'Self Obsessed Flamboyant',
      image:'http://52.172.146.146:3000/download-file?filepath=/home/evolutadmin/Backend/Database/HealthCare/PopulationHealth/Patient_Images/PID2.jpg',
      segmentCharacteristics: [
        'Self-obsessed about their looks',
        'Need continuous validation of their good look',
        'Highly affluent',
        'Moderate affinity towards trial of new products'
      ],
      functionalNeeds: ['Squeaky clean', 'Deposit removal'],
      functionalNeeds2: ['Likes being noticed', 'Likes being talked about']
    },
    {
      name: 'Segment 2',
      ename:'Nonchalant socialite',
      image:'http://52.172.146.146:3000/download-file?filepath=/home/evolutadmin/Backend/Database/HealthCare/PopulationHealth/Patient_Images/PID7.jpg',
      segmentCharacteristics: [
        'Carefree and easygoing',
        'Work hard, party hard',
        'Fairly affluent',
        'Highly independent'
      ],
      functionalNeeds: ['Long-lasting style', 'Less maintenance'],
      functionalNeeds2: ['Likes being noticed', 'Enjoys freedom']
    },
    {
      name: 'Segment 3',
      ename:'One And Out Purist',
      image:'http://52.172.146.146:3000/download-file?filepath=/home/evolutadmin/Backend/Database/HealthCare/PopulationHealth/Patient_Images/PID4.jpg',
      segmentCharacteristics: [
        'Highly Organized',
        'Knows what they want',
        'Mostly use an assortment of products',
        'But highly loyal to their respective brands'
      ],
      functionalNeeds: ['Multi-dimentional aspects of hair- quality, volume, cleanliness, PH balance etc.'],
      functionalNeeds2: ['Likes being reassured', 'Stay in control']
    },
    {
      name: 'Segment 4',
      ename:'Focused Sensible',
      image:'http://52.172.146.146:3000/download-file?filepath=/home/evolutadmin/Backend/Database/HealthCare/PopulationHealth/Patient_Images/PID9.jpg',
      segmentCharacteristics: [
        'Highly self-aware',
        'purpose based usage',
        'Do not compromise on their need',
        'Mostly loyal'
      ],
      functionalNeeds: ['specific needs-anti dandruff, hairfall prevention, support hair growth etc'],
      functionalNeeds2: ['Hates diversions', 'Likes being reassured']
    },
    {
      name: 'Segment 5',
      ename:'Frugal Aspirant',
      image:'http://52.172.146.146:3000/download-file?filepath=/home/evolutadmin/Backend/Database/HealthCare/PopulationHealth/Patient_Images/PID2.jpg',
      segmentCharacteristics: [
        'Moderate aspiration for good look but mostly budget oriented',
        'Balance between work and play',
        'Preference for smaller pack size'
      ],
      functionalNeeds: ['Cheap', 'Reliable'],
      functionalNeeds2: ['Likes being noticed', 'Likes being reassured']
    },
    {
      name: 'Segment 6',
      ename:'Perpetual Hoverer',
      image:'http://52.172.146.146:3000/download-file?filepath=/home/evolutadmin/Backend/Database/HealthCare/PopulationHealth/Patient_Images/PID3.jpg',
      segmentCharacteristics: [
        'Defined need but generally unsatisified with their products',
        'Highly affluent',
        'Exuberant trialists',
        'High propensity to defect'
      ],
      functionalNeeds: ['Novelty'],
      functionalNeeds2: ['Feel Optimistic', 'Feel Free']
    },
  ];

 

  selectedSegment: any;



  ngOnInit(): void {
    this.loadSavedData();
  }
constructor(){
   this.selectedSegment = this.segments[0]
}
 

  selectSegment(segment: any): void {
    this.selectedSegment = segment ;
     this.isMapped=false;
  }

  saveSegment() {
    this.isMapped = true;
    if (this.selectedSegment) {
  
      this.selectedSegment.status = 'saved';
  
      console.log('Segment saved:', this.selectedSegment);
  
    }
  
  }
  
  

  
  getSegmentStatus(segment: any): string {
  
    if (segment === this.selectedSegment) {
  
      return 'In-progress';
  
    } else {
  
      return segment.status || 'Not started';
  
    }
  
  }
  
  addCharacteristic(): void {
    this.selectedSegment.segmentCharacteristics.push('');
    this.saveData();
  }

 

  addFunctionalNeed(): void {
    this.selectedSegment.functionalNeeds.push('');
    this.saveData();
  }

 

  addFunctionalNeed2(): void {
    this.selectedSegment.functionalNeeds2.push('');
    this.saveData();
  }

 

  removeCharacteristic(index: number): void {
    this.selectedSegment.segmentCharacteristics.splice(index, 1);
    this.saveData();
  }

 

  removeFunctionalNeed(index: number): void {
    this.selectedSegment.functionalNeeds.splice(index, 1);
    this.saveData();
  }

 

  removeFunctionalNeed2(index: number): void {
    this.selectedSegment.functionalNeeds2.splice(index, 1);
    this.saveData();
  }

 

  saveData(): void {
    localStorage.setItem('segments', JSON.stringify(this.segments));
  }

 

  loadSavedData(): void {
    const savedSegments = localStorage.getItem('segments');
    if (savedSegments) {
      this.segments = JSON.parse(savedSegments);
       this.selectedSegment= this.segments[0]
    }
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