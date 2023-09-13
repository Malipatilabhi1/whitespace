import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-tooltip-card',
  templateUrl: './tooltip-card.component.html',
  styleUrls: ['./tooltip-card.component.css']
})
export class TooltipCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() Image:string;
  @Input() Title:string;
}
