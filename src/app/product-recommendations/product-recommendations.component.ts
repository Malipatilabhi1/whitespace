import { Component, OnInit } from '@angular/core';
import { RecProductService } from '../Services/rec-product.service';
@Component({
  selector: 'app-product-recommendations',
  templateUrl: './product-recommendations.component.html',
  styleUrls: ['./product-recommendations.component.css']
})
export class ProductRecommendationsComponent implements OnInit {
  
  RecProduct:any=[];
  constructor(private recProductService:RecProductService ) { 
    this.RecProduct=this.recProductService.RecProduct;
    console.log(this.recProductService.RecProduct);
  }

  ngOnInit(): void {
   console.log(this.recProductService.RecProduct);
   
  }

}
