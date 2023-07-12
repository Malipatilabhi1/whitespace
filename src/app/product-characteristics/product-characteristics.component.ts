import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-characteristics',
  templateUrl: './product-characteristics.component.html',
  styleUrls: ['./product-characteristics.component.css']
})
export class ProductCharacteristicsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
tabContent=[
  {name:"aroma", value:"9.5", name1:"dry", value1:"9.1"},
  {name:"dry", value:"9.1", name1:"softness", value1:"9.1"},
  {name:"volume", value:"9.5", name1:"stickiness", value1:"9.1"},
  {name:"pocketSize", value:"9.1", name1:"oil", value1:"9.1"},
  {name:"price", value:"9.1", name1:"lather", value1:"9.1"},
]
}
