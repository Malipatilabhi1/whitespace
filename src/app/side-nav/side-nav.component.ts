import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
selectedOption:string='';
selectOption(option:string){
this.selectedOption =option;
}
isActive(routePath: string): boolean { 
  return this.router.url === routePath;
}
}
