import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceChart implements OnInit{

  private dataSubject = new BehaviorSubject<any>(null);
  private yearvalue = new BehaviorSubject<any>(null);
  private monthvalue = new BehaviorSubject<any>(null);
  private chartType = new BehaviorSubject<any>(null);

  data$ = this.dataSubject.asObservable();
  year$ = this.yearvalue.asObservable();
  month$ = this.monthvalue.asObservable();
  type$ = this.chartType.asObservable();
   
  

  ByDevice:undefined
  ByCity:undefined 
  TopFive:undefined
  topfivecity_label:undefined
  topfivecity_count:undefined
  ConversionRate:undefined
  InteractionPerVisit:undefined
  PageViews:undefined
  TotalVisits:undefined
  conversion_label:any = []
  conversion_data:any = []
  sharedData: any;
  sharedData2: any;


  constructor(private http:HttpClient) {

   }
  setData(data: any) {
    this.dataSubject.next(data);
  }
  setYear(year:any){
    this.yearvalue.next(year);
  }
  setMonth(month:any){
    this.monthvalue.next(month);
  }
  setType(type:any){
    this.chartType.next(type)
  }
    
  ngOnInit(): void {
  //   this.getChartInfoByDevice()
  //   this.getChartInfoByCity()
  //   this.getChartInfoTop5()
  //   this.getChartInfoConversionRate()
  //   this.getChartInfoInteractionPerVisit()
  //   this.getChartInfoPageViews()
  //   this.getChartInfoTotalVisits()
  }

  ngOnInitt(): void {
    // this.getChartInfoByDevice()
    // this.getChartInfoByCity()
    // this.getChartInfoTop5()
    // this.getChartInfoConversionRate()
    // this.getChartInfoInteractionPerVisit()
    // this.getChartInfoPageViews()
    // this.getChartInfoTotalVisits()
  }

  getDateData(){
    // this.data$.subscribe(data=>{
      // this.sharedData = data      
    //   return this.sharedData
    // })
    // this.ngOnInit()

    // this.ngOnInitt()
  }

  // getChartInfoByDevice(){
  //   this.http.get(`http://103.168.198.88/demo/dm_api.php?action=dm_proxy_url&param1=device_data&dm_token=f5b8b4e8ad952fb4a3f15a2e51a6f1a6&type=total&year=${this.yearvalue}&month=${this.monthvalue}&chart_name=&visitor_type=`).subscribe((data:any)=>{
  //   this.ByDevice = data
  // })
  // return this.ByDevice
  // }

  // getChartInfoByCity(){
  //   this.http.get(`http://103.168.198.88/demo/dm_api.php?action=dm_proxy_url&param1=city_data&dm_token=f5b8b4e8ad952fb4a3f15a2e51a6f1a6&type=total&year=${this.yearvalue}&month=${this.monthvalue}&chart_name=&visitor_type=`).subscribe((data:any)=>{
  //   this.ByCity = data.city_data
  // })
  // return this.ByCity 
  // }

  // getChartInfoTop5(){
  //   this.http.get(`http://103.168.198.88/demo/dm_api.php?action=dm_proxy_url&param1=top_page_data&dm_token=f5b8b4e8ad952fb4a3f15a2e51a6f1a6&type=total&year=${this.yearvalue}&month=${this.monthvalue}`).subscribe((data:any)=>{
  //   this.TopFive = data
  //   this.topfivecity_label = data.page_name
  //   this.topfivecity_count = data.page_count
  // })
  // return this.TopFive
  // }

  // getChartInfoConversionRate(){
  //   this.http.get(`http://103.168.198.88/demo/dm_api.php?action=dm_proxy_url&param1=conversation_data&dm_token=f5b8b4e8ad952fb4a3f15a2e51a6f1a6&type=total&year=${this.yearvalue}&month=${this.monthvalue}&chart_name=&visitor_type=`).subscribe((data:any)=>{
  //   this.ConversionRate = data
  //   for(let key in data){
  //     this.conversion_label.push(key)
  //     this.conversion_data.push(data[key])
  //   }
  // })
  // return this.ConversionRate
  // }

  // getChartInfoInteractionPerVisit(){
  //   this.http.get(`http://103.168.198.88/demo/dm_api.php?action=dm_proxy_url&param1=interaction_data&dm_token=f5b8b4e8ad952fb4a3f15a2e51a6f1a6&type=total&year=${this.yearvalue}&month=${this.monthvalue}&chart_name=&visitor_type=`).subscribe((data:any)=>{
  //   this.InteractionPerVisit = data
  // })
  // return this.InteractionPerVisit
  // }

  // getChartInfoPageViews(){
  //   this.http.get(`http://103.168.198.88/demo/dm_api.php?action=dm_proxy_url&param1=pageview_data&dm_token=f5b8b4e8ad952fb4a3f15a2e51a6f1a6&type=month&year=${this.yearvalue}&month=${this.monthvalue}&s_date=&e_date=&q_drilldown=`).subscribe((data:any)=>{
  //   this.PageViews = data
  // })
  // return this.PageViews
  // }

  // getChartInfoTotalVisits(){
  //   this.http.get(`http://103.168.198.88/demo/dm_api.php?action=dm_proxy_url&param1=visitors_data&dm_token=f5b8b4e8ad952fb4a3f15a2e51a6f1a6&type=month&year=${this.yearvalue}&month=${this.monthvalue}&chart_name=&visitor_type=`).subscribe((data:any)=>{
  //   this.TotalVisits = data
  // })
  // return this.TotalVisits
  // }
}
