import { Component,  OnInit } from '@angular/core';
import {Options} from 'ng5-slider'

@Component({
  selector: 'app-segments',
  templateUrl: './segments.component.html',
  styleUrls: ['./segments.component.css']
})
export class SegmentsComponent implements OnInit {
  

 

  ngOnInit(): void {
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
  }
 
}
