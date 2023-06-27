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
  colors:any;
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

export type ChartOptionsGender = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  colors:any;
};

export type ChartOptionsScore = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  labels: string[];
  plotOptions: ApexPlotOptions;
  colors:any;
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

  constructor(private router: Router) { }

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

  gender(){
    this.chartOptionsGender = {
      series: [44, 55],
      chart: {
        width: 250,
        type: "pie"
      },
      colors:["#9692F1","#FACC15"],
      labels: ["Male", "Female"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
  }
  
score(){
  this.chartOptionsScore = {
    series: [44, 55, 67],
    chart: {
      height: 150,
      type: "radialBar"
    },
    colors:["#69C69B","#F9DA81","#E46B66"],
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: "22px"
          },
          value: {
            fontSize: "16px"
          },
          total: {
            show: true,
            label: "Total",
            formatter: function(w) {
              return "249";
            }
          }
        }
      }
    },
    labels: ["Happy", "Neutral", "Sad"]
  };
}


  householdComposition(){
    this.chartOptions = {
      series: [25, 15, 44, 55, 41],
      chart: {
        width: "65%",
        type: "pie"
      },
      colors:["#9692F1","#FACC15"],
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
          data: [this.dataScreen2["age_0-25"], this.dataScreen2["age_25-40"], this.dataScreen2["age_40-50"],this.dataScreen2["age_50+"] ]
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
          "0-25",
          "25-40",
          "40-50",
          "50+",
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
        width: "85%",
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

