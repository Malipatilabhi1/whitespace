import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-algorithm-selection',
  templateUrl: './algorithm-selection.component.html',
  styleUrls: ['./algorithm-selection.component.css'],
})
export class AlgorithmSelectionComponent implements OnInit {
 display:boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showContent(){
    this.display = true;
  }
  gotoClusterAnalysis(){
    this.router.navigate(['./analysis'])
  }
}
