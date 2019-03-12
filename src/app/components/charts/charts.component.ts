import { Component, OnInit } from '@angular/core';
import { BarChartService } from '../../services/barChart/bar-chart.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  served: string[] = [];
  names: string[] = [];
  chart: [];
  result:[];

  constructor(private barChartService: BarChartService) { }

  ngOnInit() {
    this.barChartService.getBarChartData().subscribe(res => {

      console.log(res)
      console.log(res[0])
      console.log(res[0].served)
      // for (let index = 0; index < res; index++) {
      //   for (const iterator of res[index]) {
      //     this.served.push(iterator.served)
      //   }
      // }
     

    
      // console.log(res.length)
      // for (let index = 0; index < res.length; index++) {
      //  const element = array[index];
        
      // }
     // this.result = res[0];
// res.forEach((ele) => {
//      this.served.push(ele)
//      this.names.push(ele)
//    });

      console.log(this.served);
      console.log(this.names);

      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
          labels: this.names,
          datasets: [
            {
              data: this.served,
              borderColor: '#3cba9f',
              fill: false
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }],
          }
        }
      });
    });

    

  }

}
