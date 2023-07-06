import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as d3 from 'd3';
declare var Plotly: any;
import { GeneralServiceService } from '../general-service.service';
interface MyNodeData {
  name: string;
  children?: MyNodeData[];
}


import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexYAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  ApexTooltip
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart 
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  tooltip: ApexTooltip
};


export type ChartOptions1 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  tooltip: ApexTooltip
};

@Component({
  selector: 'app-algorithm-selection',
  templateUrl: './algorithm-selection.component.html',
  styleUrls: ['./algorithm-selection.component.css'],
})
export class AlgorithmSelectionComponent implements OnInit {
  @ViewChild('content', {static:false})el!:ElementRef;
 display:boolean = false;
 @ViewChild("chart") chart: ChartComponent;
 public chartOptions: Partial<ChartOptions>;

 @ViewChild("chart1") chart1: ChartComponent;
 public chartOptions1: Partial<ChartOptions1>;
  constructor(private router: Router, private gs: GeneralServiceService) { }

  ngOnInit(): void {
    this.elbow()
    this.eps()
    this.createDendrogram();
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
  isDendrogramVisible = false;
  panelOpenState = false;
  iconClicked(event: Event): void {
    // Code to handle icon click goes here
    // You can choose to close the panel here if needed
  }

 

  runButtonClicked(event: Event): void {
    event.stopPropagation();
    // Code to handle "Run" button click goes here
    // The panel will not close due to event.stopPropagation()
  }
  
  showContent() 
  { 
    this.display= true
    this.isDendrogramVisible = !this.isDendrogramVisible
    console.log('K Means:', this.rowData1); 
    console.log('Agglomerative Hierarchical:', this.rowData2); 
    console.log('DB Scan:', this.rowData3);
  } 
  gotoClusterAnalysis(){
    this.captureScreen()
    this.router.navigate(['./analysis'])
  }
  elbow() {
    const data = [
      2100.84,
      1933.0509803921564,
      1869.7266917293232,
      1822.5468897468895,
      1781.2322638146165,
      1749.5749930381512,
      1710.6379731379734,
      1692.4983660130717,
      1665.7541014541014,
      1623.9922077922076,
    ];
   
  
    this.chartOptions = {
      series: [
        {
          name: "",
          data: data
        }
      ],
      chart: {
        height: 190,
        width: 250,
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
        align: "left",
        style: {
          color: '#222',
         fontSize:'14px',
         fontFamily:'Outfit',
         fontWeight:500,
        }
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5
        }
      },
      xaxis: {
        categories: [],
        title: {
          text: "Number of Clusters",
          style: {
            color: '#666',
           fontSize:'14px',
           fontFamily:'Outfit',
           fontWeight:200
          }
        },
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
          text: "WCSS",
          style: {
            color: '#666',
           fontSize:'14px',
           fontFamily:'Outfit',
           fontWeight:400
          }
        },
        labels: {
          style: {
           fontSize:'10px',
           fontFamily:'Outfit',
           fontWeight:400
          },
          formatter: function (value) {
            // Format the label with exponent and two decimal places
            return value.toExponential(2);
          },

        },
      },
      tooltip: {
        y: {
          formatter: function (value) {
            return value.toExponential(2);
          }
        }
      }
    };
  }



  eps() {
    const data1 = [0.00179321,0.00179321,0.00274461,0.00274461,0.00362566,0.00362566
      ,0.00366902,0.00366902,0.00408797,0.00408797,0.0041042,,0.0041042
      ,0.00415814,0.00415814,0.0048118,,0.0048118,,0.00517817,0.00517817
      ,0.00552017,0.00552017,0.00588498,0.00588498,0.00627253,0.00627253
      ,0.00646966,0.00646966,0.0066441,,0.0066441,,0.00744538,0.00744538
      ,0.00794021,0.00794021,0.00816027,0.00816027,0.00842808,0.00842808
      ,0.00924838,0.00924838,0.0092861,,0.00999747,0.00999747,0.01023775
      ,0.01023775,0.01044386,0.01044386,0.0109208,,0.0109208,,0.01101566
      ,0.01101566,0.01160283,0.01263773,0.01263773,0.01300422,0.01358049
      ,0.01358049,0.01371595,0.01371595,0.01406225,0.01406225,0.01407798
      ,0.01423817,0.01423817,0.01425502,0.01425502,0.01445753,0.01483187
      ,0.01483187,0.01497223,0.01497223,0.01503126,0.01503126,0.01537632
      ,0.01604714,0.01604714,0.01613979,0.01613979,0.01701468,0.01701468
      ,0.0171608,,0.0171608,,0.01729637,0.01729637,0.01737388,0.01737388
      ,0.01745985,0.01778857,0.01778857,0.01805005,0.01805005,0.01805954
      ,0.01805954,0.01817983,0.01817983,0.0184946,,0.0184946,,0.01855947
      ,0.01855947,0.01875695,0.01875695,0.01883333,0.01883333,0.01931543
      ,0.01955521,0.01955521,0.01961435,0.01961435,0.02015292,0.02064112
      ,0.02064112,0.020896,,,0.020896,,,0.02104633,0.02108409,0.02108409
      ,0.02127219,0.02127219,0.02138746,0.02158738,0.02158738,0.02161058
      ,0.02161058,0.02180521,0.02181323,0.02200104,0.02200104,0.02213808
      ,0.02213808,0.02216803,0.02216803,0.02230411,0.02230411,0.0223346
      ,0.0223535,,0.0223535,,0.0224983,,0.0224983,,0.02276211,0.02276211
      ,0.0230315,,0.0230315,,0.02322589,0.02322589,0.02326628,0.02326628
      ,0.02388224,0.02388224,0.02401508,0.02401508,0.02411498,0.02414363
      ,0.02414363,0.02421509,0.02421509,0.02439275,0.02439275,0.02455189
      ,0.02455189,0.02474188,0.02486022,0.02486022,0.02532068,0.0253722
      ,0.0253722,,0.02547922,0.02563386,0.02563386,0.02587026,0.02587349
      ,0.02587349,0.0259107,,0.02596055,0.02607905,0.02607905,0.02614463
      ,0.02614463,0.0262819,,0.0262819,,0.02647644,0.02647644,0.02650732
      ,0.02650732,0.02654881,0.02662413,0.02707533,0.02707533,0.02746972
      ,0.02746972,0.02752548,0.02752548,0.02772448,0.02772448,0.02778823
      ,0.02778823,0.02781773,0.02781773,0.02807681,0.02807681,0.0285603
      ,0.02867086,0.0286775,,0.02872662,0.02872662,0.0288042,,0.0288042
      ,0.02884618,0.02884618,0.02884888,0.02884888,0.02886238,0.02894091
      ,0.02894091,0.02901066,0.02901066,0.02904336,0.02930806,0.02930806
      ,0.02940882,0.02940882,0.02946916,0.02973373,0.02983423,0.02983423
      ,0.03007135,0.03016737,0.03016737,0.03027136,0.03060209,0.03060484
      ,0.03060484,0.03062614,0.03084464,0.03084464,0.03090435,0.03112221
      ,0.03112221,0.03121275,0.03122983,0.03122983,0.03152137,0.03157488
      ,0.03158808,0.03160461,0.03197883,0.03212535,0.03240858,0.03240858
      ,0.03257419,0.03257419,0.03286165,0.03286165,0.03318505,0.03318505
      ,0.03330992,0.03338222,0.0334199,,0.0334199,,0.03384144,0.03384144
      ,0.03397371,0.03397371,0.03404049,0.03409567,0.03409567,0.03411071
      ,0.03411071,0.034288,,,0.03433747,0.03453767,0.03453767,0.03457928
      ,0.03487537,0.03487537,0.03504829,0.03504829,0.03521339,0.03521339
      ,0.03521924,0.03521924,0.03524169,0.03524169,0.0354369,,0.03558465
      ,0.03558465,0.03573945,0.03573945,0.03592928,0.0361327,,0.0361434
      ,0.0361434,,0.03614699,0.03614699,0.03616619,0.03616619,0.03620648
      ,0.03620648,0.036285,,,0.0363918,,0.0363918,,0.03640668,0.03673742
      ,0.03673742,0.03680366,0.03705156,0.03706835,0.03721037,0.03721037
      ,0.03721924,0.03721924,0.03727462,0.03727462,0.03743266,0.037482
      ,0.03758451,0.03758451,0.03762969,0.03762969,0.03771305,0.03771305
      ,0.03778259,0.03782531,0.03788976,0.03801308,0.03809853,0.03833076
      ,0.03833076,0.03843987,0.03847456,0.03847456,0.03854534,0.0388159
      ,0.0388159,,0.03909107,0.03931304,0.03932015,0.0393472,,0.03953375
      ,0.03953375,0.03976996,0.03976996,0.03983637,0.03984457,0.03985188
      ,0.03985188,0.0399189,,0.04006939,0.04006939,0.04013109,0.04031276
      ,0.04031276,0.04037446,0.04037446,0.04041543,0.04041543,0.04043186
      ,0.04043186,0.04045163,0.04045632,0.04045632,0.04049452,0.04049452
      ,0.04071686,0.04127196,0.04144374,0.04144374,0.04146614,0.04146614
      ,0.04165988,0.04198855,0.04202942,0.04207049,0.04207049,0.04211332
      ,0.04220219,0.04220219,0.04220338,0.04221849,0.04221849,0.04225968
      ,0.04243614,0.04257158,0.04259499,0.04275825,0.04275825,0.04302038
      ,0.04337576,0.0434031,,0.04347702,0.04347702,0.04360919,0.04360919
      ,0.04384291,0.04385256,0.04389773,0.04417193,0.04433456,0.04433456
      ,0.04452843,0.04452843,0.04468905,0.04475912,0.04487464,0.04487464
      ,0.04490642,0.04507058,0.04507058,0.04530562,0.04535576,0.04602015
      ,0.04602015,0.04623564,0.04628448,0.04628448,0.04645998,0.04645998
      ,0.04648274,0.04648274,0.04663209,0.04674382,0.04674382,0.04683986
      ,0.04683986,0.04699456,0.0470439,,0.04711531,0.04711531,0.047256
      ,0.04727173,0.04731748,0.04746212,0.0477485,,0.04788155,0.04788155
      ,0.04796917,0.04802878,0.0482045,,0.04824347,0.04824347,0.04840058
      ,0.04858278,0.04859916,0.04859916,0.04861296,0.04870398,0.04871794
      ,0.04898456,0.04899314,0.0492437,,0.0492437,,0.04968626,0.04991161
      ,0.04991704,0.04996871,0.05013614,0.05030003,0.05030003,0.05058958
      ,0.05058958,0.05061298,0.0506202,,0.0506386,,0.0508877,,0.05138242
      ,0.05139192,0.05151476,0.0517287,,0.05175644,0.05175644,0.05176136
      ,0.05196043,0.05196043,0.05204458,0.05212128,0.05212128,0.05285455
      ,0.05291952,0.05317566,0.05336989,0.05336989,0.05337166,0.05354176
      ,0.05354176,0.05359873,0.05370271,0.05370271,0.05385037,0.05391447
      ,0.05410837,0.05432097,0.0543924,,0.05452122,0.05477156,0.05477156
      ,0.05490364,0.05490364,0.05491182,0.05491182,0.0550316,,0.0550316
      ,0.05507969,0.05530278,0.05572076,0.05572076,0.05576579,0.05576579
      ,0.05597773,0.05606746,0.05613237,0.05617762,0.05638593,0.05643323
      ,0.05643323,0.05660783,0.05660783,0.05669384,0.05669384,0.05669823
      ,0.05728737,0.05767703,0.05767703,0.05772006,0.05772006,0.0577741
      ,0.05803361,0.05807627,0.05807627,0.05887999,0.05887999,0.0590061
      ,0.05965629,0.05965629,0.06017047,0.06025177,0.06034963,0.06034963
      ,0.06046723,0.06047215,0.06047215,0.0605568,,0.0605568,,0.06057448
      ,0.06057448,0.06071618,0.06175885,0.06175885,0.06180025,0.06182697
      ,0.06196194,0.06239916,0.06239916,0.06241766,0.06258068,0.06258068
      ,0.06282536,0.06292442,0.06296701,0.06296701,0.06340778,0.06372697
      ,0.06403387,0.06524472,0.06533571,0.06533571,0.06534789,0.06572902
      ,0.06585374,0.0660661,,0.0660661,,0.06612837,0.06622139,0.06662258
      ,0.06706068,0.06736597,0.06736597,0.06773582,0.06789686,0.06789686
      ,0.06823053,0.06823053,0.06835018,0.06843655,0.06843655,0.06855626
      ,0.06855626,0.06888489,0.06968338,0.06968338,0.06977351,0.06985828
      ,0.07069484,0.07091666,0.07093603,0.07096464,0.07096464,0.07109441
      ,0.07132134,0.07147722,0.07179668,0.07190434,0.07208843,0.07253709
      ,0.07291708,0.07328071,0.0733438,,0.07404862,0.07405374,0.07405374
      ,0.07429562,0.07465386,0.07499425,0.07499425,0.0751328,,0.0751328
      ,0.07520002,0.07529067,0.07541313,0.07584586,0.07653389,0.07690952
      ,0.07709898,0.07709898,0.07751497,0.07751497,0.07846851,0.07849893
      ,0.07852035,0.07852035,0.0793549,,0.07956479,0.07956479,0.08081689
      ,0.08118129,0.08118129,0.08278289,0.08278289,0.08367576,0.08545039
      ,0.08638104,0.08638104,0.08848932,0.08848932,0.08860582,0.08884442
      ,0.08904142,0.08904142,0.08940794,0.0894242,,0.08979858,0.08994985
      ,0.08994985,0.09005866,0.09075516,0.09109812,0.0912321,,0.09162751
      ,0.09162751,0.09586811,0.09586811,0.09611543,0.0973102,,0.09749301
      ,0.09843202,0.09843202,0.09871275,0.09881204,0.09881204,0.09911587
      ,0.09944201,0.10004674,0.10024761,0.1009324,,0.10146437,0.10171004
      ,0.10209858,0.10312906,0.10423219,0.10480373,0.10480373,0.10491031
      ,0.10516466,0.10526029,0.10526029,0.10556279,0.10580755,0.10660606
      ,0.10724193,0.10824575,0.10824621,0.10824621,0.10888162,0.11004779
      ,0.11103108,0.11103108,0.11127994,0.11323768,0.11375554,0.11444352
      ,0.11557085,0.11789386,0.11842522,0.11902826,0.11958818,0.12092425
      ,0.12141276,0.12192441,0.12241145,0.12267286,0.12799152,0.13091473
      ,0.13091473,0.13264007,0.13264007,0.13420507,0.13459217,0.13459217
      ,0.1363548,,0.13911881,0.13934616,0.14428494,0.14428494,0.14618475
      ,0.14618475,0.15401128,0.15401128,0.15555919,0.15589496,0.15619317
      ,0.15655593,0.16885391,0.16885391,0.17451801,0.17999081,0.18682911
      ,0.19234297,0.199275,,,0.20002158,0.20153811,0.20187271,0.20237466
      ,0.20678492,0.20934955,0.21557203,0.21651334,0.23788559,0.24247598
      ,0.24848038,0.26288019,0.28293695,0.28713078,0.31846389,0.4931595]
     const data = data1.filter((value)=> value !==undefined)
    data.sort((a,b)=>a-b);
    // Create an empty array to hold the labels for the x-axis
    const labels = [];
    // Loop through the data and add a label for every 30th value
   for (let i = 0; i < data.length; i++) {
    if (i % 100 === 0) {
      labels.push(i.toString());
    } else {
      labels.push('');
    }
  }  
    this.chartOptions1 = {
      series: [
        {
          name: "",
          data: data
        }
      ],
      chart: {
        height: 190,
        width: 250,
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
        text: "EPS Graph",
        align: "left",
        style: {
          color: '#222',
         fontSize:'14px',
         fontFamily:'Outfit',
         fontWeight:500,
        }
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5
        }
      },
      xaxis: {
        categories: labels,
        title: {
          text: "Number of Clusters",
          style: {
            color: '#666',
           fontSize:'14px',
           fontFamily:'Outfit',
           fontWeight:400
          }
        },
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
          text: "eps",
          style: {
            color: '#666',
           fontSize:'14px',
           fontFamily:'Outfit',
           fontWeight:400
          }
        },
        labels: {
          style: {
            fontSize:'10px',
            fontFamily:'Outfit',
            fontWeight:400
           },
          formatter: function (value) {
            // Format the label with exponent and two decimal places
            return value.toExponential(2);
          },
        },
      },
      tooltip: {
        y: {
          formatter: function (value) {
            return value.toExponential(2);
          }
        }
      }
    };
  }
  
  createDendrogram(): void {
    const data: MyNodeData = {
      name: 'Root',
      children: [
        { name: '3' },
        {
          name: '5',
          children: [
            { name: '2' },
            {
              name: '4',
              children: [
                { name: '0' },
                { name: '1' }
              ]
            }
          ]
        }
      ]
    };

    const width = 300; // Adjust the width as needed
    const height = 155; // Adjust the height as needed

    const svg = d3.select('#dendrogram')
  .append('svg')
  .attr('width', width)
  .attr('height', height + 5); // Increase the height to provide space for the complete circles

    const tree = d3.tree<MyNodeData>()
      .size([width - 100, height]) // Swap width and height for vertical layout

    const root = d3.hierarchy<MyNodeData>(data);
    const treeData = tree(root);

    const link = svg.selectAll('path')
      .data(treeData.links())
      .enter()
      .append('path')
      .attr('d', d => {
        return 'M' + d.source.x + ',' + d.source.y + // Swap x and y
          'H' + d.target.x + // Use horizontal line to connect nodes
          'V' + d.target.y; // Vertical line to target node
      })
      .attr('fill', 'none')
      .attr('stroke', '#ccc');

      const node = svg.selectAll('g')
      .data(treeData.descendants())
      .enter()
      .append('g')
      .attr('transform', d => 'translate(' + d.x + ',' + d.y + ')');
      

      node.append('circle')
      .attr('r', (d)=>d.parent ? 5:0)
      .attr('fill', 'steelblue');

    node.append('text')
      .attr('dy', 3)
      .attr('y', -8) // Adjust the positioning of the text
      .attr('text-anchor', 'middle')
      .text(d => d.data.name);
  }
  
  private captureScreen() {
    const element = this.el.nativeElement;
    this.gs.captureScreen(element);
  }
}
