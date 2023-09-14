import { Component, OnInit, ViewChild } from '@angular/core';
import { RecProductService } from '../Services/rec-product.service';
import {
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexChart,
  ApexXAxis,
  ApexFill,
  ApexDataLabels,
  ChartComponent,
  ApexStroke,
  ApexPlotOptions,
  ApexYAxis,
  ApexMarkers
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  title: ApexTitleSubtitle;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  tooltip: any;
  plotOptions: ApexPlotOptions;
  fill: ApexFill;
  colors: string[];
  yaxis: ApexYAxis;
  markers: ApexMarkers;
  xaxis: ApexXAxis;
};

@Component({
  selector: 'app-product-recommendations',
  templateUrl: './product-recommendations.component.html',
  styleUrls: ['./product-recommendations.component.css']
})
export class ProductRecommendationsComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  ngOnInit(): void {
    console.log(this.recProductService.RecProduct);
    
   }


  RecProduct:any=[];
  constructor(private recProductService:RecProductService ) { 
    this.RecProduct=this.recProductService.RecProduct;
    console.log(this.recProductService.RecProduct);

    this.chartOptions = {
      stroke: {
        show: true,
        width: 0.5,
        dashArray: 2,
        colors: ["#002A71"],
      },
      series: [
        {
          name: "Series",
          data: [7.9, 5.1, 3.2, 6.0, 4.7, 6.8, 5.3], 
        },
      ],
      chart: {
        height: 220,
        type: "radar",
      },
      dataLabels: {
        enabled: true,
        background: {
          enabled: false,
          borderRadius:2,
        },
        style: {
          fontSize: "9px",
           
        },
        offsetY: 12, 
        formatter: function (val, { seriesIndex, dataPointIndex }) {
          // Access the x-axis categories
          const categories = [
            "Aroma",
            "Bubble",
            "Viscosity",
            "pH",
            "Oil Removing",
            "Lather",
            "Scalp",   
          ];
          return categories[dataPointIndex] + ": " + val;
        },
      },
      plotOptions: {
        radar: {
          size: 102,
          polygons: {
            strokeColors: "",//background line colour 
            fill: {
              colors: ["#f1ebf6","#ebe2f2","#e4d8ed","#decfe9","#d7c5e5","#d0bbe0","#cab2dc","#c3a8d8"],
            },
          },
        },
      },
      title: {},
      colors: ["#525569"],//text color
      markers: {
        size: 4,//dot size
        colors: ["#DC9600","#DC9600","#21D36A","#8D5206","#96C5FF","#2D5AB5"],//dot  color
        strokeColors: ["#8084F4","#DC9600","#21D36A","#8D5206","#96C5FF","#2D5AB5"],//dot surrounding color
        strokeWidth: 0,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val;
          },
        },
      },
      xaxis: {
        categories: [
          "",
          "",
          "",
          "",
          "",
          "",
          "",
        ],
      },
      yaxis: {
        tickAmount: 7,
        labels: {
          formatter: function (val, i) {
            if (i % 2 === 0) {
              return val.toString();
            } else {
              return "";
            }
          },
        },
      },
    };
  }

  

  

  
  

}
