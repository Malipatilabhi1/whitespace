import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from "ng-apexcharts";
import { Router } from '@angular/router';
import { GeneralServiceService } from '../general-service.service';
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexTheme,
  ApexTitleSubtitle,
  ApexGrid,
} from "ng-apexcharts";

import {
  ApexAxisChartSeries,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  theme: ApexTheme;
  title: ApexTitleSubtitle;
  colors:any;
  tooltip:any;
  dataLabels:any
  legend: ApexLegend;
};

export type ChartOptionsAge = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;

};

export type ChartOptionsIncome = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
};

export type ChartOptionsAvgSpend = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
  colors:any;
};

export type ChartOptionsFrequency = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  fill: ApexFill;
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  legend: ApexLegend;
  colors:any;
};

export type ChartOptionsWillingness = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  theme: ApexTheme;
  title: ApexTitleSubtitle;
  colors:any;
  dataLabels:any;
  legend: ApexLegend;
};

export type ChartOptionsGender = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  colors:any;
  dataLabels:any;
  legend: ApexLegend;
};

export type ChartOptionsScore = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  plotOptions: ApexPlotOptions;
  grid: ApexGrid
  colors:any;
  labels: any;
  dataLabels:any;
  legend: ApexLegend;
};

@Component({
  selector: 'app-mr-summary',
  templateUrl: './mr-summary.component.html',
  styleUrls: ['./mr-summary.component.css']
})
export class MrSummaryComponent implements OnInit {
  fileInput: HTMLInputElement | null = null;

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;

  @ViewChild("chart1") chart1: ChartComponent;
  public chartOptionsAge: Partial<ChartOptionsAge>;

  @ViewChild("chart2") chart2: ChartComponent;
  public chartOptionsIncome: Partial<ChartOptionsIncome>;

  @ViewChild("chart3") chart3: ChartComponent;
  public chartOptionsAvgSpend: Partial<ChartOptionsAvgSpend>;

  @ViewChild("chart4") chart4: ChartComponent;
  public chartOptionsFrequency: Partial<ChartOptionsFrequency>;

  @ViewChild("chart5") chart5: ChartComponent;
  public chartOptionsWillingness: Partial<ChartOptionsWillingness>;

  @ViewChild("chart6") chart6: ChartComponent;
  public chartOptionsGender: Partial<ChartOptionsGender>;

  @ViewChild("chart7") chart7: ChartComponent;
  public chartOptionsScore: Partial<ChartOptionsScore>;

  @ViewChild('content', {static:false})el!:ElementRef;

  constructor(private router: Router, private gs: GeneralServiceService) { }

  ngOnInit(): void {
    this.householdComposition(),
    this.ageDistribution(),
    this.incomeDistribution(),
    this.incomeDistribution(),
    this.avgSpend(),
    this.frequency(),
    this.willingness(),
    this.gender(),
    this.score()
  }
  

  dataScreen2= {
    "number_of_questions": 99,
    "number_of_respondents": 100,
    "respondent_Male": 0.57,
    "respondent_Female": 0.43,
    "household_<3": 0.4,
    "household_3-5": 0.3,
    "household_>5": 0.3,
    "age_25-40": 34,
    "age_0-25": 25,
    "age_50+": 22,
    "age_40-50": 19,
    "income_25000-50000": 37,
    "income_0-25000": 23,
    "income_100000+": 21,
    "income_50000-100000": 19,
    "satisfaction_No": 0.45,
    "satisfaction_Somewhat": 0.29,
    "satisfaction_Yes": 0.26,
    "spend_>50": 40,
    "spend_10-30": 25,
    "spend_30-50": 22,
    "spend_<10": 13,
    "freq_Once a day": 29,
    "freq_> Once a week": 29,
    "freq_< Once a week": 25,
    "freq_Never": 16,
    "switchcount_Very Likely": 0.34,
    "switchcount_Won't Mind": 0.28,
    "switchcount_Not Likely": 0.2,
    "switchcount_Somewhat Likely": 0.18
  }
  uploadButtonClicked() {
    // Create a hidden file input element dynamically
    this.fileInput = document.createElement('input');
    this.fileInput.type = 'file';
    this.fileInput.style.display = 'none';
    this.fileInput.accept = '.txt';
    // Trigger the file input click event
    this.fileInput.click();
  }

  gender() {
   
    this.chartOptionsGender = {
      series: [this.dataScreen2.respondent_Male, this.dataScreen2.respondent_Female],
      chart: {
        width: 270,
        type: "pie"
      },
      colors: ["#9692F1", "#FACC15"],
      labels: ["Male", "Female"],
      dataLabels: {
        enabled: false
      },
      legend: {
        show:true,
        formatter: function (val, opts) {
          const seriesIndex = opts.seriesIndex;
          const percentage = (opts.w.globals.series[seriesIndex] / opts.w.globals.seriesTotals.reduce((a, b) => a + b, 0)) * 100;
          return '<span style="font-size: 13px; font-family: Outfit; font-style: bold;">' + val + ': ' +  percentage.toFixed(1) + '%';
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
          }
        }
      ]
    };
  }
  
  
score(){
  this.chartOptionsScore = {
    series: [this.dataScreen2.satisfaction_Yes, this.dataScreen2.satisfaction_Somewhat, this.dataScreen2.satisfaction_Yes],
    chart: {
      width: 300,
      height:200,
      type: "donut"
    },
    colors:["#69C69B","#F9DA81","#E46B66"],
    labels: ["Happy", "Neutral", "Sad"],
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 90,
        offsetY: 1
      }
    },
    dataLabels:{
     enabled:false
    },
    grid: {
      padding: {
        bottom: -10
      }
    },
    legend: {
      show:true,
      formatter: function (val, opts) {
        const seriesIndex = opts.seriesIndex;
        const percentage = (opts.w.globals.series[seriesIndex] / opts.w.globals.seriesTotals.reduce((a, b) => a + b, 0)) * 100;
        return '<span style="font-size: 13px; font-family: Outfit; font-style: bold;">' + val + ': ' +  percentage.toFixed(1) + '%';
      }
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 180
          },
         
        }
      }
    ]
  };
  
}


  householdComposition(){
    this.chartOptions = {
      series: [this.dataScreen2['household_<3'], this.dataScreen2['household_3-5'], this.dataScreen2['household_>5']],
      chart: {
        width: 330,
        type: "pie"
      },
      tooltip:{
        enabled:true
      },
      dataLabels:{
        enabled:false
      },
      legend: {
        show:true,
        formatter: function (val, opts) {
          const seriesIndex = opts.seriesIndex;
          const percentage = (opts.w.globals.series[seriesIndex] / opts.w.globals.seriesTotals.reduce((a, b) => a + b, 0)) * 100;
          return '<span style="font-size: 13px; font-family: Outfit; font-style: bold;">' + val + ': ' +  percentage.toFixed(1) + '%';
        }
      },
      colors:["#3AA0FF","#36CBCB","#FAD337"],
      labels: ["<3", "3-5", ">5"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 220
            },
            
          }
        }
      ]
    };
   
  }

  ageDistribution(){
    this.chartOptionsAge = {
      series: [
        {
          name: "Age",
          data: [this.dataScreen2["age_0-25"], this.dataScreen2["age_25-40"], this.dataScreen2["age_40-50"],this.dataScreen2["age_50+"] ]
        }
      ],
      chart: {
        type: "bar",
        height: 200
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          "0-25",
          "25-40",
          "40-50",
          "50+",
        ],
        title:{
          text: "Age Group",
          style: {
            color: '#666',
           fontSize:'14px',
           fontFamily:'Outfit',
           fontWeight:400
          }
        }
      },
      yaxis: {
        title: {
          text: "No of Respondents",
          style: {
            color: '#666',
           fontSize:'14px',
           fontFamily:'Outfit',
           fontWeight:400
          }
        },
        
      },
     
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function(val) {
            return " " + val + " ";
          }
        }
      }
    };
  }

  incomeDistribution(){
    this.chartOptionsIncome = {
      series: [
        {
          name: "Net Profit",
          data: [this.dataScreen2['income_0-25000'], this.dataScreen2['income_25000-50000'], this.dataScreen2['income_50000-100000'], this.dataScreen2['income_100000+']]
        }
      ],
      chart: {
        type: "bar",
        height: 200
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          "0-25k",
          "25k-50k",
          "50k-1L",
          "1L+"
        ],
        title:{
          text: "Income Group (in Rs 1000)",
          style: {
            color: '#666',
           fontSize:'14px',
           fontFamily:'Outfit',
           fontWeight:400
          }
        }
      },
      yaxis: {
        title: {
          text: "No of Respondents",
          style: {
            color: '#666',
           fontSize:'14px',
           fontFamily:'Outfit',
           fontWeight:400
          }
        }
      },
     
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function(val) {
            return "$ " + val + " thousands";
          }
        }
      }
    };
  }

  avgSpend(){  
      this.chartOptionsAvgSpend = {
        series: [
          {
            name: "Net Profit",
            data: [this.dataScreen2['spend_<10'], this.dataScreen2['spend_10-30'], this.dataScreen2['spend_30-50'], this.dataScreen2['spend_>50']]
          }
        ],
        chart: {
          type: "bar",
          height: 200
        },
        colors:["#9692F1"],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: "55%"
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"]
        },
        xaxis: {
          categories: [
            "<10k",
            "10k-30k",
            "30k-50k",
            "50k+"
          ],
          title:{
            text: "Income Group (in Rs 1000)",
            style: {
              color: '#666',
             fontSize:'14px',
             fontFamily:'Outfit',
             fontWeight:400
            }
          }
        },
        yaxis: {
          title: {
            text: "No of Respondents",
            style: {
              color: '#666',
             fontSize:'14px',
             fontFamily:'Outfit',
             fontWeight:400
            }
          }
        },
       
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function(val) {
              return "$ " + val + " thousands";
            }
          }
        }
      };
    }

  frequency(){
    this.chartOptionsFrequency = {
      series: [
        {
          name: "Net Profit",
          data: [this.dataScreen2.freq_Never,this.dataScreen2['freq_Once a day'], this.dataScreen2['freq_< Once a week'], this.dataScreen2['freq_> Once a week']]
        }
      ],
      chart: {
        type: "bar",
        height: 200
      },
      colors:["#9692F1"],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%"
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xaxis: {
        categories: [
          "Never",
          "Once in a day",
          "<Once a week",
          ">Once a week",
         
        ],
        title:{
          text: "Age Group",
          style: {
            color: '#666',
           fontSize:'14px',
           fontFamily:'Outfit',
           fontWeight:400
          }
        }
      },
      yaxis: {
        title: {
          text: "No of Respondents",
          style: {
            color: '#666',
           fontSize:'14px',
           fontFamily:'Outfit',
           fontWeight:400
          }
        }
      },
     
      fill: {
        opacity: 1
      },
      tooltip: {
        y: {
          formatter: function(val) {
            return "$ " + val + " thousands";
          }
        }
      }
    };

  }

  willingness(){
    this.chartOptionsWillingness = {
      series: [this.dataScreen2['switchcount_Not Likely'], this.dataScreen2['switchcount_Somewhat Likely'], this.dataScreen2['switchcount_Very Likely'], this.dataScreen2['switchcount_Won\'t Mind']],
      chart: {
        width: 400,
        type: "pie"
      },
      dataLabels:{
        enabled:false
      },
      colors:["#3AA0FF","#36CBCB","#FAD337","#F2637B"],
      labels: [ "Not Likely", "Somewhat Likely","Very Likely", "Won't Mind",],
      legend: {
        show:true,
        formatter: function (val, opts) {
          const seriesIndex = opts.seriesIndex;
          const percentage = (opts.w.globals.series[seriesIndex] / opts.w.globals.seriesTotals.reduce((a, b) => a + b, 0)) * 100;
          return '<span style="font-size: 13px; font-family: Outfit; font-style: bold;">' + val + ': ' +  percentage.toFixed(1) + '%';
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            }
          }
        }
      ]
    };
    
  }

  navigatetoAlgorithmSelection(){
    console.log("this", this.el.nativeElement)
    // this.gs.generatePdf22(this.el.nativeElement);
    this.captureScreen()
    this.router.navigate(['./algorithm'])

  }
  
  private captureScreen() {
    const element = this.el.nativeElement;
    this.gs.captureScreen(element);
  }
  
  
  }

