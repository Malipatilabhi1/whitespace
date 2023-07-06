import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Options } from 'ng5-slider';
import { GeneralServiceService } from '../general-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-segments',
  templateUrl: './segments.component.html',
  styleUrls: ['./segments.component.css']
})
export class SegmentsComponent implements OnInit {
isMapped:boolean=false;
selectedSegmentName: string;

isEditing: boolean = false;
  showIframe = false;
 data ={
  "clusters": [
    {
      "name": "Ambitious Professionals",
      "characteristics": ['Progressive individuals','higher income' ,' distinguished designation',' substantial expense', 'brand loyalty'],
      "functional_need": ['High-quality',' performance-oriented shampoo products'],
      "emotional_need": ['Confidence',' satisfaction in appearance']
    },
    {
      "name": "Nature Enthusiasts",
      "characteristics": ['Individuals inclined towards natural ingredients',' hair goals, satisfaction'],
      "functional_need": ['Shampoos with natural ingredients', 'specific hair care benefits'],
      "emotional_need": ['Connection to nature', 'promoting environmental sustainability']
    },
    {
      "name": "Social Butterflies",
      "characteristics": ['Sociable individuals, enjoy socializing', 'value company', 'frequent users'],
      "functional_need": ['Shampoos that provide freshness',' long-lasting fragrance'],
      "emotional_need": ['Refreshment', 'confidence during social interactions']
    },
    {
      "name": "Value Seekers",
      "characteristics": ['Budget-conscious individuals', 'consider income', 'expenditure', 'pack size'],
      "functional_need": ['Cost-effective shampoos without compromising quality'],
      "emotional_need": ['Feeling smart', 'practical in purchasing decisions']
    },
    {
      "name": "Performance Seekers",
      "characteristics": ['Performance-oriented individuals, brand loyalty', 'hair goals, satisfaction'],
      "functional_need": ['Shampoos that deliver on specific hair care goals'],
      "emotional_need": ['Feeling accomplished', 'satisfied with shampoo results']
    },
    {
      "name": "Adventurous Explorers",
      "characteristics": ['Carefree', 'spontaneous individuals', 'enjoy letting go', 'planning', 'experimentation'],
      "functional_need": ['Shampoos with innovative features','unique benefits'],
      "emotional_need": ['Freedom', 'the thrill of exploring new possibilities']
    }
  ]
}
segmentNames = this.data.clusters.map((segment, index) => `Segment ${index}`);

selectedSegment: any;
segmentStatus: string[] = [];
  ngOnInit(): void {
    // this.getSegments();
    this.segmentStatus = Array(this.data.clusters.length).fill('In Progress');
   
  }
  segmentDone: boolean[] = new Array(this.data.clusters.length).fill(false);

  markSegmentAsDone(index: number) {
    this.segmentDone[index] = true;
    this.segmentStatus[index] = '';
  }
  
  sliderValue: number = 0;
  sliderValue1: number = 0;
  sliderValue2: number = 0;
  sliderValue3: number = 0;
  sliderValue4: number = 0;
  sliderValue5: number = 0;

  formatLabel(value: number) {
    return value + '%'; // Example formatting, you can customize this as per your requirement
  }
constructor(private gs: GeneralServiceService, private http: HttpClient){
  
 
}
@ViewChild('content', {static:false})el!:ElementRef;
capture(){
  this.captureScreen()
}

// getSegments(){
//   debugger
//   this.http.post('http://3.111.229.37:5000/update_personas',{
//   "query":"Give me a different name for cluster or segment 2. Output only the name."
// }).subscribe(res=>{
//     console.log("res", res)
//   })
// }


  private captureScreen() {
    const element = this.el.nativeElement;
    this.gs.captureScreen(element);
  }

openIframe() {
  this.showIframe = true;
}

displaySegmentName(segmentName: string) {
  this.selectedSegmentName = segmentName;
}
saveSegmentCharacteristics(segment: any) {
  // Perform any necessary validation or saving logic here
  console.log("Saved segment characteristics:", segment.characteristics);
}

enableEditing() {
  this.isEditing = true;
}
deleteCharacteristic(segment: any, index: number) {
  segment.characteristics.splice(index, 1);
}
addCharacteristic(segment: any) {
  segment.characteristics.push(''); // Add an empty string as a new characteristic
}
 

saveSegmentFunctionalNeeds(segment: any) {
  // Perform any necessary validation or saving logic here
  console.log("Saved segment functional needs:", segment.functional_need);
}

enableFunctionalNeedsEditing() {
  this.isEditing = true;
}

deleteFunctionalNeed(segment: any, index: number) {
  segment.functional_need.splice(index, 1);
}

addFunctionalNeed(segment: any) {
  segment.functional_need.push(''); // Add an empty string as a new functional need
}

saveSegmentEmotionalNeeds(segment: any) {
  // Perform any necessary validation or saving logic here
  console.log("Saved segment emotional needs:", segment.emotional_need);
}

enableEmotionalNeedsEditing() {
  this.isEditing = true;
}

deleteEmotionalNeed(segment: any, index: number) {
  segment.emotional_need.splice(index, 1);
}

addEmotionalNeed(segment: any) {
  segment.emotional_need.push(''); // Add an empty string as a new emotional need
}
  sliderValues: number[] = [0, 0, 0, 0, 0, 0];
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