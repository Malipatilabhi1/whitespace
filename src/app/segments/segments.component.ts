import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Options } from 'ng5-slider';
import { GeneralServiceService } from '../general-service.service';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { MatTabGroup } from '@angular/material/tabs';
import { Router } from '@angular/router';
interface Message {
  content: string;
  sender: 'user' | 'bot';
}

interface FAQ {
  question: string;
  answer: string;
}


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
 data =
  [
    {
      "name": "Dynamic Achiever",
      "characteristics": [
        "Highly discerning about viscosity",
        "Owns a car",
        "Male gender dominant",
        "Seeks high satisfaction",
        "Tends to be judgemental"
      ],
      "functional_need": [
        "Effective cleansing",
        "Visibly thicker hair"
      ],
      "emotional_need": [
        "Desires validation and recognition"
      ]
    },
    {
      "name": "Fashionable Trendsetter",
      "characteristics": [
        "Highly conscious about looks",
        "Owns a car",
        "Prefers voluminous lather",
        "Female gender dominant",
        "Looks for protein in products"
      ],
      "functional_need": [
        "Enhanced hair appearance",
        "Ample foam and lather"
      ],
      "emotional_need": [
        "Seeks admiration and attention"
      ]
    },
    {
      "name": "Nurturing Optimist",
      "characteristics": [
        "Values softness and gentleness",
        "Both genders present",
        "Tends to be non-judgemental",
        "Experiences occasional regret",
        "Considers pH balance"
      ],
      "functional_need": [
        "Nourishing and gentle care",
        "Improves hair softness"
      ],
      "emotional_need": [
        "Seeks emotional well-being"
      ]
    },
    {
      "name": "Adventurous Explorer",
      "characteristics": [
        "Prefers variety in product usage",
        "Owns a car",
        "Enjoys planning ahead",
        "Both genders present",
        "Attracted by aromas"
      ],
      "functional_need": [
        "Exploration of new products",
        "Unique and pleasant scent"
      ],
      "emotional_need": [
        "Seeks excitement and novelty"
      ]
    },
    {
      "name": "Balanced Provider",
      "characteristics": [
        "Has dependents in the family",
        "Both genders present",
        "Varied income levels",
        "Consistent product usage duration",
        "Values oil removal properties"
      ],
      "functional_need": [
        "Gentle cleansing",
        "Effective oil removal"
      ],
      "emotional_need": [
        "Desires stability and care for loved ones"
      ]
    },
    {
      "name": "Free-spirited Enthusiast",
      "characteristics": [
        "Believes in letting go of things",
        "Both genders present",
        "Considers shampoo spend",
        "Occasionally experiences regret",
        "Values good looks"
      ],
      "functional_need": [
        "Refreshing and invigorating cleanse",
        "Enhanced appearance"
      ],
      "emotional_need": [
        "Seeks liberation and self-expression"
      ]
    }
]
    // data:any=[];

    questions: FAQ[] = [
      {
        question: 'How can I place an order?',
        answer: 'To place an order, ...'
      },
      {
        question: 'What are the shipping options?',
        answer: 'We offer several shipping options, ...'
      },
      {
        question: 'How do I return an item?',
        answer: 'To return an item, ...'
      }
    ];
selectedSegment: any;
segmentStatus: string[] = [];
  progressValue: number=0;
  selectedTab: string;

  ngOnInit(): void {
            //  this.getSegments();
          // this.updateSegment();
        this.route.paramMap.subscribe(params => {
          this.selectedTab = params.get('tab');
          console.log( this.selectedTab)
        });

    //     const storedSegmentDone = localStorage.getItem('segmentDone');
    // if (storedSegmentDone) {
    //   this.segmentDone = JSON.parse(storedSegmentDone);
    // } else {
    //   this.segmentDone = Array(this.data.length).fill(false);
    // }
    this.sliderValues = Array(this.data.length).fill(0);
   }
   allSegmentsDone: boolean = false;
   
   checkAllSegmentsDone() {
     this.allSegmentsDone = this.segmentDone.every(done => done);
   }
   
  
   
      
      segmentDone: boolean[] = [];
  // segmentDone: boolean[] = new Array(this.data.length).fill(false);

  markSegmentAsDone(index: number) {
    this.segmentDone[index] = true;
    this.checkAllSegmentsDone();
    // Store segmentDone array in localStorage
    localStorage.setItem('segmentDone', JSON.stringify(this.segmentDone));
    this.segmentStatus[index] = '';
  }
  isSegmentDone(index: number) {
    return this.segmentDone[index];
  }
  
  
  slidervalue(value:any){
    console.log(value)
  }
  @ViewChild('tabGroup') tabGroup: MatTabGroup;
  onTabChange(event: number) {
    
    this.sliderValues =[0]
  }
  formatLabel(value: number) {
    return value + '%'; // Example formatting, you can customize this as per your requirement
  }
constructor(private gs: GeneralServiceService, private http: HttpClient, private route: ActivatedRoute, private router: Router){
  
  this.segmentDone = Array(this.data.length).fill(false);
}
selectQuestion(question: string): void {
  // Send the selected question to the backend API
  const selectedQuestion = this.questions.find((q) => q.question === question);
  if (selectedQuestion) {
    this.http.post('API_URL', { question: selectedQuestion.question }).subscribe(
      (response) => {
        // Handle the API response as needed
        console.log('API response:', response);
      },
      (error) => {
        console.log('Error sending question:', error);
      }
    );
  }
}


@ViewChild('content', {static:false})el!:ElementRef;
capture(){
  this.captureScreen()
}
data1:any=[];
segments1: any[] = [
  { name: 'Aroma', value:0.76 },
  { name: 'Long Lasting Hold', value:0.6 },
  { name: 'Clean Scalp', value:0.62 },
  { name: 'Maintenance', value:0.67 },
  { name: 'Volume and Bounce', value:0.64 }
];
segments2: any[] = [
  { name: 'Aroma', value:0.76 },
  { name: 'Long Lasting Hold', value:0.6 },
  { name: 'Clean Scalp', value:0.62 },
  { name: 'Maintenance', value:0.67 },
  { name: 'Volume and Bounce', value:0.64 }
];

segments3: any[] = [
  { name: 'Aroma', value:0.76 },
  { name: 'Long Lasting Hold', value:0.6 },
  { name: 'Clean Scalp', value:0.62 },
  { name: 'Maintenance', value:0.67 },
  { name: 'Volume and Bounce', value:0.64 }
];
segments4: any[] = [
  { name: 'Aroma', value:0.76 },
  { name: 'Long Lasting Hold', value:0.6 },
  { name: 'Clean Scalp', value:0.62 },
  { name: 'Maintenance', value:0.67 },
  { name: 'Volume and Bounce', value:0.64 }
];
segments5: any[] = [
  { name: 'Aroma', value:0.76 },
  { name: 'Long Lasting Hold', value:0.6 },
  { name: 'Clean Scalp', value:0.62 },
  { name: 'Maintenance', value:0.67 },
  { name: 'Volume and Bounce', value:0.64 }
];
segments6: any[] = [
  { name: 'Aroma', value:0.76 },
  { name: 'Long Lasting Hold', value:0.6 },
  { name: 'Clean Scalp', value:0.62 },
  { name: 'Maintenance', value:0.67 },
  { name: 'Volume and Bounce', value:0.64 }
];
sliderValues: number[] = [];

slidervalues(value: number) {
  console.log(value);
}
//  segmentNames:any;
// getSegments(){
//   debugger
//   this.http.get('').subscribe(res=>{
//     console.log("res", res)
//     this.data1= res;
//      this.data = this.data1.segments;
//   })
// }
// public isLoading: boolean = false;
// showLoading() { this.isLoading = true; } hideLoading() { this.isLoading = false; }
// getSegments() {
//   this.showLoading(); 

//   this.http.get('', { observe: 'events', reportProgress: true }).subscribe(
//     event => {
//       if (event.type === HttpEventType.DownloadProgress) {
//         this.progressValue = Math.round(100 * event.loaded / event.total); 
//       } else if (event.type === HttpEventType.Response) {
//         console.log("res", event.body);
//         this.data1 = event.body;
//         this.data = this.data1.segments;
//       }
//     },
//     error => {
//       console.error("Error occurred:", error);
//     },
//     () => {
//       this.hideLoading(); // Hide progress bar
//       this.progressValue = 0; // Reset progress value
//     }
//   );
// }
updatedData:any=[];
isLoading: boolean = false;

delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

updateSegment(segmentNumber: number) {
  this.isLoading = true; // Display the loader

  const apiUrl = 'http://3.111.229.37:5000/faq_hardcoded_ReGenerateSegment';
  const requestBody = { "seg_num": segmentNumber };

  this.http.post(apiUrl, requestBody).subscribe(
    async (response) => {
      // Handle the response if needed
      console.log('API response Regenerate:', response);
       // Simulate the delay for 3 seconds
       await this.delay(3000);

      this.data = [];
      this.data1 = [];
      this.data1 = response;
      this.data = this.data1.segments;
      console.log("rege", this.data1.segments);

     
      this.isLoading = false; // Hide the loader
    },
    (error) => {
      // Handle errors if the API call fails
      console.error('API error:', error);
      this.isLoading = false; // Hide the loader in case of error
    }
  );
}

  private captureScreen() {
    const element = this.el.nativeElement;
    this.gs.captureScreen(element);
  }


  userMessage = '';
  messages: Message[] = [];
  apiUrl = 'http://3.111.229.37:5000/faq_updateDetails';


  sendMessage(): void {
    if (this.userMessage.trim() === '') {
      return;
    }
  
    this.messages.push({ content: this.userMessage, sender: 'user' });
  
    // Send the user message to the backend API
    this.http.post<any>(this.apiUrl, { query: this.userMessage }).subscribe(
      (response) => {
        // Handle the API response as needed
        console.log('API response:', response);
  
        const keys = Object.keys(response);
        keys.forEach((key) => {
          if (Array.isArray(response[key]) && response[key].length > 0) {
            const joinedContent = response[key].join(', ');
            const botResponse: Message = {
              content: joinedContent,
              sender: 'bot'
            };
            this.messages.push(botResponse);
          }
        });
      },
      (error) => {
        console.log('Error sending question:', error);
      }
    );
  
    this.userMessage = '';
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
  // sliderValues: number[] = [0, 0, 0, 0, 0, 0];
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
  isLoading1 = false;
  nextPage(){
    this.isLoading1 = true; // Show the progress bar
  
    setTimeout(() => {
      this.router.navigate(['./whitespaceAnalysis']).then(() => {
        this.isLoading1 = false; // Hide the progress bar when navigation is complete
      });
    }, 3000); // Delay of 3 seconds
   
  }
}