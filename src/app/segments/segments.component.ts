import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Options } from 'ng5-slider';
import { GeneralServiceService } from '../general-service.service';
 

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

  ngOnInit(): void {
   
  }
  


constructor(private gs: GeneralServiceService){
  
 
}
@ViewChild('content', {static:false})el!:ElementRef;
capture(){
  this.captureScreen()
}
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