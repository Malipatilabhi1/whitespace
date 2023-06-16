import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexYAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-algorithm-selection',
  templateUrl: './algorithm-selection.component.html',
  styleUrls: ['./algorithm-selection.component.css'],
})
export class AlgorithmSelectionComponent implements OnInit {
 display:boolean = false;
 @ViewChild("chart") chart: ChartComponent;
 public chartOptions: Partial<ChartOptions>;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.elbow()
  }
  init= [
    {value: 'KMeans++', viewValue: 'KMeans++'},
    {value: 'KMeans+++', viewValue: 'KMeans+++'},
    {value: 'KMeans++++', viewValue: 'KMeans++++'},
  ];
  clust= [
    {value: 'Ward', viewValue: 'Ward'},
    {value: 'Ward+', viewValue: 'Ward+'},
    {value: 'Ward++', viewValue: 'Ward++'},
  ];

  rowData1: any = {};
  rowData2: any = {}; 
  rowData3: any = {}; 
  showContent() 
  { 
    this.display= true
    console.log('K Means:', this.rowData1); 
    console.log('Agglomerative Hierarchical:', this.rowData2); 
    console.log('DB Scan:', this.rowData3);
  } 
  gotoClusterAnalysis(){
    this.router.navigate(['./analysis'])
  }
  elbow(){
    this.chartOptions = {
      series: [
        {
          name: "",
          data: [ 250000, 150000, 90000, 70000,  50000]
        }
      ],
      chart: {
        height: 170,
        width:420,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },
      title: {
        text: "Elbow Graph",
        align: "left"
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [
          "2",
          "4",
          "6",
          "8",
          "10"
        ],
        title: {
          text: "Number of Clusters"
        }
      },
      yaxis: {
        title: {
          text: "WCSS"
        }
      },
    };
  }
  
  
}
