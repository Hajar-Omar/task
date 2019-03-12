import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BarChartService {

  url: string = 'http://tasheelqs.mohre.gov.ae:9080/CCRTasheel/branch/served/emirates/period/day';
  constructor(private httpClient :HttpClient) { }

  getBarChartData(){
    return this.httpClient.get<IBarChart>(this.url);
  }

}
