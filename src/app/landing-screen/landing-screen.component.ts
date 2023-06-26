import { Component, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-landing-screen',
  templateUrl: './landing-screen.component.html',
  styleUrls: ['./landing-screen.component.css']
})
export class LandingScreenComponent implements OnInit {
 
  ngOnInit(): void {
  }
  fileInput: HTMLInputElement | null = null;

 

  constructor(private router: Router, private elementRef: ElementRef) { }

 

  uploadButtonClicked() {
    // Create a hidden file input element dynamically
    this.fileInput = document.createElement('input');
    this.fileInput.type = 'file';
    this.fileInput.style.display = 'none';
    this.fileInput.accept = '.txt';

 

    // Listen for file selection change event
    this.fileInput.addEventListener('change', this.handleFileSelected.bind(this));

 

    // Trigger the file input click event
    this.fileInput.click();
  }

 

  handleFileSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    const selectedFile = target.files?.[0];

 
   console.log(selectedFile)
    if (selectedFile) {
      // Perform file upload logic here
      // After the upload is complete, navigate to a different page
      this.router.navigate(['/summary']);
    }

 

    // Clean up the file input element
    if (this.fileInput) {
      this.fileInput.removeEventListener('change', this.handleFileSelected.bind(this));
      this.fileInput = null;
    }
  }
  
}
