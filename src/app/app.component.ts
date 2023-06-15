import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sideBarOpen = true;
  @ViewChild('scroller1') scroller: ElementRef | any;
  title = 'clustering';
  ngOnInit(): void {
    const div = this.scroller.nativeElement as HTMLDivElement;
    div.addEventListener('mouseover', e => {
      console.log('Mouse Over');
    });
    div.addEventListener('mouseout', e => {
      console.log('Mouse Out');
    });
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
