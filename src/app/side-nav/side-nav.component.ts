import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  constructor(private router: Router) {
    this.currentRoute = "";
    this.getEndPoint()
   }
   currentRoute: string;

   summary: boolean = false;
   algorithm: boolean = false;
   segment: boolean = false;
   analysis: boolean = false;
   whitespaceAnalysis: boolean = false;

  ngOnInit(): void {
  }
selectedOption:string='';
selectOption(option:string){
this.selectedOption =option;
}


getEndPoint() {
  this.router.events.subscribe((event: Event) => {
    if (event instanceof NavigationEnd) {
      // Hide loading indicator
      this.currentRoute = event.url;
      console.log(this.currentRoute);
      if (this.currentRoute === "/summary" || this.currentRoute === "/") {
        this.summary = true;
        this.algorithm = false;
        this.segment=false;
        this.analysis=false;
        this.whitespaceAnalysis=false;
      }
      if (this.currentRoute === "/algorithm") {
        this.algorithm = true;
        this.summary = false;
        this.segment=false;
        this.analysis=false;
        this.whitespaceAnalysis=false;
      }
      
      if (this.currentRoute === "/analysis") {
        this.algorithm = false;
        this.summary = false;
        this.segment=false;
        this.analysis=true;
        this.whitespaceAnalysis=false;
      }
      if (this.currentRoute === "/segment" || this.currentRoute === "/segment;tab=K-Means" || this.currentRoute === "/segment;tab=Agglomerative%20Hierarchical" || this.currentRoute === "/segment;tab=DB%20Scan") {
        this.algorithm = false;
        this.summary = false;
        this.segment=true;
        this.analysis=false;
        this.whitespaceAnalysis=false;
      }
      if (this.currentRoute === "/whitespaceAnalysis") {
        this.algorithm = false;
        this.summary = false;
        this.segment=false;
        this.analysis=false;
        this.whitespaceAnalysis=true;
      }
    }
  });
}
}
