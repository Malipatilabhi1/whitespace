import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApexYAxis, ChartComponent } from "ng-apexcharts";
import html2canvas from 'html2canvas';
import { GeneralServiceService } from '../general-service.service';
import { Router } from '@angular/router';
import {
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexChart,
  ApexPlotOptions,
  ApexLegend,
  ApexNonAxisChartSeries,
  ApexTheme
} from "ng-apexcharts";
import {
  ApexResponsive,
  ApexXAxis,
  ApexFill
} from "ng-apexcharts";

// algorithm1
export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  theme: ApexTheme;
  title: ApexTitleSubtitle;
  dataLabels:any;
  colors:any;
};
export type ChartOptionsWillingness = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  legend: ApexLegend;
  fill: ApexFill;
  colors:any;
  yaxis:ApexYAxis;
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
  colors:any
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
  colors:any;
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
  colors:any;
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
  colors:any;
};

// algorithm2
export type ChartOptions1 = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  theme: ApexTheme;
  title: ApexTitleSubtitle;
  dataLabels:any;
  colors:any;
};
export type ChartOptionsWillingness1 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  legend: ApexLegend;
  fill: ApexFill;
  colors:any;
  yaxis:ApexYAxis;
};

export type ChartOptionsSpend1= {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  yaxis:ApexYAxis;
  legend: ApexLegend;
  fill: ApexFill;
  colors:any;
};
export type ChartOptionsAge1 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  legend: ApexLegend;
  fill: ApexFill;
  yaxis:ApexYAxis;
  colors:any;
};
export type ChartOptionsGender1 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  legend: ApexLegend;
  fill: ApexFill;
  yaxis:ApexYAxis;
  colors:any;
};

export type ChartOptionsIncome1 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  legend: ApexLegend;
  fill: ApexFill;
  yaxis:ApexYAxis;
  colors:any;
}


// algorithm3
export type ChartOptions2 = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  theme: ApexTheme;
  title: ApexTitleSubtitle;
  dataLabels:any;
  colors:any;
};
export type ChartOptionsWillingness2 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  legend: ApexLegend;
  fill: ApexFill;
  colors:any;
  yaxis:ApexYAxis;
  
};

export type ChartOptionsSpend2 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  yaxis:ApexYAxis;
  legend: ApexLegend;
  fill: ApexFill;
  colors:any;
};
export type ChartOptionsAge2 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  legend: ApexLegend;
  fill: ApexFill;
  yaxis:ApexYAxis;
  colors:any;
};
export type ChartOptionsGender2 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  legend: ApexLegend;
  fill: ApexFill;
  yaxis:ApexYAxis;
  colors:any;
};

export type ChartOptionsIncome2 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  legend: ApexLegend;
  fill: ApexFill;
  yaxis:ApexYAxis;
  colors:any;
}


@Component({
  selector: 'app-cluster-analysis',
  templateUrl: './cluster-analysis.component.html',
  styleUrls: ['./cluster-analysis.component.css']
})
export class ClusterAnalysisComponent implements OnInit {

  // algorithm1
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

  // algorithm2
  @ViewChild("chart6") chart6: ChartComponent;
  public chartOptions1: Partial<ChartOptions1>;
  @ViewChild("chart7") chart7: ChartComponent;
  public chartOptionsWillingness1: Partial<ChartOptionsWillingness1>;
  @ViewChild("chart8") chart8: ChartComponent;
  public chartOptionsSpend1: Partial<ChartOptionsSpend1>;
  @ViewChild("chart9") chart9: ChartComponent;
  public chartOptionsAge1: Partial<ChartOptionsAge1>;
  @ViewChild("chart10") chart10: ChartComponent;
  public chartOptionsGender1: Partial<ChartOptionsGender1>;
  @ViewChild("chart11") chart11: ChartComponent;
  public chartOptionsIncome1: Partial<ChartOptionsIncome1>;

  // algorithm3
  @ViewChild("chart12") chart12: ChartComponent;
  public chartOptions2: Partial<ChartOptions2>;
  @ViewChild("chart13") chart13: ChartComponent;
  public chartOptionsWillingness2: Partial<ChartOptionsWillingness2>;
  @ViewChild("chart14") chart14: ChartComponent;
  public chartOptionsSpend2: Partial<ChartOptionsSpend2>;
  @ViewChild("chart15") chart15: ChartComponent;
  public chartOptionsAge2: Partial<ChartOptionsAge2>;
  @ViewChild("chart16") chart16: ChartComponent;
  public chartOptionsGender2: Partial<ChartOptionsGender2>;
  @ViewChild("chart17") chart17: ChartComponent;
  public chartOptionsIncome2: Partial<ChartOptionsIncome2>;
  @ViewChild('content', {static:false})el!:ElementRef;
capture(){
  this.captureScreen()
}
  private captureScreen() {
    const element = this.el.nativeElement;
    this.gs.captureScreen(element);
  }

  data={
    "age": {
        "0": {
            "40-50": 2,
            "25-40": 4,
            "50+": 4,
            "0-25": 5
        },
        "1": {
            "25-40": 18,
            "40-50": 2
        },
        "2": {
            "50+": 191,
            "40-50": 161,
            "0-25": 100,
            "25-40": 308
        },
        "3": {
            "0-25": 155,
            "50+": 36,
            "40-50": 82,
            "25-40": 112
        },
        "4": {
            "25-40": 60,
            "50+": 90,
            "40-50": 30,
            "0-25": 90
        },
        "5": {
            "50+": 9,
            "40-50": 8,
            "25-40": 8,
            "0-25": 25
        }
    },
    "gender": {
        "0": {
            "Male": 10,
            "Female": 5
        },
        "1": {
            "Male": 20
        },
        "2": {
            "Male": 420,
            "Female": 340
        },
        "3": {
            "Male": 241,
            "Female": 144
        },
        "4": {
            "Male": 135,
            "Female": 135
        },
        "5": {
            "Male": 29,
            "Female": 21
        }
    },
    "income": {
        "0": {
            "0-25000": 2,
            "25000-50000": 2,
            "100000+": 6,
            "50000-100000": 5
        },
        "1": {
            "25000-50000": 20
        },
        "2": {
            "0-25000": 88,
            "100000+": 174,
            "50000-100000": 190,
            "25000-50000": 308
        },
        "3": {
            "25000-50000": 96,
            "0-25000": 130,
            "100000+": 77,
            "50000-100000": 82
        },
        "4": {
            "25000-50000": 105,
            "100000+": 45,
            "0-25000": 120
        },
        "5": {
            "50000-100000": 8,
            "0-25000": 5,
            "25000-50000": 24,
            "100000+": 13
        }
    },
    "spend": {
        "0": {
            "<10": 4,
            "10-30": 1,
            "30-50": 1,
            ">50": 9
        },
        "1": {
            "30-50": 6,
            ">50": 14
        },
        "2": {
            "30-50": 113,
            "10-30": 134,
            "<10": 101,
            ">50": 412
        },
        "3": {
            "30-50": 133,
            "10-30": 84,
            ">50": 123,
            "<10": 45
        },
        "4": {
            "30-50": 60,
            "<10": 45,
            ">50": 30,
            "10-30": 135
        },
        "5": {
            "30-50": 17,
            "10-30": 21,
            ">50": 12
        }
    },
    "switchcount": {
        "0": {
            "Won't Mind": 4,
            "Somewhat Likely": 6,
            "Very Likely": 4,
            "Not Likely": 1
        },
        "1": {
            "Very Likely": 20
        },
        "2": {
            "Very Likely": 361,
            "Won't Mind": 137,
            "Not Likely": 134,
            "Somewhat Likely": 128
        },
        "3": {
            "Not Likely": 80,
            "Very Likely": 98,
            "Somewhat Likely": 100,
            "Won't Mind": 107
        },
        "4": {
            "Somewhat Likely": 74,
            "Won't Mind": 57,
            "Very Likely": 62,
            "Not Likely": 77
        },
        "5": {
            "Won't Mind": 15,
            "Somewhat Likely": 12,
            "Not Likely": 8,
            "Very Likely": 15
        }
    },
    "respondent": {
        "Segment 0": 15,
        "Segment 1": 20,
        "Segment 2": 760,
        "Segment 3": 385,
        "Segment 4": 270,
        "Segment 5": 50
    }
}

  dataAglo={
    "age": {
        "0": {
            "0-25": 75,
            "25-40": 165,
            "40-50": 60,
            "50+": 45
        },
        "1": {
            "0-25": 30,
            "40-50": 105,
            "50+": 120
        },
        "2": {
            "0-25": 90,
            "25-40": 120,
            "40-50": 30,
            "50+": 90
        },
        "3": {
            "25-40": 195,
            "40-50": 30
        },
        "4": {
            "0-25": 75,
            "25-40": 30,
            "40-50": 30,
            "50+": 75
        },
        "5": {
            "0-25": 105,
            "40-50": 30
        }
    },
    "gender": {
        "0": {
            "Female": 105,
            "Male": 240
        },
        "1": {
            "Female": 225,
            "Male": 30
        },
        "2": {
            "Female": 120,
            "Male": 210
        },
        "3": {
            "Male": 225
        },
        "4": {
            "Female": 135,
            "Male": 75
        },
        "5": {
            "Female": 60,
            "Male": 75
        }
    },
    "income": {
        "0": {
            "0-25000": 120,
            "100000+": 135,
            "25000-50000": 15,
            "50000-100000": 75
        },
        "1": {
            "0-25000": 60,
            "100000+": 75,
            "25000-50000": 45,
            "50000-100000": 75
        },
        "2": {
            "0-25000": 120,
            "100000+": 30,
            "25000-50000": 105,
            "50000-100000": 75
        },
        "3": {
            "25000-50000": 225
        },
        "4": {
            "0-25000": 30,
            "100000+": 45,
            "25000-50000": 105,
            "50000-100000": 30
        },
        "5": {
            "0-25000": 15,
            "100000+": 30,
            "25000-50000": 60,
            "50000-100000": 30
        }
    },
    "respondent": {
        "Segment 1": 345,
        "Segment 2": 255,
        "Segment 3": 330,
        "Segment 4": 225,
        "Segment 5": 210,
        "Segment 6": 135
    },
    "spend": {
        "0": {
            "10-30": 75,
            "30-50": 120,
            "<10": 30,
            ">50": 120
        },
        "1": {
            "10-30": 60,
            "30-50": 30,
            "<10": 45,
            ">50": 120
        },
        "2": {
            "10-30": 120,
            "30-50": 45,
            "<10": 90,
            ">50": 75
        },
        "3": {
            "30-50": 60,
            ">50": 165
        },
        "4": {
            "10-30": 105,
            "30-50": 30,
            ">50": 75
        },
        "5": {
            "10-30": 15,
            "30-50": 45,
            "<10": 30,
            ">50": 45
        }
    },
    "switchcount": {
        "0": {
            "Not Likely": 81,
            "Somewhat Likely": 94,
            "Very Likely": 85,
            "Won't Mind": 85
        },
        "1": {
            "Not Likely": 56,
            "Somewhat Likely": 59,
            "Very Likely": 67,
            "Won't Mind": 73
        },
        "2": {
            "Not Likely": 86,
            "Somewhat Likely": 83,
            "Very Likely": 87,
            "Won't Mind": 74
        },
        "3": {
          "Not Likely": 0,
          "Somewhat Likely": 0,
            "Very Likely": 225,
            "Won't Mind": 0
        },
        "4": {
            "Not Likely": 47,
            "Somewhat Likely": 60,
            "Very Likely": 58,
            "Won't Mind": 45
        },
        "5": {
            "Not Likely": 30,
            "Somewhat Likely": 24,
            "Very Likely": 38,
            "Won't Mind": 43
        }
    }
}
  tableContent ={
    "0": {
        "age": 0.99,
        "aroma": 0.82,
        "bubble": 0.71,
        "car": 0.5,
        "dependent": 0.61,
        "designation": 0.98,
        "expense": 1.14,
        "experiment": 0.66,
        "family": 0.51,
        "freedom": 0.71,
        "freq": 0.67,
        "gender": 0.41,
        "income": 0.82,
        "judgement": 0.64,
        "lather": 0.43,
        "letgo": 0.61,
        "looks": 0.5,
        "natural": 0.71,
        "packsize": 0.76,
        "pbrand": 1.89,
        "pgoal": 1.0,
        "ph": 0.43,
        "planning": 0.61,
        "ppurpose": 1.51,
        "praise": 0.79,
        "protein": 0.49,
        "regret": 0.61,
        "removes_oil": 0.86,
        "satisfaction": 0.61,
        "sbrand": 1.22,
        "scalp_irritation": 0.8,
        "sgoal": 0.93,
        "soccompany": 1.1,
        "socialize": 0.85,
        "softness": 0.53,
        "spend": 1.23,
        "spurpose": 1.14,
        "stickiness": 0.55,
        "switchcount": 1.03,
        "usemonth": 0.55,
        "viscocity": 0.56,
        "vitamin": 0.51,
        "workhours": 0.77
    },
    "1": {
        "age": 0.23,
        "aroma": 0.23,
        "bubble": 0.0,
        "car": 0.0,
        "dependent": 0.0,
        "designation": 0.12,
        "expense": 0.43,
        "experiment": 0.12,
        "family": 0.0,
        "freedom": 0.53,
        "freq": 0.51,
        "gender": 0.0,
        "income": 0.0,
        "judgement": 0.39,
        "lather": 0.0,
        "letgo": 0.57,
        "looks": 0.48,
        "natural": 0.0,
        "packsize": 0.0,
        "pbrand": 1.24,
        "pgoal": 0.0,
        "ph": 0.0,
        "planning": 0.48,
        "ppurpose": 0.0,
        "praise": 0.5,
        "protein": 0.12,
        "regret": 0.56,
        "removes_oil": 0.0,
        "satisfaction": 0.12,
        "sbrand": 1.6,
        "scalp_irritation": 0.12,
        "sgoal": 0.0,
        "soccompany": 0.23,
        "socialize": 0.23,
        "softness": 0.0,
        "spend": 0.39,
        "spurpose": 0.0,
        "stickiness": 0.0,
        "switchcount": 0.0,
        "usemonth": 0.0,
        "viscocity": 0.65,
        "vitamin": 0.0,
        "workhours": 0.37
    },
    "2": {
        "age": 0.8,
        "aroma": 0.59,
        "bubble": 0.61,
        "car": 0.49,
        "dependent": 0.66,
        "designation": 0.73,
        "expense": 1.04,
        "experiment": 0.62,
        "family": 0.75,
        "freedom": 0.69,
        "freq": 0.79,
        "gender": 0.33,
        "income": 0.9,
        "judgement": 0.83,
        "lather": 0.79,
        "letgo": 0.8,
        "looks": 0.56,
        "natural": 0.8,
        "packsize": 0.84,
        "pbrand": 1.99,
        "pgoal": 1.04,
        "ph": 0.62,
        "planning": 0.78,
        "ppurpose": 0.72,
        "praise": 0.62,
        "protein": 0.46,
        "regret": 0.76,
        "removes_oil": 0.56,
        "satisfaction": 0.72,
        "sbrand": 1.65,
        "scalp_irritation": 0.72,
        "sgoal": 1.17,
        "soccompany": 0.77,
        "socialize": 1.02,
        "softness": 0.62,
        "spend": 1.01,
        "spurpose": 1.12,
        "stickiness": 0.49,
        "switchcount": 1.01,
        "usemonth": 0.71,
        "viscocity": 0.69,
        "vitamin": 0.67,
        "workhours": 1.01
    },
    "3": {
        "age": 0.71,
        "aroma": 0.5,
        "bubble": 0.78,
        "car": 0.5,
        "dependent": 0.66,
        "designation": 1.29,
        "expense": 0.84,
        "experiment": 0.76,
        "family": 0.71,
        "freedom": 0.66,
        "freq": 0.93,
        "gender": 0.46,
        "income": 1.08,
        "judgement": 0.44,
        "lather": 0.89,
        "letgo": 0.83,
        "looks": 0.73,
        "natural": 0.75,
        "packsize": 0.8,
        "pbrand": 2.03,
        "pgoal": 1.36,
        "ph": 0.69,
        "planning": 0.56,
        "ppurpose": 1.45,
        "praise": 0.83,
        "protein": 0.55,
        "regret": 0.47,
        "removes_oil": 0.83,
        "satisfaction": 0.63,
        "sbrand": 1.88,
        "scalp_irritation": 0.66,
        "sgoal": 1.34,
        "soccompany": 1.09,
        "socialize": 0.75,
        "softness": 0.44,
        "spend": 0.87,
        "spurpose": 0.94,
        "stickiness": 0.78,
        "switchcount": 0.94,
        "usemonth": 0.42,
        "viscocity": 0.47,
        "vitamin": 0.69,
        "workhours": 0.85
    },
    "4": {
        "age": 1.16,
        "aroma": 0.74,
        "bubble": 0.46,
        "car": 0.28,
        "dependent": 0.72,
        "designation": 0.94,
        "expense": 1.08,
        "experiment": 0.56,
        "family": 0.67,
        "freedom": 0.89,
        "freq": 1.09,
        "gender": 0.5,
        "income": 0.79,
        "judgement": 0.48,
        "lather": 0.56,
        "letgo": 0.49,
        "looks": 0.64,
        "natural": 0.56,
        "packsize": 1.06,
        "pbrand": 1.83,
        "pgoal": 1.5,
        "ph": 0.69,
        "planning": 0.49,
        "ppurpose": 0.81,
        "praise": 0.78,
        "protein": 0.86,
        "regret": 0.67,
        "removes_oil": 0.69,
        "satisfaction": 0.59,
        "sbrand": 1.25,
        "scalp_irritation": 0.8,
        "sgoal": 1.06,
        "soccompany": 1.19,
        "socialize": 1.04,
        "softness": 0.84,
        "spend": 0.7,
        "spurpose": 0.97,
        "stickiness": 0.75,
        "switchcount": 1.0,
        "usemonth": 0.74,
        "viscocity": 0.69,
        "vitamin": 0.64,
        "workhours": 1.11
    },
    "5": {
        "age": 1.0,
        "aroma": 0.61,
        "bubble": 0.75,
        "car": 0.28,
        "dependent": 0.46,
        "designation": 0.85,
        "expense": 0.99,
        "experiment": 0.67,
        "family": 0.61,
        "freedom": 0.69,
        "freq": 0.86,
        "gender": 0.49,
        "income": 0.85,
        "judgement": 0.68,
        "lather": 0.46,
        "letgo": 0.78,
        "looks": 0.56,
        "natural": 0.92,
        "packsize": 0.89,
        "pbrand": 1.5,
        "pgoal": 0.83,
        "ph": 0.78,
        "planning": 0.75,
        "ppurpose": 1.53,
        "praise": 0.76,
        "protein": 0.78,
        "regret": 0.78,
        "removes_oil": 0.62,
        "satisfaction": 0.78,
        "sbrand": 1.53,
        "scalp_irritation": 0.42,
        "sgoal": 1.28,
        "soccompany": 0.83,
        "socialize": 0.92,
        "softness": 0.76,
        "spend": 0.69,
        "spurpose": 1.25,
        "stickiness": 0.42,
        "switchcount": 0.98,
        "usemonth": 0.78,
        "viscocity": 0.46,
        "vitamin": 0.56,
        "workhours": 0.71
    }
}

tableContent1={
  "0": {
      "age": 0.74,
      "aroma": 0.67,
      "bubble": 0.91,
      "car": 0.5,
      "dependent": 0.65,
      "designation": 1.02,
      "expense": 0.93,
      "experiment": 0.68,
      "family": 0.58,
      "freedom": 0.74,
      "freq": 0.84,
      "gender": 0.42,
      "income": 1.21,
      "judgement": 0.64,
      "lather": 0.72,
      "letgo": 0.79,
      "looks": 0.43,
      "natural": 0.87,
      "packsize": 0.76,
      "pbrand": 1.83,
      "pgoal": 1.33,
      "ph": 0.57,
      "planning": 0.83,
      "ppurpose": 1.4,
      "praise": 0.85,
      "protein": 0.48,
      "regret": 0.56,
      "removes_oil": 0.79,
      "satisfaction": 0.61,
      "sbrand": 1.54,
      "scalp_irritation": 0.68,
      "sgoal": 1.45,
      "soccompany": 1.09,
      "socialize": 1.1,
      "softness": 0.54,
      "spend": 0.76,
      "spurpose": 1.33,
      "stickiness": 0.68,
      "switchcount": 0.98,
      "usemonth": 0.52,
      "viscocity": 0.58,
      "vitamin": 0.56,
      "workhours": 0.66
  },
  "1": {
      "age": 0.72,
      "aroma": 0.66,
      "bubble": 0.58,
      "car": 0.5,
      "dependent": 0.5,
      "designation": 0.66,
      "expense": 0.9,
      "experiment": 0.55,
      "family": 0.89,
      "freedom": 0.55,
      "freq": 0.85,
      "gender": 0.21,
      "income": 1.0,
      "judgement": 0.83,
      "lather": 0.62,
      "letgo": 0.73,
      "looks": 0.58,
      "natural": 0.83,
      "packsize": 0.69,
      "pbrand": 1.87,
      "pgoal": 0.93,
      "ph": 0.58,
      "planning": 0.76,
      "ppurpose": 0.94,
      "praise": 0.66,
      "protein": 0.47,
      "regret": 0.73,
      "removes_oil": 0.63,
      "satisfaction": 0.76,
      "sbrand": 1.4,
      "scalp_irritation": 0.72,
      "sgoal": 1.0,
      "soccompany": 0.62,
      "socialize": 1.03,
      "softness": 0.62,
      "spend": 1.08,
      "spurpose": 1.2,
      "stickiness": 0.63,
      "switchcount": 0.97,
      "usemonth": 0.78,
      "viscocity": 0.61,
      "vitamin": 0.72,
      "workhours": 1.07
  },
  "2": {
      "age": 1.01,
      "aroma": 0.73,
      "bubble": 0.61,
      "car": 0.35,
      "dependent": 0.74,
      "designation": 1.0,
      "expense": 1.26,
      "experiment": 0.64,
      "family": 0.6,
      "freedom": 0.74,
      "freq": 0.98,
      "gender": 0.46,
      "income": 0.79,
      "judgement": 0.56,
      "lather": 0.74,
      "letgo": 0.48,
      "looks": 0.63,
      "natural": 0.52,
      "packsize": 1.0,
      "pbrand": 1.85,
      "pgoal": 1.51,
      "ph": 0.74,
      "planning": 0.43,
      "ppurpose": 1.2,
      "praise": 0.79,
      "protein": 0.74,
      "regret": 0.69,
      "removes_oil": 0.83,
      "satisfaction": 0.6,
      "sbrand": 1.61,
      "scalp_irritation": 0.87,
      "sgoal": 1.24,
      "soccompany": 1.16,
      "socialize": 0.99,
      "softness": 0.83,
      "spend": 0.95,
      "spurpose": 0.74,
      "stickiness": 0.94,
      "switchcount": 1.02,
      "usemonth": 0.74,
      "viscocity": 0.55,
      "vitamin": 0.64,
      "workhours": 1.16
  },
  "3": {
      "age": 0.23,
      "aroma": 0.23,
      "bubble": 0.0,
      "car": 0.0,
      "dependent": 0.0,
      "designation": 0.12,
      "expense": 0.43,
      "experiment": 0.12,
      "family": 0.0,
      "freedom": 0.53,
      "freq": 0.51,
      "gender": 0.0,
      "income": 0.0,
      "judgement": 0.39,
      "lather": 0.0,
      "letgo": 0.57,
      "looks": 0.48,
      "natural": 0.0,
      "packsize": 0.0,
      "pbrand": 1.24,
      "pgoal": 0.0,
      "ph": 0.0,
      "planning": 0.48,
      "ppurpose": 0.0,
      "praise": 0.5,
      "protein": 0.12,
      "regret": 0.56,
      "removes_oil": 0.0,
      "satisfaction": 0.12,
      "sbrand": 1.6,
      "scalp_irritation": 0.12,
      "sgoal": 0.0,
      "soccompany": 0.23,
      "socialize": 0.23,
      "softness": 0.0,
      "spend": 0.39,
      "spurpose": 0.0,
      "stickiness": 0.0,
      "switchcount": 0.0,
      "usemonth": 0.0,
      "viscocity": 0.65,
      "vitamin": 0.0,
      "workhours": 0.37
  },
  "4": {
      "age": 1.21,
      "aroma": 0.66,
      "bubble": 0.67,
      "car": 0.41,
      "dependent": 0.53,
      "designation": 0.93,
      "expense": 0.93,
      "experiment": 0.61,
      "family": 0.61,
      "freedom": 0.73,
      "freq": 0.66,
      "gender": 0.46,
      "income": 0.84,
      "judgement": 0.56,
      "lather": 0.66,
      "letgo": 0.8,
      "looks": 0.53,
      "natural": 0.73,
      "packsize": 0.96,
      "pbrand": 1.5,
      "pgoal": 0.73,
      "ph": 0.67,
      "planning": 0.73,
      "ppurpose": 1.06,
      "praise": 0.57,
      "protein": 0.64,
      "regret": 0.57,
      "removes_oil": 0.41,
      "satisfaction": 0.73,
      "sbrand": 1.39,
      "scalp_irritation": 0.29,
      "sgoal": 1.16,
      "soccompany": 1.06,
      "socialize": 1.0,
      "softness": 0.8,
      "spend": 0.86,
      "spurpose": 1.14,
      "stickiness": 0.45,
      "switchcount": 1.0,
      "usemonth": 0.8,
      "viscocity": 0.61,
      "vitamin": 0.57,
      "workhours": 0.86
  },
  "5": {
      "age": 0.69,
      "aroma": 0.74,
      "bubble": 0.2,
      "car": 0.35,
      "dependent": 0.35,
      "designation": 1.04,
      "expense": 1.11,
      "experiment": 0.59,
      "family": 0.59,
      "freedom": 0.74,
      "freq": 0.84,
      "gender": 0.49,
      "income": 0.84,
      "judgement": 0.62,
      "lather": 0.44,
      "letgo": 0.86,
      "looks": 0.99,
      "natural": 0.74,
      "packsize": 0.74,
      "pbrand": 1.93,
      "pgoal": 1.38,
      "ph": 0.49,
      "planning": 0.79,
      "ppurpose": 1.28,
      "praise": 0.59,
      "protein": 0.59,
      "regret": 0.0,
      "removes_oil": 0.89,
      "satisfaction": 0.44,
      "sbrand": 1.19,
      "scalp_irritation": 0.52,
      "sgoal": 0.89,
      "soccompany": 1.14,
      "socialize": 0.84,
      "softness": 0.59,
      "spend": 0.96,
      "spurpose": 1.16,
      "stickiness": 0.59,
      "switchcount": 0.97,
      "usemonth": 0.62,
      "viscocity": 0.69,
      "vitamin": 0.69,
      "workhours": 0.67
  }
}

  a = Object.keys(this.tableContent)
  b=Object.keys(this.tableContent['0'])

  c = Object.keys(this.tableContent1)
  d=Object.keys(this.tableContent1['0'])



  getCellStyles1(segment: string, feature: string) {
    const value = this.tableContent1[segment][feature];
    let cellStyles = {};
    // Add different colors based on the feature values
    if (value < 0.5) {
      cellStyles = {
        'background-color': '#6599FF',
        color: 'white'
      };
    } else if (value < 1) {
      cellStyles = {
        'background-color': '#A7C4FF',
        color: 'white'
      };
    }else{
      cellStyles = {
        'background-color': '#C3D7FF',
        color: 'white'
      };
    }
    // Add more conditions for other feature values

    return cellStyles;
  }



  getCellStyles(segment: string, feature: string) {
    const value = this.tableContent[segment][feature];
    let cellStyles = {};
    // Add different colors based on the feature values
    if (value < 0.5) {
      cellStyles = {
        'background-color': '#6599FF',
        color: 'white'
      };
    } else if (value < 1) {
      cellStyles = {
        'background-color': '#A7C4FF',
        color: 'white'
      };
    }else{
      cellStyles = {
        'background-color': '#C3D7FF',
        color: 'white'
      };
    }
    // Add more conditions for other feature values

    return cellStyles;
  }



  isLoading = false;

  constructor(private gs: GeneralServiceService, private router: Router) { }

  navigateToSegmentCharacteristics(tabName: string) {
    // this.router.navigate(['/segment', { tab: tabName }]);
    this.isLoading = true; 
    setTimeout(() => {
      this.router.navigate(['/segment', { tab: tabName }]).then(() => {
        this.isLoading = false; 
      });
    }, 3000); 
  }
  ngOnInit(): void {
    // algorithm1
    this.numberOfRespondents()
    this.willngnessToSwtch()
    this.spend()
    this.age()
    this.income()
    this.gender()
    // algorithm2
    this.numberOfRespondents1()
    this.willngnessToSwtch1()
    this.spend1()
    this.age1()
    this.income1()
    this.gender1()
    // algorithm3
    this.numberOfRespondents2()
    this.willngnessToSwtch2()
    this.spend2()
    this.age2()
    this.income2()
    this.gender2()
  }


  captureScreenshot(componentId: string): Promise<string> {
    const componentElement = document.getElementById(componentId);
    return html2canvas(componentElement, {
      scrollY: -window.scrollY,
      useCORS: true,
    }).then((canvas: HTMLCanvasElement) => {
      return canvas.toDataURL('image/png');
    });
  }

// algorithm1
  numberOfRespondents() {
  const respondentData = this.data.respondent;
  const barData = Object.values(respondentData);
  const barDataKey = Object.keys(respondentData);
  this.chartOptions = {
    series: barData,
    chart: {
      width: "55%",
      type: "pie"
    },
    colors:["#91ADFD","#FFE0C2","#C0BBEB","#A3F5EC","#FDE68C","#D6D6D6"],
    labels: barDataKey,
   
    dataLabels:{
       enabled:false
    },
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

  willngnessToSwtch() {
    const spendData = this.dataAglo.switchcount;
    const spendCategories = Object.keys(spendData).map((_, index) => `Seg ${index + 1}`);
    const spendSeries = Object.entries(spendData).map(([_, data]) => {
      return Object.values(data);
    });
  
    const series = [
      { name: "Not Likely", data: [] },
      { name: "Somewhat Likely", data: [] },
      { name: "Very Likely", data: [] },
      { name: "Won't Mind", data: [] }
    ];
  
    spendSeries.forEach((data) => {
      const segmentTotal = data.reduce((total, value) => total + value, 0);
      series.forEach((range, index) => {
        const percentage = (data[index] / segmentTotal) * 100;
        range.data.push(parseFloat(percentage.toFixed(2)));
      });
    });
  
    this.chartOptionsWillingness = {
      series: series,
      chart: {
        type: "bar",
        height: 150,
        stacked: true,
        stackType: "100%"
      },
      colors:["#C3D7FF","#A7C4FF","#6599FF","#3F7FFF"],
      dataLabels:{
        enabled:false
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
        categories: spendCategories,
        labels:{
          style: {
            fontSize:'10px',
            fontFamily:'Outfit',
            fontWeight:400
           },
        }
      },
      yaxis: {
        title: {
          text: "% of Respondents",
          style: {
            fontSize:'14px',
            fontFamily:'Outfit',
            fontWeight:400
           },
        },
        min: 0,
        max: 100,
        tickAmount: 4,
        labels: {
          formatter: (value) => `${value}%`
        }
      },
      fill: {
        opacity: 1
      },
      legend: {
        position: "right",
        offsetX: 0,
        offsetY: 50,
        formatter: function (seriesName, opts) {
          return seriesName !== undefined ? seriesName : "";
        }
      }
    };
  }
  
  spend() {
    const spendCategories = Object.keys(this.data.spend).map((_, index) => `Seg ${index + 1}`);
  const spendSeries = Object.entries(this.data.spend).map(([_, data]) => {
    return Object.values(data);
  });

  const series = [
    { name: ">50", data: [] },
    { name: "30-50", data: [] },
    { name: "<10", data: [] },
    { name: "10-30", data: [] },
  ];

  spendSeries.forEach((data) => {
    const segmentTotal = data.reduce((total, value) => total + value, 0);
    series.forEach((range, index) => {
      const percentage = (data[index] / segmentTotal) * 100;
      range.data.push(parseFloat(percentage.toFixed(2)));
    });
  });

  
    this.chartOptionsSpend = {
      series: series,
      chart: {
        type: "bar",
        height: 150,
        stacked: true,
        toolbar: { show: true },
        zoom: { enabled: true }
      },
      dataLabels:{
        enabled:false
      },
      colors:["#6B68D8","#918EF1","#C0BEF7","#D5D3F9"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: { position: "bottom", offsetX: -10, offsetY: 0 }
          }
        }
      ],
      plotOptions: { bar: { horizontal: false } },
      xaxis: { type: "category", categories: spendCategories,
    labels:{
      style: {
        fontSize:'10px',
        fontFamily:'Outfit',
        fontWeight:400
       },
    } },
      yaxis: {
        title: {
          text: "% of Respondents",
          style: {
            fontSize:'14px',
            fontFamily:'Outfit',
            fontWeight:400
           },
        },
        min: 0,
        max: 100,
        tickAmount: 4,
        labels: {
          formatter: (value) => `${value}%`
        }
      },
      legend: { position: "right", offsetY: 40 },
      fill: { opacity: 1 }
    };
  }
  age(){
    const ageData = this.data.age;
    const ageCategories = Object.keys(this.data.age).map((_, index) => `Seg ${index + 1}`);
  const ageSeries = Object.entries(ageData).map(([_, data]) => {
    return Object.values(data);
  });

  const series = [
    { name: "0-25", data: [] },
    { name: "25-40", data: [] },
    { name:"40-50", data:[]},
    { name: "50+", data: [] }
  ];

  ageSeries.forEach((data) => {
    const segmentTotal = data.reduce((total, value) => total + value, 0);
    series.forEach((range, index) => {
      const percentage = (data[index] / segmentTotal) * 100;
      range.data.push(parseFloat(percentage.toFixed(2)));
    });
  });
  
    
 
    this.chartOptionsAge = {
      series: series,
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
      dataLabels:{
        enabled:false
      },
      colors: ["#6B68D8", "#918EF1", "#C0BEF7", "#D5D3F9"],
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
        categories: ageCategories,
        labels:{
          style: {
            fontSize:'10px',
            fontFamily:'Outfit',
            fontWeight:400
           },
        }
      },
      yaxis: {
        title: {
          text: "% of Respondents",
          style: {
            fontSize:'14px',
            fontFamily:'Outfit',
            fontWeight:400
           },
        },
        min: 0,
        max: 100,
        tickAmount: 4,
        labels: {
          formatter: (value) => `${value}%`
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
  gender() {
    const genderData = this.data.gender;

  
  const genderKeys = Object.keys(genderData);
  const categories = Object.keys(this.data.gender).map((_, index) => `Seg ${index + 1}`);
  const seriesData = {
    Female: Array(genderKeys.length).fill(0),
    Male: Array(genderKeys.length).fill(0)
  };

  genderKeys.forEach((key, index) => {
    const genderGroup = genderData[key];
    Object.keys(genderGroup).forEach((gender) => {
      seriesData[gender][index] = genderGroup[gender];
    });
  });

  const series = Object.keys(seriesData).map((gender) => ({
    name: gender,
    data: seriesData[gender].map((value, index) => {
      const segmentTotal = seriesData['Female'][index] + seriesData['Male'][index];
      const percentage = (value / segmentTotal) * 100;
      return parseFloat(percentage.toFixed(2));
    })
  }));

  
    this.chartOptionsGender = {
      series: series,
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
      dataLabels:{
        enabled:false
      },
      colors:["#A7C4FF","#7EA9FF"],
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
        categories: categories,
        labels:{
          style: {
            fontSize:'10px',
            fontFamily:'Outfit',
            fontWeight:400
           },
        }
      },
      yaxis: {
        title: {
          text: "% of Respondents",
          style: {
            fontSize:'14px',
            fontFamily:'Outfit',
            fontWeight:400
           },
        },
        min: 0,
        max: 100,
        tickAmount: 4,
        labels: {
          formatter: (value) => `${value}%`
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
  income() {
    const incomeData = this.data.income;
  const incomeCategories = Object.keys(this.data.income).map((_, index) => `Seg ${index + 1}`);
  const incomeSeries = Object.entries(incomeData).map(([_, data]) => {
    return Object.values(data);
  });

  const series = [
    { name: ">50", data: [] },
    { name: "400-500", data: [] },
    { name: "300-400", data: [] },
    { name: "200-300", data: [] },
    { name: "100-200", data: [] },
    { name: "<100", data: [] },
  ];

  incomeSeries.forEach((data) => {
    const segmentTotal = data.reduce((total, value) => total + value, 0);
    series.forEach((range, index) => {
      const percentage = (data[index] / segmentTotal) * 100;
      range.data.push(parseFloat(percentage.toFixed(2)));
    });
  });
    this.chartOptionsIncome = {
      series:series,
      chart: {
        type: "bar",
        height: 150,
        stacked: true,
        toolbar: { show: true },
        zoom: { enabled: true }
      },
      dataLabels:{
        enabled:false
      },
      colors:["#C3D7FF","#A7C4FF","#6599FF","#3F7FFF","#3974E8","#3974E8"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: { position: "bottom", offsetX: -10, offsetY: 0 }
          }
        }
      ],
      plotOptions: { bar: { horizontal: false } },
      xaxis: { type: "category", categories: incomeCategories ,
    labels:{
      style: {
        fontSize:'10px',
        fontFamily:'Outfit',
        fontWeight:400
       },
    }},
      yaxis: {
        title: {
          text: "% of Respondents",
          style: {
            fontSize:'14px',
            fontFamily:'Outfit',
            fontWeight:400
           },
        },
        min: 0,
        max: 100,
        tickAmount: 4,
        labels: {
          formatter: (value) => `${value}%`
        }
      },
      legend: { position: "right", offsetY: 40 },
      fill: { opacity: 1 }
    };
  }


// algorithm2

  numberOfRespondents1(){
    const respondentData = this.dataAglo.respondent;
  const barData = Object.values(respondentData);
  const barDataKey = Object.keys(respondentData);
  this.chartOptions1 = {
    series: barData,
    chart: {
      width: "55%",
      type: "pie"
    },
    colors:["#91ADFD","#FFE0C2","#C0BBEB","#A3F5EC","#FDE68C","#D6D6D6"],
    labels: barDataKey,
   
    dataLabels:{
       enabled:false
    },
   
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
  
  willngnessToSwtch1() {
    const spendData = this.dataAglo.switchcount;
    const spendCategories = Object.keys(spendData).map((key) => `Seg ${parseInt(key)+1}`);
  const spendSeries = Object.entries(spendData).map(([_, data]) => {
    return Object.values(data);
  });

  const series = [
    { name: "Not Likely", data: [] },
    { name: "Somewhat Likely", data: [] },
    { name:"Very Likely", data:[]},
    { name: "Won't Mind", data: [] }
  ];

  spendSeries.forEach((data) => {
    const segmentTotal = data.reduce((total, value) => total + value, 0);
    series.forEach((range, index) => {
      const percentage = (data[index] / segmentTotal) * 100;
      range.data.push(parseFloat(percentage.toFixed(2)));
    });
  });
  
    this.chartOptionsWillingness1 = {
      series: series,
      chart: {
        type: "bar",
        height: 150,
        stacked: true,
        stackType: "100%"
      },
      colors:["#C3D7FF","#A7C4FF","#6599FF","#3F7FFF"],
      dataLabels:{
        enabled:false
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
      xaxis: {
        categories: spendCategories,
        labels:{
          style: {
            fontSize:'10px',
            fontFamily:'Outfit',
            fontWeight:400
           },
        }
      },
      yaxis: {
        title: {
          text: "% of Respondents",
          style: {
            fontSize:'14px',
            fontFamily:'Outfit',
            fontWeight:400
           },
        },
        min: 0,
        max: 100,
        tickAmount: 4,
        labels: {
          formatter: (value) => `${value}%`
        }
      },
      fill: {
        opacity: 1
      },
      legend: {
        position: "right",
        offsetX: 0,
        offsetY: 50
      }
    };
  }
  

  spend1(){
    const spendData = this.dataAglo.spend;
    const spendCategories = Object.keys(spendData).map((key) => `Seg ${parseInt(key)+1}`);
  const spendSeries = Object.entries(spendData).map(([_, data]) => {
    return Object.values(data);
  });

  const series = [
    { name: ">50", data: [] },
    { name: "30-50", data: [] },
    { name: "<10", data: [] },
    { name: "10-30", data: [] },
  ];

  spendSeries.forEach((data) => {
    const segmentTotal = data.reduce((total, value) => total + value, 0);
    series.forEach((range, index) => {
      const percentage = (data[index] / segmentTotal) * 100;
      range.data.push(parseFloat(percentage.toFixed(2)));
    });
  });
  
    this.chartOptionsSpend1 = {
      series: series,
      chart: {
        type: "bar",
        height: 150,
        stacked: true,
        toolbar: { show: true },
        zoom: { enabled: true }
      },
      dataLabels:{
        enabled:false
      },
      colors:["#6B68D8","#918EF1","#C0BEF7","#D5D3F9"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: { position: "bottom", offsetX: -10, offsetY: 0 }
          }
        }
      ],
      plotOptions: { bar: { horizontal: false } },
      xaxis: { type: "category", categories: spendCategories,
    labels:{
      style: {
        fontSize:'10px',
        fontFamily:'Outfit',
        fontWeight:400
       },
    } },
      yaxis: {
        title: {
          text: "% of Respondents",
          style: {
            fontSize:'14px',
            fontFamily:'Outfit',
            fontWeight:400
           },
        },
        min: 0,
        max: 100,
        tickAmount: 4,
        labels: {
          formatter: (value) => `${value}%`
        }
      },
      legend: { position: "right", offsetY: 40 },
      fill: { opacity: 1 }
    };
  }

  age1(){
    const ageData: { [key: string]: { [key: string]: number } } = this.dataAglo.age;

    const ageKeys = Object.keys(ageData);
    const categories = ageKeys.map((key) => `Seg ${parseInt(key)+1}`);
  
    // Calculate the percentage for each segment
    const seriesData = {
      "0-25": [],
      "25-40": [],
      "40-50": [],
      "50+": []
    };
  
    ageKeys.forEach((key) => {
      const ageGroup = ageData[key];
  
      // Calculate the total for the current segment
      const segmentTotal = Object.values(ageGroup).reduce((total, value) => total + value, 0);
  
      // Calculate the percentage for each range in the current segment
      Object.keys(ageGroup).forEach((range) => {
        const percentage = (ageGroup[range] / segmentTotal) * 100;
        seriesData[range].push(percentage.toFixed(2));
      });
    });
  
    const series = Object.keys(seriesData).map((range) => ({
      name: range,
      data: seriesData[range]
    }));
      this.chartOptionsAge1 = {
        series: series,
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
        dataLabels:{
          enabled:false
        },
        colors: ["#6B68D8", "#918EF1", "#C0BEF7", "#D5D3F9"],
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
          categories: categories,
          labels:{
            style: {
              fontSize:'10px',
              fontFamily:'Outfit',
              fontWeight:400
             },
          }
        },
        yaxis: {
          title: {
            text: "% of Respondents",
            style: {
              fontSize:'14px',
              fontFamily:'Outfit',
              fontWeight:400
             },
          },
          min: 0,
          max: 100,
          tickAmount: 4,
          labels: {
            formatter: (value) => `${value}%`
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
  gender1(){
    const genderData = this.dataAglo.gender;

    const genderKeys = Object.keys(genderData);
    const categories = genderKeys.map((key) => `Seg ${parseInt(key)+1}`);
    const seriesData = {
      Female: [],
      Male: []
    };
  
    genderKeys.forEach((key) => {
      const genderGroup = genderData[key];
      Object.keys(genderGroup).forEach((gender) => {
        seriesData[gender].push(genderGroup[gender]);
      });
    });
  
    const series = Object.keys(seriesData).map((gender) => ({
      name: gender,
      data: seriesData[gender].map((value, index) => {
        const segmentTotal = seriesData['Female'][index] + seriesData['Male'][index];
        const percentage = (value / segmentTotal) * 100;
        return parseFloat(percentage.toFixed(2));
      })
    }));
  
    
      this.chartOptionsGender1 = {
        series: series,
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
        dataLabels:{
          enabled:false
        },
        colors:["#A7C4FF","#7EA9FF"],
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
          categories: categories,
          labels:{
            style: {
              fontSize:'10px',
              fontFamily:'Outfit',
              fontWeight:400
             },
          }
        },
        yaxis: {
          title: {
            text: "% of Respondents",
            style: {
              fontSize:'14px',
              fontFamily:'Outfit',
              fontWeight:400
             },
          },
          min: 0,
          max: 100,
          tickAmount: 4,
          labels: {
            formatter: (value) => `${value}%`
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

  income1(){
    const incomeData = this.dataAglo.income;
    const incomeCategories = Object.keys(incomeData).map((key) => `Seg ${parseInt(key)+1}`);
    const incomeSeries = Object.entries(incomeData).map(([_, data]) => {
      return Object.values(data);
    });
  
    const series = [
      { name: ">50", data: [] },
      { name: "400-500", data: [] },
      { name: "300-400", data: [] },
      { name: "200-300", data: [] },
      { name: "100-200", data: [] },
      { name: "<100", data: [] },
    ];
  
    incomeSeries.forEach((data) => {
      const segmentTotal = data.reduce((total, value) => total + value, 0);
      series.forEach((range, index) => {
        const percentage = (data[index] / segmentTotal) * 100;
        range.data.push(parseFloat(percentage.toFixed(2)));
      });
    });
      this.chartOptionsIncome1 = {
        series:series,
        chart: {
          type: "bar",
          height: 150,
          stacked: true,
          toolbar: { show: true },
          zoom: { enabled: true }
        },
        dataLabels:{
          enabled:false
        },
        colors:["#C3D7FF","#A7C4FF","#6599FF","#3F7FFF","#3974E8","#3974E8"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: { position: "bottom", offsetX: -10, offsetY: 0 }
            }
          }
        ],
        plotOptions: { bar: { horizontal: false } },
        xaxis: { type: "category", categories: incomeCategories ,
      labels:{
        style: {
          fontSize:'10px',
          fontFamily:'Outfit',
          fontWeight:400
         },
      }},
        yaxis: {
          title: {
            text: "% of Respondents",
            style: {
              fontSize:'14px',
              fontFamily:'Outfit',
              fontWeight:400
             },
          },
          min: 0,
          max: 100,
          tickAmount: 4,
          labels: {
            formatter: (value) => `${value}%`
          }
        },
        legend: { position: "right", offsetY: 40 },
        fill: { opacity: 1 }
      };
  }


  // algorithm3

  numberOfRespondents2(){
    const respondentData = this.data.respondent;
    const barData = Object.values(respondentData);
    const barDataKey = Object.keys(respondentData);
    this.chartOptions2 = {
      series: barData,
      chart: {
        width: "55%",
        type: "pie"
      },
      labels: barDataKey,
     
      colors:["#91ADFD","#FFE0C2","#C0BBEB","#A3F5EC","#FDE68C","#D6D6D6"],
      dataLabels:{
         enabled:false
      },
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
  
  willngnessToSwtch2(){
   
    const spendData = this.dataAglo.switchcount;
    const spendCategories = Object.keys(spendData).map((key) => `Seg ${parseInt(key)+1}`);
  const spendSeries = Object.entries(spendData).map(([_, data]) => {
    return Object.values(data);
  });

  const series = [
    { name: "Not Likely", data: [] },
    { name: "Somewhat Likely", data: [] },
    { name:"Very Likely", data:[]},
    { name: "Won't Mind", data: [] }
  ];

  spendSeries.forEach((data) => {
    const segmentTotal = data.reduce((total, value) => total + value, 0);
    series.forEach((range, index) => {
      const percentage = (data[index] / segmentTotal) * 100;
      range.data.push(parseFloat(percentage.toFixed(2)));
    });
  });
  
    this.chartOptionsWillingness2 = {
      series: series,
      chart: {
        type: "bar",
        height: 150,
        stacked: true,
        stackType: "100%"
      },
      colors:["#C3D7FF","#A7C4FF","#6599FF","#3F7FFF"],
      dataLabels:{
        enabled:false
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
      xaxis: {
        categories: spendCategories,
        labels:{
          style: {
            fontSize:'10px',
            fontFamily:'Outfit',
            fontWeight:400
           },
        }
      },
      yaxis: {
        title: {
          text: "% of Respondents",
          style: {
            fontSize:'14px',
            fontFamily:'Outfit',
            fontWeight:400
           },
        },
        min: 0,
        max: 100,
        tickAmount: 4,
        labels: {
          formatter: (value) => `${value}%`
        }
      },
      fill: {
        opacity: 1
      },
      legend: {
        position: "right",
        offsetX: 0,
        offsetY: 50
      }
    };

  }

  spend2(){
    const spendData = this.data.spend;
    const spendCategories = Object.keys(spendData).map((_, index) => `Seg ${index + 1}`);
  
  const spendSeries = Object.entries(spendData).map(([_, data]) => {
    return Object.values(data);
  });

  const series = [
    { name: ">50", data: [] },
    { name: "30-50", data: [] },
    { name: "<10", data: [] },
    { name: "10-30", data: [] },
  ];

  spendSeries.forEach((data) => {
    const segmentTotal = data.reduce((total, value) => total + value, 0);
    series.forEach((range, index) => {
      const percentage = (data[index] / segmentTotal) * 100;
      range.data.push(parseFloat(percentage.toFixed(2)));
    });
  });
  
    this.chartOptionsSpend2 = {
      series: series,
      chart: {
        type: "bar",
        height: 150,
        stacked: true,
        toolbar: { show: true },
        zoom: { enabled: true }
      },
      dataLabels:{
        enabled:false
      },
      colors:["#6B68D8","#918EF1","#C0BEF7","#D5D3F9"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: { position: "bottom", offsetX: -10, offsetY: 0 }
          }
        }
      ],
      plotOptions: { bar: { horizontal: false } },
      xaxis: { type: "category", categories: spendCategories,
    labels:{
      style: {
        fontSize:'10px',
        fontFamily:'Outfit',
        fontWeight:400
       },
    } },
      yaxis: {
        title: {
          text: "% of Respondents",
          style: {
            fontSize:'14px',
            fontFamily:'Outfit',
            fontWeight:400
           },
        },
        min: 0,
        max: 100,
        tickAmount: 4,
        labels: {
          formatter: (value) => `${value}%`
        }
      },
      legend: { position: "right", offsetY: 40 },
      fill: { opacity: 1 }
    };
  }

  age2(){
    const ageData: { [key: string]: { [key: string]: number } } = this.data.age;

    const ageKeys = Object.keys(ageData);
    const categories = Object.keys(ageData).map((_, index) => `Seg ${index + 1}`);
  
    // Calculate the percentage for each segment
    const seriesData = {
      "0-25": [],
      "25-40": [],
      "40-50": [],
      "50+": []
    };
  
    ageKeys.forEach((key) => {
      const ageGroup = ageData[key];
  
      // Calculate the total for the current segment
      const segmentTotal = Object.values(ageGroup).reduce((total, value) => total + value, 0);
  
      // Calculate the percentage for each range in the current segment
      Object.keys(ageGroup).forEach((range) => {
        const percentage = (ageGroup[range] / segmentTotal) * 100;
        seriesData[range].push(percentage.toFixed(2));
      });
    });
  
    const series = Object.keys(seriesData).map((range) => ({
      name: range,
      data: seriesData[range]
    }));
      this.chartOptionsAge2 = {
        series: series,
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
        dataLabels:{
          enabled:false
        },
        colors: ["#6B68D8", "#918EF1", "#C0BEF7", "#D5D3F9"],
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
          categories: categories,
          labels:{
            style: {
              fontSize:'10px',
              fontFamily:'Outfit',
              fontWeight:400
             },
          }
        },
        yaxis: {
          title: {
            text: "% of Respondents",
            style: {
              fontSize:'14px',
              fontFamily:'Outfit',
              fontWeight:400
             },
          },
          min: 0,
          max: 100,
          tickAmount: 4,
          labels: {
            formatter: (value) => `${value}%`
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

  gender2(){
    const genderData = this.data.gender;

  const genderKeys = Object.keys(genderData);
  const categories = Object.keys(genderData).map((_, index) => `Seg ${index + 1}`);
  const seriesData = {
    Female: [],
    Male: []
  };

  genderKeys.forEach((key) => {
    const genderGroup = genderData[key];
    Object.keys(genderGroup).forEach((gender) => {
      seriesData[gender].push(genderGroup[gender]);
    });
  });

  const series = Object.keys(seriesData).map((gender) => ({
    name: gender,
    data: seriesData[gender].map((value, index) => {
      const segmentTotal = seriesData['Female'][index] + seriesData['Male'][index];
      const percentage = (value / segmentTotal) * 100;
      return parseFloat(percentage.toFixed(2));
    })
  }));

  
    this.chartOptionsGender2 = {
      series: series,
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
      dataLabels:{
        enabled:false
      },
      colors:["#A7C4FF","#7EA9FF"],
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
        categories: categories,
        labels:{
          style: {
            fontSize:'10px',
            fontFamily:'Outfit',
            fontWeight:400
           },
        }
      },
      yaxis: {
        title: {
          text: "% of Respondents",
          style: {
            fontSize:'14px',
            fontFamily:'Outfit',
            fontWeight:400
           },
        },
        min: 0,
        max: 100,
        tickAmount: 4,
        labels: {
          formatter: (value) => `${value}%`
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

  income2(){
    const incomeData = this.data.income;
    const incomeCategories = Object.keys(incomeData).map((_, index) => `Seg ${index + 1}`);
    const incomeSeries = Object.entries(incomeData).map(([_, data]) => {
      return Object.values(data);
    });
  
    const series = [
      { name: ">50", data: [] },
      { name: "400-500", data: [] },
      { name: "300-400", data: [] },
      { name: "200-300", data: [] },
      { name: "100-200", data: [] },
      { name: "<100", data: [] },
    ];
  
    incomeSeries.forEach((data) => {
      const segmentTotal = data.reduce((total, value) => total + value, 0);
      series.forEach((range, index) => {
        const percentage = (data[index] / segmentTotal) * 100;
        range.data.push(parseFloat(percentage.toFixed(2)));
      });
    });
      this.chartOptionsIncome2 = {
        series:series,
        chart: {
          type: "bar",
          height: 150,
          stacked: true,
          toolbar: { show: true },
          zoom: { enabled: true }
        },
        dataLabels:{
          enabled:false
        },
        colors:["#C3D7FF","#A7C4FF","#6599FF","#3F7FFF","#3974E8","#3974E8"],
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: { position: "bottom", offsetX: -10, offsetY: 0 }
            }
          }
        ],
        plotOptions: { bar: { horizontal: false } },
        xaxis: { type: "category", categories: incomeCategories ,
      labels:{
        style: {
          fontSize:'10px',
          fontFamily:'Outfit',
          fontWeight:400
         },
      }},
        yaxis: {
          title: {
            text: "% of Respondents",
            style: {
              fontSize:'14px',
              fontFamily:'Outfit',
              fontWeight:400
             },
          },
          min: 0,
          max: 100,
          tickAmount: 4,
          labels: {
            formatter: (value) => `${value}%`
          }
        },
        legend: { position: "right", offsetY: 40 },
        fill: { opacity: 1 }
      };
  }
}
