import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Options } from 'ng5-slider';
import { GeneralServiceService } from '../general-service.service';
import { HttpClient, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-segments',
  templateUrl: './segments.component.html',
  styleUrls: ['./segments.component.css']
})
export class SegmentsComponent implements OnInit {
isMapped:boolean=false;
selectedSegmentName:string;

isEditing: boolean = false;
  showIframe = false;
//  data =
//   [
//     {
//         "characteristics": [
//             "Trendsetter with a preference for viscous shampoos",
//             "Owns a car",
//             "Gender-neutral",
//             "Satisfied with current shampoo",
//             "Non-judgemental"
//         ],
//         "emotional_need": [
//             "Wants to stand out",
//             "Seeks validation"
//         ],
//         "functional_need": [
//             "Thick and heavy texture",
//             "Long-lasting fragrance"
//         ],
//         "name": [
//             "Viscous Trendsetter"
//         ]
//     },
//     {
//         "characteristics": [
//             "Stylish individual with a preference for protein-infused shampoos",
//             "Owns a car",
//             "Lathers well",
//             "Gender-neutral",
//             "Values hair health"
//         ],
//         "emotional_need": [
//             "Seeks admiration",
//             "Desires healthy-looking hair"
//         ],
//         "functional_need": [
//             "Enhanced hair appearance",
//             "Strengthens hair"
//         ],
//         "name": [
//             "Stylish Protein Lover"
//         ]
//     },
//     {
//         "characteristics": [
//             "Individual with soft hair who reflects on their decisions",
//             "Gender-neutral",
//             "Non-judgemental",
//             "Often regrets past actions",
//             "Values pH balance"
//         ],
//         "emotional_need": [
//             "Desires self-reflection",
//             "Seeks emotional stability"
//         ],
//         "functional_need": [
//             "Softens hair",
//             "Maintains pH balance"
//         ],
//         "name": [
//             "Soft and Reflective"
//         ]
//     },
//     {
//         "characteristics": [
//             "Individual who plans ahead and enjoys aromatherapy",
//             "Owns a car",
//             "Prefers planning",
//             "Gender-neutral",
//             "Appreciates pleasant scents"
//         ],
//         "emotional_need": [
//             "Values organization",
//             "Seeks calming experiences"
//         ],
//         "functional_need": [
//             "Long-term usage",
//             "Aromatherapy benefits"
//         ],
//         "name": [
//             "Planning Aromatherapist"
//         ]
//     },
//     {
//         "characteristics": [
//             "Individual with dependents who fights oiliness",
//             "Gender-neutral",
//             "Varied income",
//             "Has used the same brand for a while",
//             "Values oil removal"
//         ],
//         "emotional_need": [
//             "Cares for family",
//             "Seeks oil-free hair"
//         ],
//         "functional_need": [
//             "Efficient oil removal",
//             "Suitable for regular use"
//         ],
//         "name": [
//             "Dependent Oil Fighter"
//         ]
//     },
//     {
//         "characteristics": [
//             "Free-spirited individual who regrets past decisions",
//             "Gender-neutral",
//             "Budget-conscious",
//             "Often regrets past actions",
//             "Values appearance"
//         ],
//         "emotional_need": [
//             "Values freedom",
//             "Seeks self-improvement"
//         ],
//         "functional_need": [
//             "Affordable options",
//             "Cleanses hair effectively"
//         ],
//         "name": [
//             "Free-Spirited Regretter"
//         ]
//     }
// ]
    data:any=[];


selectedSegment: any;
segmentStatus: string[] = [];
  progressValue: number=0;
  ngOnInit(): void {
           this.getSegments();
        // this.updateSegment();
  }
  segmentDone: boolean[] = new Array(this.data.length).fill(false);

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
  slidervalues(value:any){
    console.log(value)
  }
  formatLabel(value: number) {
    return value + '%'; // Example formatting, you can customize this as per your requirement
  }
constructor(private gs: GeneralServiceService, private http: HttpClient){
  
 
}
@ViewChild('content', {static:false})el!:ElementRef;
capture(){
  this.captureScreen()
}
data1:any=[];
//  segmentNames:any;
// getSegments(){
//   debugger
//   this.http.get('http://3.111.229.37:5000/get_all_personas').subscribe(res=>{
//     console.log("res", res)
//     this.data1= res;
//      this.data = this.data1.segments;
//   })
// }
public isLoading: boolean = false;
showLoading() { this.isLoading = true; } hideLoading() { this.isLoading = false; }
getSegments() {
  this.showLoading(); // Show progress bar

  this.http.get('http://3.111.229.37:5000/get_all_personas', { observe: 'events', reportProgress: true }).subscribe(
    event => {
      if (event.type === HttpEventType.DownloadProgress) {
        this.progressValue = Math.round(100 * event.loaded / event.total); // Update progress value
      } else if (event.type === HttpEventType.Response) {
        console.log("res", event.body);
        this.data1 = event.body;
        this.data = this.data1.segments;
      }
    },
    error => {
      console.error("Error occurred:", error);
    },
    () => {
      this.hideLoading(); // Hide progress bar
      this.progressValue = 0; // Reset progress value
    }
  );
}
updatedData:any=[];
updateSegment(){
  this.http.post('http://3.111.229.37:5000/update_personas',
{
    "query":"Can you re-generate the segment 2 deatils little differently."
}
  ).subscribe(res=>{
    // this.updatedData = res;
    this.data=[];
    this.data1=[];
    this.data1=res;
    this.data = JSON.parse(this.data1.chatgpt_response).segments;
    console.log(res);
    console.log(this.data);
    // chatgpt_response
  })
}

  private captureScreen() {
    const element = this.el.nativeElement;
    this.gs.captureScreen(element);
  }

openIframe() {
  this.showIframe = true;
}

displaySegmentName(segmentName: any) {
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