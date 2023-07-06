import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApexYAxis, ChartComponent } from "ng-apexcharts";
import html2canvas from 'html2canvas';
import { GeneralServiceService } from '../general-service.service';
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

// algorithm1
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  colors:any;
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
  colors:any;
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
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  colors:any;
};
export type ChartOptionsWillingness1 = {
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
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  colors:any;
};
export type ChartOptionsWillingness2 = {
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
        "0-25": 7,
        "25-40": 9,
        "40-50": 3,
        "50+": 11
      },
      "1": {
        "25-40": 13,
        "40-50": 2
      },
      "2": {
        "0-25": 2,
        "25-40": 3,
        "40-50": 1,
        "50+": 2
      },
      "3": {
        "0-25": 2,
        "25-40": 7,
        "40-50": 2,
        "50+": 3
      },
      "4": {
        "0-25": 11,
        "25-40": 1,
        "40-50": 7,
        "50+": 3
      },
      "5": {
        "0-25": 3,
        "25-40": 1,
        "40-50": 4,
        "50+": 3
      }
    },
    "gender": {
      "0": {
        "Female": 17,
        "Male": 13
      },
      "1": {
        "Male": 15
      },
      "2": {
        "Female": 3,
        "Male": 5
      },
      "3": {
        "Female": 10,
        "Male": 4
      },
      "4": {
        "Female": 11,
        "Male": 11
      },
      "5": {
        "Female": 2,
        "Male": 9
      }
    },
    "income": {
      "0": {
        "0-25000": 11,
        "100000+": 6,
        "25000-50000": 11,
        "50000-100000": 2
      },
      "1": {
        "25000-50000": 15
      },
      "2": {
        "100000+": 3,
        "25000-50000": 2,
        "50000-100000": 3
      },
      "3": {
        "0-25000": 4,
        "100000+": 3,
        "25000-50000": 1,
        "50000-100000": 6
      },
      "4": {
        "0-25000": 1,
        "100000+": 6,
        "25000-50000": 7,
        "50000-100000": 8
      },
      "5": {
        "0-25000": 7,
        "100000+": 3,
        "25000-50000": 1
      }
    },
    "respondent": {
      "Segment 0": 30,
      "Segment 1": 15,
      "Segment 2": 8,
      "Segment 3": 14,
      "Segment 4": 22,
      "Segment 5": 11
    },
    "spend": {
      "0": {
        "10-30": 14,
        "30-50": 2,
        "<10": 5,
        ">50": 9
      },
      "1": {
        "30-50": 4,
        ">50": 11
      },
      "2": {
        "10-30": 3,
        "30-50": 1,
        ">50": 4
      },
      "3": {
        "10-30": 1,
        "30-50": 3,
        "<10": 4,
        ">50": 6
      },
      "4": {
        "10-30": 5,
        "30-50": 4,
        "<10": 3,
        ">50": 10
      },
      "5": {
        "10-30": 2,
        "30-50": 8,
        "<10": 1
      }
    },
    "switchcount": {
      "0":{
        "Very Likely":20
       
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
  a = Object.keys(this.tableContent)
  b=Object.keys(this.tableContent['0'])
  getCellStyles(segment: string, feature: string) {
    const value = this.tableContent[segment][feature];
    let cellStyles = {};
    // Add different colors based on the feature values
    if (value < 0.5) {
      cellStyles = {
        'background-color': '#C3D7FF',
        color: 'white'
      };
    } else if (value < 1) {
      cellStyles = {
        'background-color': '#A7C4FF',
        color: 'white'
      };
    }else{
      cellStyles = {
        'background-color': '#6599FF',
        color: 'white'
      };
    }
    // Add more conditions for other feature values

    return cellStyles;
  }





  constructor(private gs: GeneralServiceService) { }

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
  this.chartOptions = {
    series: [
      {
        name: "",
        data: barData
      }
    ],
    chart: {
      type: "bar",
      height: 150
    },
   
    colors:["#91ADFD","#FFE0C2","#C0BBEB","#A3F5EC","#FDE68C","#D6D6D6"],
    plotOptions: {
      bar: {
        horizontal: true,
        distributed: true,
      }
    },
    dataLabels: {
      enabled: false,
      offsetX: -6,
      style: {
        fontSize: "14px",
        colors: ["#fff"],
          fontFamily:'Outfit',
          fontWeight:400
         
      },
      
    },
    xaxis: {
      categories: Object.keys(respondentData),
      labels:{
        style: {
          fontSize:'10px',
          fontFamily:'Outfit',
          fontWeight:400
         },
      }
    }
   

  };
  }

  willngnessToSwtch() {
    const switchcountData = this.data.switchcount;
    const switchcountCategories = Object.keys(switchcountData).map((key) => `Seg ${key}`);
    const switchcountSeries = Object.entries(switchcountData).map(([_, data]) => {
      return Object.values(data);
    });
  
    const seriesData = [
      { name: "Not Likely", data: [] },
      { name: "Very Likely", data: [] },
      { name: "Won't Mind", data: [] }
    ];
  
    switchcountSeries.forEach((data, index) => {
      const segmentTotal = data.reduce((total, value) => total + value, 0);
      const formattedData = data.map((value) => parseFloat(((value / segmentTotal) * 100).toFixed(2)));
      seriesData[index].data = formattedData;
    });
    this.chartOptionsWillingness = {
      series:seriesData,
      chart: {
        type: "bar",
        height: 150,
        stacked: true,
        toolbar: { show: true },
        zoom: { enabled: true }
      },
      colors:["#53AAFA","#3B9DF7","#086DC9"],
      dataLabels:{
        enabled:false
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: { position: "bottom", offsetX: -10, offsetY: 0 }
          }
        }
      ],
      plotOptions: { bar: { horizontal: false } },
      xaxis: { type: "category", categories: switchcountCategories,
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
          formatter: (value) => `${value}%`,
          style: {
            fontSize:'10px',
            fontFamily:'Outfit',
            fontWeight:400
           },
        }
      },
      legend: { position: "right", offsetY: 40,
     },
      fill: { opacity: 1 }
    };
  }
  spend() {
    const spendData = this.data.spend;
    const spendCategories = Object.keys(spendData).map((key) => `Seg ${parseInt(key)}`);
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
    const ageData: { [key: string]: { [key: string]: number } } = this.data.age;

  const ageKeys = Object.keys(ageData);
  const categories = ageKeys.map((key) => `Seg ${parseInt(key)}`);

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
  gender() {
    const genderData = this.data.gender;

  const genderKeys = Object.keys(genderData);
  const categories = genderKeys.map((key) => `Seg ${parseInt(key)}`);
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
  const incomeCategories = Object.keys(incomeData).map((key) => `Seg ${parseInt(key)}`);
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
    const respondentData = this.data.respondent;
    const barData = Object.values(respondentData);
    this.chartOptions1 = {
      series: [
        {
          name: "",
          data: barData
        }
      ],
      chart: {
        type: "bar",
        height: 150
      },
      colors:["#91ADFD","#FFE0C2","#C0BBEB","#A3F5EC","#FDE68C","#D6D6D6"],
      plotOptions: {
        bar: {
          horizontal: true,
          distributed: true,
        }
      },
      dataLabels: {
        enabled: false,
        offsetX: -6,
        style: {
          fontSize: "12px",
          colors: ["#fff"]
        },
        
      },
      xaxis: {
        categories: Object.keys(respondentData),
        labels:{
          style: {
            fontSize:'10px',
            fontFamily:'Outfit',
            fontWeight:400
           },
        }
      }
    };
  }
  
  willngnessToSwtch1(){
    const switchcountData = this.data.switchcount;
    const switchcountCategories = Object.keys(switchcountData).map((key) => `Seg ${key}`);
    const switchcountSeries = Object.entries(switchcountData).map(([_, data]) => {
      return Object.values(data);
    });
  
    const seriesData = [
      { name: "Not Likely", data: [] },
      { name: "Very Likely", data: [] },
      { name: "Won't Mind", data: [] }
    ];
  
    switchcountSeries.forEach((data, index) => {
      const segmentTotal = data.reduce((total, value) => total + value, 0);
      const formattedData = data.map((value) => parseFloat(((value / segmentTotal) * 100).toFixed(2)));
      seriesData[index].data = formattedData;
    });
    this.chartOptionsWillingness1 = {
      series:seriesData,
      chart: {
        type: "bar",
        height: 150,
        stacked: true,
        toolbar: { show: true },
        zoom: { enabled: true }
      },
      colors:["#53AAFA","#3B9DF7","#086DC9"],
      dataLabels:{
        enabled:false
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: { position: "bottom", offsetX: -10, offsetY: 0 }
          }
        }
      ],
      plotOptions: { bar: { horizontal: false } },
      xaxis: { type: "category", categories: switchcountCategories,
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
          formatter: (value) => `${value}%`,
          style: {
            fontSize:'10px',
            fontFamily:'Outfit',
            fontWeight:400
           },
        }
      },
      legend: { position: "right", offsetY: 40,
     },
      fill: { opacity: 1 }
    };
  }

  spend1(){
    const spendData = this.data.spend;
    const spendCategories = Object.keys(spendData).map((key) => `Seg ${parseInt(key)}`);
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
    const ageData: { [key: string]: { [key: string]: number } } = this.data.age;

    const ageKeys = Object.keys(ageData);
    const categories = ageKeys.map((key) => `Seg ${parseInt(key)}`);
  
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
    const genderData = this.data.gender;

    const genderKeys = Object.keys(genderData);
    const categories = genderKeys.map((key) => `Seg ${parseInt(key)}`);
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
    const incomeData = this.data.income;
    const incomeCategories = Object.keys(incomeData).map((key) => `Seg ${parseInt(key)}`);
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
    this.chartOptions2 = {
      series: [
        {
          name: "",
          data: barData
        }
      ],
      chart: {
        type: "bar",
        height: 150
      },
      colors:["#91ADFD","#FFE0C2","#C0BBEB","#A3F5EC","#FDE68C","#D6D6D6"],
      plotOptions: {
        bar: {
          horizontal: true,
          distributed: true,
        }
      },
      dataLabels: {
        enabled: false,
        offsetX: -6,
        style: {
          fontSize: "12px",
          colors: ["#fff"]
        },
        
      },
      xaxis: {
        categories: Object.keys(respondentData),
        labels:{
          style: {
            fontSize:'10px',
            fontFamily:'Outfit',
            fontWeight:400
           },
        }
      }
    };
  }
  
  willngnessToSwtch2(){
    const switchcountData = this.data.switchcount;
    const switchcountCategories = Object.keys(switchcountData).map((key) => `Seg ${key}`);
    const switchcountSeries = Object.entries(switchcountData).map(([_, data]) => {
      return Object.values(data);
    });
  
    const seriesData = [
      { name: "Not Likely", data: [] },
      { name: "Very Likely", data: [] },
      { name: "Won't Mind", data: [] }
    ];
  
    switchcountSeries.forEach((data, index) => {
      const segmentTotal = data.reduce((total, value) => total + value, 0);
      const formattedData = data.map((value) => parseFloat(((value / segmentTotal) * 100).toFixed(2)));
      seriesData[index].data = formattedData;
    });
    this.chartOptionsWillingness2 = {
      series:seriesData,
      chart: {
        type: "bar",
        height: 150,
        stacked: true,
        toolbar: { show: true },
        zoom: { enabled: true }
      },
      colors:["#53AAFA","#3B9DF7","#086DC9"],
      dataLabels:{
        enabled:false
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: { position: "bottom", offsetX: -10, offsetY: 0 }
          }
        }
      ],
      plotOptions: { bar: { horizontal: false } },
      xaxis: { type: "category", categories: switchcountCategories,
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
          formatter: (value) => `${value}%`,
          style: {
            fontSize:'10px',
            fontFamily:'Outfit',
            fontWeight:400
           },
        }
      },
      legend: { position: "right", offsetY: 40,
     },
      fill: { opacity: 1 }
    };

  }

  spend2(){
    const spendData = this.data.spend;
    const spendCategories = Object.keys(spendData).map((key) => `Seg ${parseInt(key)}`);
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
    const categories = ageKeys.map((key) => `Seg ${parseInt(key)}`);
  
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
  const categories = genderKeys.map((key) => `Seg ${parseInt(key)}`);
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
    const incomeCategories = Object.keys(incomeData).map((key) => `Seg ${parseInt(key)}`);
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
