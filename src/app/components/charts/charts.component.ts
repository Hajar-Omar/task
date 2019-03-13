import { Component, OnInit } from '@angular/core';
import { BarChartService } from '../../services/barChart/bar-chart.service';
import { Chart } from 'angular-highcharts';
import * as Highchart from 'highcharts';
@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {

  chart :any;
  result =[];

  constructor(private barChartService: BarChartService) { }

  ngOnInit() {

  this.barChartService.getBarChartData().subscribe((res:any) => {

    res.forEach((ele:any) => {
      this.result.push(
        [
          ele.name,
          Number(ele.served)
        ]);
    });

    console.log(this.result);

    this.chart = new Chart({
      chart: {
        type: 'line'
      },
      title: {
        text: 'Linechart'
      },
      credits: {
        enabled: false
      },
      xAxis: {
        type: 'category',
        labels: {
            rotation: -45,
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
      },
      yAxis: {
        min: 0,
        title: {
            text: 'Population (millions)'
        }
    },
      series: [
        { 
          name: "Line",
          data: this.result
        }
      ]
    });



  });

}
}