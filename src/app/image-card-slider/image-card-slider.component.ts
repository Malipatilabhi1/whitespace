// import { Component, ViewChild, ElementRef } from '@angular/core';

// @Component({
//   selector: 'app-image-card-slider',
//   templateUrl: './image-card-slider.component.html',
//   styleUrls: ['./image-card-slider.component.css'],
// })
// export class ImageCardSliderComponent {
//   @ViewChild('sliderContainer') sliderContainer: ElementRef;
//   imageCards = [
//     {
//       title: 'Card 1',
//       imageUrl: 'Image1.png',
//     },
//     {
//       title: 'Card 2',
//       imageUrl: 'Image2.png',
//     },
//     {
//       title: 'Card 2',
//       imageUrl: 'Image3.png',
//     },
//     {
//       title: 'Card 1',
//       imageUrl: 'Image1.png',
//     },
//     {
//       title: 'Card 2',
//       imageUrl: 'Image2.png',
//     },
//     {
//       title: 'Card 2',
//       imageUrl: 'Image3.png',
//     },
   
   
//   ];
//   currentIndex = 0;

//   // Navigation functions
//   prevSlide() {
//     console.log('prev')
//     this.currentIndex = Math.max(this.currentIndex - 1, 0);
//     this.scrollToCurrentIndex();
//   }

//   nextSlide() {
//     this.currentIndex = Math.min(this.currentIndex + 1, this.imageCards.length - 1);
//     this.scrollToCurrentIndex();
//   }

//   scrollToCurrentIndex() {
//     if (this.sliderContainer && this.sliderContainer.nativeElement) {
//       const cardWidth = this.sliderContainer.nativeElement.offsetWidth;
//       this.sliderContainer.nativeElement.scrollLeft = this.currentIndex * cardWidth;
//     }
//   }
// }
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-image-card-slider',
  templateUrl: './image-card-slider.component.html',
  styleUrls: ['./image-card-slider.component.css'],
})
export class ImageCardSliderComponent {
  @ViewChild('sliderContainer') sliderContainer: ElementRef;
  imageCards = [
    {
      title: 'Card 1',
      imageUrl: 'Image3.png',
    },
    {
      title: 'Card 2',
      imageUrl: 'Image2.png',
    },
    {
      title: 'Card 2',
      imageUrl: 'Image1.png',
    },
    {
      title: 'Card 1',
      imageUrl: 'Image3.png',
    },
    {
      title: 'Card 2',
      imageUrl: 'Image2.png',
    },
    {
      title: 'Card 2',
      imageUrl: 'Image1.png',
    },
   
   
  ];
  currentIndex = 0;
  scrollAmount = 200;

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.scroll(-this.scrollAmount);
    }
  }

  nextSlide() {
    if (this.currentIndex < this.imageCards.length - 1) {
      this.currentIndex++;
      this.scroll(this.scrollAmount);
    }
  }

  scroll(scrollAmount: number) {
    if (this.sliderContainer && this.sliderContainer.nativeElement) {
      this.sliderContainer.nativeElement.scrollLeft += scrollAmount;
    }
  }
}
