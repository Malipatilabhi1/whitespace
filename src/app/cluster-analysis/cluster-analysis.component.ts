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
      "1": {
        "Very Likely": 15
      }
    }
  }

  tableContent = [
    {name:"packet size", seg1:"0.5", seg2:"1.2", seg3:"1.1", seg4:"2.3", seg5:"0.1", seg6:"0.6" },
    {name:"Experiment", seg1:"1.3", seg2:"2.0", seg3:"3.4", seg4:"0.4", seg5:"0.56", seg6:"0.34" },
    {name:"switchcount", seg1:"0.5", seg2:"1.2", seg3:"1.1", seg4:"2.3", seg5:"0.1", seg6:"0.6" },
    {name:"satisifaction", seg1:"1.3", seg2:"2.0", seg3:"3.4", seg4:"0.4", seg5:"0.56", seg6:"0.34"},
    {name:"Usemonth", seg1:"0.5", seg2:"1.2", seg3:"1.1", seg4:"2.3", seg5:"0.1", seg6:"0.6" },
    {name:"Spend", seg1:"1.3", seg2:"2.0", seg3:"3.4", seg4:"0.4", seg5:"0.56", seg6:"0.34" },
    {name:"Freq", seg1:"0.5", seg2:"1.2", seg3:"1.1", seg4:"2.3", seg5:"0.1", seg6:"0.6" },
    {name:"Sbrand", seg1:"1.3", seg2:"2.0", seg3:"3.4", seg4:"0.4", seg5:"0.56", seg6:"0.34"},
    {name:"Pbrand", seg1:"0.5", seg2:"1.2", seg3:"1.1", seg4:"2.3", seg5:"0.1", seg6:"0.6" },
    {name:"Sgoal", seg1:"1.3", seg2:"2.0", seg3:"3.4", seg4:"0.4", seg5:"0.56", seg6:"0.34" },
    {name:"Pgoal", seg1:"0.5", seg2:"1.2", seg3:"1.1", seg4:"2.3", seg5:"0.1", seg6:"0.6" },
    {name:"Spurpose", seg1:"1.3", seg2:"2.0", seg3:"3.4", seg4:"0.4", seg5:"0.56", seg6:"0.34" },
   
]
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
      enabled: true,
      offsetX: -6,
      style: {
        fontSize: "12px",
        colors: ["#fff"]
      },
      
    },
    xaxis: {
      categories: Object.keys(respondentData)
    }
  };
  }

  willngnessToSwtch() {
    const switchcountData =this.data.switchcount;
    const switchcountCategories = Object.keys(switchcountData).map(key => `Seg ${key}`);
    const switchcountSeries = Object.entries(switchcountData).map(([_, data]) => {
      return Object.values(data);
    });
    this.chartOptionsWillingness = {
      series: [
        { name: "Not Likely", data: switchcountSeries.map(data => data[0]) },
        { name: "Very Likely", data: switchcountSeries.map(data => data[1]) },
        { name: "Wont Mind", data: switchcountSeries.map(data => data[2]) }
      ],
      chart: {
        type: "bar",
        height: 150,
        stacked: true,
        toolbar: { show: true },
        zoom: { enabled: true }
      },
      colors:["#53AAFA","#3B9DF7","#086DC9"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: { position: "bottom", offsetX: -10, offsetY: 0 }
          }
        }
      ],
      plotOptions: { bar: { horizontal: false } },
      xaxis: { type: "category", categories: switchcountCategories },
      yaxis: { title: { text: "% of Respondents" } },
      legend: { position: "right", offsetY: 40 },
      fill: { opacity: 1 }
    };
  }
  spend() {
    const spendData = this.data.spend;
    const spendCategories = Object.keys(spendData).map(key => `Seg ${parseInt(key)}`);
    const spendSeries = Object.entries(spendData).map(([_, data]) => {
      return Object.values(data);
    });
    this.chartOptionsSpend = {
      series: [
        { name: ">50", data: spendSeries.map(data => data[3]) },
        { name: "30-50", data: spendSeries.map(data => data[1]) },
        { name: "<10", data: spendSeries.map(data => data[2]) },
        { name: "10-30", data: spendSeries.map(data => data[0]) },
      ],
      chart: {
        type: "bar",
        height: 150,
        stacked: true,
        toolbar: { show: true },
        zoom: { enabled: true }
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
      xaxis: { type: "category", categories: spendCategories },
      yaxis: { title: { text: "% of Respondents" } },
      legend: { position: "right", offsetY: 40 },
      fill: { opacity: 1 }
    };
  }
  age() {
    const ageData = this.data.age;
    const ageKeys = Object.keys(ageData);
    const categories = ageKeys.map((key) => `Seg ${parseInt(key)}`);
    const respondent= {
      "Segment 0": 30,
      "Segment 1": 15,
      "Segment 2": 8,
      "Segment 3": 14,
      "Segment 4": 22,
      "Segment 5": 11
    };
    const seriesData = {
      "0-25": [],
      "25-40": [],
      "40-50": [],
      "50+": []
    };
  
   
  
    ageKeys.forEach((key) => {
      const ageGroup = ageData[key];
      Object.keys(ageGroup).forEach((range) => {
        seriesData[range].push(ageGroup[range]);
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
      colors:["#6B68D8","#918EF1","#C0BEF7","#D5D3F9"],
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
        categories: categories
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

  gender() {
    const genderData =this.data.gender
   
  
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
      data: seriesData[gender]
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
        categories: categories
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
  income() {
    const incomeData = this.data.income;
    const incomeCategories = Object.keys(incomeData).map(key => `Seg ${parseInt(key)}`);
    const incomeSeries = Object.entries(incomeData).map(([_, data]) => {
      return Object.values(data);
    });
    this.chartOptionsIncome = {
      series: [
        { name: ">50", data: incomeSeries.map(data => data[0]) },
        { name: "400-500", data: incomeSeries.map(data => data[1]) },
        { name: "300-400", data: incomeSeries.map(data => data[2]) },
        { name: "200-300", data: incomeSeries.map(data => data[3]) },
        { name: "100-200", data: incomeSeries.map(data => data[4]) },
        { name: "<100", data: incomeSeries.map(data => data[5]) },
      ],
      chart: {
        type: "bar",
        height: 150,
        stacked: true,
        toolbar: { show: true },
        zoom: { enabled: true }
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
      xaxis: { type: "category", categories: incomeCategories },
      yaxis: { title: { text: "% of Respondents" } },
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
        enabled: true,
        offsetX: -6,
        style: {
          fontSize: "12px",
          colors: ["#fff"]
        },
        
      },
      xaxis: {
        categories: Object.keys(respondentData)
      }
    };
  }
  
  willngnessToSwtch1(){
    this.chartOptionsWillingness1 = {
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
      colors:["#53AAFA","#3B9DF7","#086DC9"],
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

  spend1(){
    this.chartOptionsSpend1 = {
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
      colors:["#6B68D8","#918EF1","#C0BEF7","#D5D3F9"],
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

  age1(){
    this.chartOptionsAge1 = {
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
      colors:["#6B68D8","#918EF1","#C0BEF7","#D5D3F9"],
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

  gender1(){
    this.chartOptionsGender1 = {
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

  income1(){
    this.chartOptionsIncome1 = {
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
      colors:["#C3D7FF","#A7C4FF","#6599FF","#3F7FFF","#3974E8","#3974E8"],
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
        enabled: true,
        offsetX: -6,
        style: {
          fontSize: "12px",
          colors: ["#fff"]
        },
        
      },
      xaxis: {
        categories: Object.keys(respondentData)
      }
    };
  }
  
  willngnessToSwtch2(){
    this.chartOptionsWillingness2 = {
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
      colors:["#53AAFA","#3B9DF7","#086DC9"],
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

  spend2(){
    this.chartOptionsSpend2 = {
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
      colors:["#6B68D8","#918EF1","#C0BEF7","#D5D3F9"],
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

  age2(){
    this.chartOptionsAge2 = {
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
      colors:["#6B68D8","#918EF1","#C0BEF7","#D5D3F9"],
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

  gender2(){
    this.chartOptionsGender2 = {
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

  income2(){
    this.chartOptionsIncome2 = {
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
      colors:["#C3D7FF","#A7C4FF","#6599FF","#3F7FFF","#3974E8","#3974E8"],
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
