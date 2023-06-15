import { Component, OnInit, ViewChild } from '@angular/core';
import { ApexYAxis, ChartComponent } from "ng-apexcharts";
import {
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexChart,
  ApexPlotOptions,
  ApexLegend
} from "ng-apexcharts";
import {
  ApexResponsive,
  ApexXAxis,
  ApexFill
} from "ng-apexcharts";


export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  title: ApexTitleSubtitle;
  plotOptions: ApexPlotOptions;
  legend: ApexLegend;
};
export type ChartOptionsWillingness = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  yaxis:ApexYAxis;
  legend: ApexLegend;
  fill: ApexFill;
};

export type ChartOptionsSpend = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  yaxis:ApexYAxis;
  legend: ApexLegend;
  fill: ApexFill;
};
export type ChartOptionsAge = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  legend: ApexLegend;
  fill: ApexFill;
  yaxis:ApexYAxis;
};
export type ChartOptionsGender = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  legend: ApexLegend;
  fill: ApexFill;
  yaxis:ApexYAxis;
};

export type ChartOptionsIncome = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  legend: ApexLegend;
  fill: ApexFill;
  yaxis:ApexYAxis;
};


@Component({
  selector: 'app-cluster-analysis',
  templateUrl: './cluster-analysis.component.html',
  styleUrls: ['./cluster-analysis.component.css']
})
export class ClusterAnalysisComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  @ViewChild("chart1") chart1: ChartComponent;
  public chartOptionsWillingness: Partial<ChartOptionsWillingness>;
  @ViewChild("chart2") chart2: ChartComponent;
  public chartOptionsSpend: Partial<ChartOptionsSpend>;
  @ViewChild("chart3") chart3: ChartComponent;
  public chartOptionsAge: Partial<ChartOptionsAge>;
  @ViewChild("chart4") chart4: ChartComponent;
  public chartOptionsGender: Partial<ChartOptionsGender>;
  @ViewChild("chart5") chart5: ChartComponent;
  public chartOptionsIncome: Partial<ChartOptionsIncome>;
  constructor() { }

  ngOnInit(): void {
    this.numberOfRespondents()
    this.willngnessToSwtch()
    this.spend()
    this.age()
    this.income()
    this.gender()
  }

  numberOfRespondents(){
    this.chartOptions = {
      series: [
        {
          data: [
            {
              x: "Segment 1",
              y: 200
            },
            {
              x: "Segment 2",
              y: 150
            },
            {
              x: "Segment3",
              y: 200
            },
            {
              x: "Segment 4",
              y: 150
            },
            {
              x: "Segment 5",
              y: 200
            },
            {
              x: "Segment 6",
              y: 100
            }
          ]
        }
      ],
      legend: {
        show: false
      },
      chart: {
        height: 150,
        type: "treemap"
      },
      
      dataLabels: {
        enabled: true,

        offsetY: -3
      },
      plotOptions: {
        treemap: {
          enableShades: true,
          shadeIntensity: 0.5,
          reverseNegativeShade: true,
          colorScale: {
            ranges: [
              {
                from: -6,
                to: 0,
                color: "#CD363A"
              },
              {
                from: 0.001,
                to: 6,
                color: "#52B12C"
              }
            ]
          }
        }
      }
    };
  }
  
  willngnessToSwtch(){
    this.chartOptionsWillingness = {
      series: [
        {
          name: "Not Likely",
          data: [44, 55, 41, 67, 22, 43]
        },
        {
          name: "Very Likely",
          data: [13, 23, 20, 8, 13, 27]
        },
        {
          name: "Wont Mind",
          data: [11, 17, 15, 15, 21, 14]
        }
      ],
      chart: {
        type: "bar",
        height: 150,
        stacked: true,
        toolbar: {
          show: true
        },
        zoom: {
          enabled: true
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0
            }
          }
        }
      ],
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      xaxis: {
        type: "category",
        categories: [
          "Seg 1",
          "Seg 2",
          "Seg 3",
          "Seg 4",
          "Seg 5",
          "Seg 6"
        ]
      },
      yaxis: {
        title: {
          text: "% of Respondents"
        }
      },
      legend: {
        position: "right",
        offsetY: 40
      },
      fill: {
        opacity: 1
      }
    };

  }

  spend(){
    this.chartOptionsSpend = {
      series: [
        {
          name: ">50",
          data: [44, 55, 41, 67, 22, 43]
        },
        {
          name: "400-500",
          data: [13, 23, 20, 8, 13, 27]
        },
        {
          name: "300-400",
          data: [11, 17, 15, 15, 21, 14]
        },
        {
          name: "200-300",
          data: [44, 55, 41, 67, 22, 43]
        },
        {
          name: "100-200",
          data: [13, 23, 20, 8, 13, 27]
        },
        {
          name: "<100",
          data: [11, 17, 15, 15, 21, 14]
        },

      ],
      chart: {
        type: "bar",
        height: 150,
        stacked: true,
        toolbar: {
          show: true
        },
        zoom: {
          enabled: true
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0
            }
          }
        }
      ],
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      xaxis: {
        type: "category",
        categories: [
          "Seg 1",
          "Seg 2",
          "Seg 3",
          "Seg 4",
          "Seg 5",
          "Seg 6"
        ]
      },
      yaxis: {
        title: {
          text: "% of Respondents"
        }
      },
      legend: {
        position: "right",
        offsetY: 40
      },
      fill: {
        opacity: 1
      }
    };
  }

  age(){
    this.chartOptionsAge = {
      series: [
        {
          name: "55+",
          data: [44, 55, 41, 67, 22, 43]
        },
        {
          name: "45-55",
          data: [13, 23, 20, 8, 13, 27]
        },
        {
          name: "35-45",
          data: [11, 17, 15, 15, 21, 14]
        },
        {
          name: "25-35",
          data: [44, 55, 41, 67, 22, 43]
        },
        {
          name: "15-25",
          data: [13, 23, 20, 8, 13, 27]
        }

      ],
      chart: {
        type: "bar",
        height: 150,
        stacked: true,
        toolbar: {
          show: true
        },
        zoom: {
          enabled: true
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0
            }
          }
        }
      ],
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      xaxis: {
        type: "category",
        categories: [
          "Seg 1",
          "Seg 2",
          "Seg 3",
          "Seg 4",
          "Seg 5",
          "Seg 6"
        ]
      },
      yaxis: {
        title: {
          text: "% of Respondents"
        }
      },
      legend: {
        position: "right",
        offsetY: 40
      },
      fill: {
        opacity: 1
      }
    };
  }

  gender(){
    this.chartOptionsGender = {
      series: [
        {
          name: "Female",
          data: [44, 55, 41, 67, 22, 43]
        },
        {
          name: "Male",
          data: [13, 23, 20, 8, 13, 27]
        }

      ],
      chart: {
        type: "bar",
        height: 150,
        stacked: true,
        toolbar: {
          show: true
        },
        zoom: {
          enabled: true
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0
            }
          }
        }
      ],
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      xaxis: {
        type: "category",
        categories: [
          "Seg 1",
          "Seg 2",
          "Seg 3",
          "Seg 4",
          "Seg 5",
          "Seg 6"
        ]
      },
      yaxis: {
        title: {
          text: "% of Respondents"
        }
      },
      legend: {
        position: "right",
        offsetY: 40
      },
      fill: {
        opacity: 1
      }
    };
  }
  income(){
    this.chartOptionsIncome = {
      series: [
        {
          name: ">50",
          data: [44, 55, 41, 67, 22, 43]
        },
        {
          name: "400-500",
          data: [13, 23, 20, 8, 13, 27]
        },
        {
          name: "300-400",
          data: [11, 17, 15, 15, 21, 14]
        },
        {
          name: "200-300",
          data: [44, 55, 41, 67, 22, 43]
        },
        {
          name: "100-200",
          data: [13, 23, 20, 8, 13, 27]
        },
        {
          name: "<100",
          data: [11, 17, 15, 15, 21, 14]
        },

      ],
      chart: {
        type: "bar",
        height: 150,
        stacked: true,
        toolbar: {
          show: true
        },
        zoom: {
          enabled: true
        }
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0
            }
          }
        }
      ],
      plotOptions: {
        bar: {
          horizontal: false
        }
      },
      xaxis: {
        type: "category",
        categories: [
          "Seg 1",
          "Seg 2",
          "Seg 3",
          "Seg 4",
          "Seg 5",
          "Seg 6"
        ]
      },
      yaxis: {
        title: {
          text: "% of Respondents"
        }
      },
      legend: {
        position: "right",
        offsetY: 40
      },
      fill: {
        opacity: 1
      }
    };
  }

}
