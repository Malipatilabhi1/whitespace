import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from "ng-apexcharts";
import { Router } from '@angular/router';
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexTheme,
  ApexTitleSubtitle
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
};

export type ChartOptionsWillingness = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  theme: ApexTheme;
  title: ApexTitleSubtitle;
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

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.householdComposition(),
    this.ageDistribution(),
    this.incomeDistribution(),
    this.incomeDistribution(),
    this.avgSpend(),
    this.frequency(),
    this.willingness()
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
  householdComposition(){
    this.chartOptions = {
      series: [25, 15, 44, 55, 41],
      chart: {
        width: "80%",
        type: "pie"
      },
      labels: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      theme: {
        monochrome: {
          enabled: true
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 100
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }

  ageDistribution(){
    this.chartOptionsAge = {
      series: [
        {
          name: "Net Profit",
          data: [400, 400, 400, 1200, 700, 400]
        }
      ],
      chart: {
        type: "bar",
        height: 150
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
          "5-25",
          "25-35",
          "35-45",
          "45-55",
          "55-65",
          "65+"
        ],
        title:{
          text: "Age Group"
        }
      },
      yaxis: {
        title: {
          text: "No of Respondents"
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

  incomeDistribution(){
    this.chartOptionsIncome = {
      series: [
        {
          name: "Net Profit",
          data: [200, 200, 200, 1000, 800]
        }
      ],
      chart: {
        type: "bar",
        height: 150
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
          "<25",
          "25-50",
          "50-75",
          "75-100",
          ">100"
        ],
        title:{
          text: "Income Group (in Rs 1000)"
        }
      },
      yaxis: {
        title: {
          text: "No of Respondents"
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
            data: [200, 300, 200, 500, 400, 100]
          }
        ],
        chart: {
          type: "bar",
          height: 150
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
            "<100",
            "100-200",
            "200-300",
            "300-400",
            "400-500",
            "<500"
          ],
          title:{
            text: "Income Group (in Rs 1000)"
          }
        },
        yaxis: {
          title: {
            text: "No of Respondents"
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
          data: [230, 500, 150, 56]
        }
      ],
      chart: {
        type: "bar",
        height: 150
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
          "Once a day",
          ">Once a week",
          "<Once a week",
          "Never"
        ],
        title:{
          text: "Age Group"
        }
      },
      yaxis: {
        title: {
          text: "No of Respondents"
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
      series: [25, 15, 44],
      chart: {
        width: "80%",
        type: "pie"
      },
      labels: [
        "Very likely",
        "Won't mind",
        "Not likely"
      ],
      theme: {
        monochrome: {
          enabled: true
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 100
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }

  navigatetoAlgorithmSelection(){
    this.router.navigate(['./algorithm'])
  }
  }

