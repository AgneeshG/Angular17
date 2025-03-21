import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { ServiceChart } from '../../serviceChart/service.service';
import { HttpClient } from '@angular/common/http';
import { Chart,registerables } from 'chart.js/auto';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { Calendar4Component } from '../calendar4/calendar4.component';
import { SamCalendarComponent } from '../sam-calendar/sam-calendar.component';
Chart.register(...registerables)



@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [NavbarComponent,HeaderComponent,CommonModule,Calendar4Component,SamCalendarComponent],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.css'
})
export class MainChartsComponent implements OnInit{
  ByDevice:any
  ByCity:any 
  TopFive:any
  ConversionRate:any
  InteractionPerVisit:any
  PageViews:any
  TotalVisits:any
  citydata_value:any[] = []
  citydata_name:any[] = []
  top5_label:any = []
  top5_data:any = []
  conversion_label:any = []
  conversion_data:any = []
  interaction_bar:any = []
  interaction_line:any = []
  interaction_label:any = []

  calendarValue:any
  yearvalue: any
  monthvalue:any
  calType:any = "month"


  topfivecity_label:any
  topfivecity_count:any 
  bydevice_desktop:any 
  cityData:{}[] = []


  devicechart_desktop:any
  devicechart_tablet:any
  devicechart_mobile:any
  byCityChart:any
  totalvisits: any;
  pageviews: any;
  interactionpervisit: any;
  Conversionrate: any;
  top5chart: any;

  constructor(private service:ServiceChart, private http:HttpClient){
    // this.ByDevice = this.getChartInfoByDevice()
    // this.ByCity = this.getChartInfoByCity()
    // this.TopFive = this.getChartInfoTop5()
    // this.ConversionRate = this.getChartInfoConversionRate()
    // this.InteractionPerVisit = this.getChartInfoInteractionPerVisit()
    // this.PageViews = this.getChartInfoPageViews()
    // this.TotalVisits = this.getChartInfoTotalVisits()

    // this.top5_data = this.service.topfivecity_count
    // this.top5_label = this.service.topfivecity_label
    // this.conversion_label = this.service.conversion_label
    // this.conversion_data = this.service.conversion_data
  }
  ngOnInit(): void {
    this.service.data$.subscribe(selectedDate => this.calendarValue = selectedDate)
    this.service.year$.subscribe(selectedDate => this.yearvalue = selectedDate)
    this.service.month$.subscribe(selectedDate => this.monthvalue = selectedDate)
    this.service.type$.subscribe(selectedDate => this.calType = selectedDate)
    
    if(this.calendarValue == null){
      this.calendarValue = new Date()
      console.log(this.calendarValue);
      // this.loadChartData(this.calendarValue)
    }
    if(this.yearvalue == null){
      this.yearvalue = new Date().getFullYear()
      console.log(this.yearvalue);
      // this.loadChartData(this.yearvalue.getFullYear())
    }   
    if(this.monthvalue == null){
      this.monthvalue = new Date().getMonth()+1
      console.log(this.monthvalue);
      // this.loadChartData(this.monthvalue.getMonth())
    }   
    if(this.calType == null){
      this.calType = "year"
      console.log(this.calType);
      // this.loadChartData(this.calType)
    }
    setTimeout(() => {
      this.loadChartData()
    }, 1000);
  }


  loadChartData(){
    // this.ngOnInit()
    console.log(this.calendarValue);
    console.log(this.yearvalue,this.monthvalue,this.calType);

    // this.yearvalue = date.getFullYear()
    // this.monthvalue = date.getMonth() + 1
    console.log(this.yearvalue);
    console.log(this.monthvalue);
    this.getChartInfoByDevice(this.yearvalue, this.monthvalue,this.calType)
    this.getChartInfoByCity(this.yearvalue, this.monthvalue,this.calType)
    this.getChartInfoTop5(this.yearvalue, this.monthvalue,this.calType)
    this.getChartInfoConversionRate(this.yearvalue, this.monthvalue,this.calType)
    this.getChartInfoTotalVisits(this.yearvalue, this.monthvalue, this.calType)
    this.getChartInfoPageViews(this.yearvalue, this.monthvalue, this.calType)
    this.getChartInfoInteractionPerVisit(this.yearvalue, this.monthvalue, this.calType)

    setTimeout(() => {
      this.loadChart()
    }, 2000);
  }


  loadChart(){
    console.log(this.calendarValue); 
    console.log(this.ByDevice)
    console.log(this.ByCity)
    console.log(this.TopFive)
    console.log(this.ConversionRate)
    console.log(this.InteractionPerVisit)
    console.log(this.PageViews)
    console.log(this.TotalVisits)
    console.log(this.citydata_value);
    


    this.renderByDeviceChart(this.ByDevice)
    this.renderByCityChart(this.citydata_name,this.citydata_value)    
    this.renderTop5Chart(this.top5_label,this.top5_data)
    this.renderConversionRateChart(this.conversion_label, this.conversion_data)
    this.renderInteractionPerVisitChart(this.InteractionPerVisit.avg_time_total,this.InteractionPerVisit.pages_per_visit,this.InteractionPerVisit.axis_label_list)
    this.renderPageViewsChart(this.PageViews.return_visitors,this.PageViews.new_visitors,this.PageViews.total_visitors,this.PageViews.x_axis_data)
    this.renderTotalVisitsChart(this.TotalVisits.return_visitors,this.TotalVisits.new_visitors,this.TotalVisits.total_visitors,this.TotalVisits.all_visitors,this.TotalVisits.visitors_period)
 
  }





// =======================================================================================================================



/* ------------ Device Chart ------------ */
  renderByDeviceChart(device:any){
    if(this.devicechart_desktop,this.devicechart_tablet,this.devicechart_mobile){
      this.devicechart_desktop.destroy(),
      this.devicechart_mobile.destroy(),
      this.devicechart_tablet.destroy()
    }
    this.devicechart_desktop = new Chart("devicechart-desktop",{
      type:"doughnut",
      data:{
        datasets:[{
          data:[device['desktop'],100-device['desktop']],
          backgroundColor:["#f02252","#aab0b5"],
          borderColor:["#f02252","#aab0b5" ],
          borderWidth:0.2,
          hoverBorderWidth:8
      }]
      },

      options:{
        plugins:{
          tooltip:{
            enabled:false
          }
        }
      }
    })
    this.devicechart_tablet = new Chart("devicechart-tablet",{
      type:"doughnut",
      data:{
        datasets:[{
          data:[device['tablet'],100-device['tablet']],
          backgroundColor:["#2939cc","#aab0b5"],
          borderColor:["#2939cc","#aab0b5" ],
          borderWidth:0.2,
          hoverBorderWidth:4
      }]
      },
    })
    this.devicechart_mobile = new Chart("devicechart-mobile",{
      type:"doughnut",
      data:{
        datasets:[{
          data:[device['mobile'],100-device['mobile']],
          backgroundColor:["#b8ba34","#aab0b5"],
          borderColor:["#b8ba34","#aab0b5" ],
          borderWidth:0.2
      }]
      },
    })
  }


/* ------------ City Chart ------------ */
  renderByCityChart(labels:any,datas:any){
    if(this.byCityChart){
      this.byCityChart.destroy()
    }
    this.byCityChart = new Chart("bycity",{
      type:"doughnut",
      data:{
        // labels:labels,
        datasets:[{
          data:datas,
          backgroundColor:["#fcba03","black","#fc3503","#5ba8a8","#7c7fe6","#4d0d45","#c7c3ad","#a1659a","#224ed4","#52212a","#78cc5e","#c71242","#55e8f2","#7ce6bf"],
          borderColor:["black"],
          borderWidth:0.2
        }]
      }
      
    })
  }


/* ------------ Top Five Chart ------------ */
  renderTop5Chart(labels:any, datas:any){
    if(this.top5chart){
      this.top5chart.destroy()
    }
   this.top5chart = new Chart("topfive",{
    type:"bar",
    data:{
      labels:labels,
      datasets:[{
        data:datas,
        backgroundColor:["blue"],
        borderColor:["black"],
        borderWidth:0.2
      }]
    },
    options:{
      indexAxis:'y',
      // scales:{
      //   y:{
      //     beginAtZero:true
      //   }
      // }
    }
   })
  }

  
/* ------------ Conversion Rate Chart ------------ */
  renderConversionRateChart(labels:any, datas:any){
    if(this.Conversionrate){
      this.Conversionrate.destroy()
    }
      this.Conversionrate = new Chart("Conversionrate",{
       type:"bar",
       data:{
         labels:labels,
         datasets:[{
          label:"Conversion Rate",
           data:datas,
           backgroundColor:["blue"],
           borderColor:["black"],
           borderWidth:0.2
         }]
       },
       options:{
         indexAxis:'y',
         // scales:{
         //   y:{
         //     beginAtZero:true
         //   }
         // }
       }
      })
     }
  


/* ------------ Interaction Per Visit Chart ------------ */
  renderInteractionPerVisitChart(bar:any,line:any,label:any){
    if(this.interactionpervisit){
      this.interactionpervisit.destroy()
    }
    this.interactionpervisit = new Chart("interaction",{
      data: {
        datasets: [{
            type: 'bar',
            label: 'Average Time in Minutes',
            data: bar
        }, {
            type: 'line',
            label: 'Pages per Visit',
            data: line,
        }],
        labels: label
    },
    options: {}
    })
  }


/* ------------ PAge Views Chart ------------ */
  renderPageViewsChart(bar1:any,bar2:any,line:any,label:any){
    if(this.pageviews){
      this.pageviews.destroy()
    }
    this.pageviews = new Chart("pageviews",{
      data:{
        labels:label,
        datasets:[{
          label:"Returning Views",
          type:"bar",
          data:bar1,
          backgroundColor:"#faf20a",
          borderColor:"#faf20a"
        },{
          label:"New Views",
          type:"bar",
          data:bar2,
          borderColor:"#4cd104",
          backgroundColor:"#4cd104"
        },{
          label:"Total Views",
          type:"line",
          data:line,
          backgroundColor:"#0817bf",
          borderColor:"#0817bf"
        }]
      },
      options:{
        scales: { 
          x: { 
              stacked: true, 
          }, 
          y: { 
              stacked: true 
          },

      } 
      }
    })
  }

// 
/* ------------ Total Visits Chart ------------ */
  renderTotalVisitsChart(bar1:any,bar2:any,line1:any,line2:any,label:any){
    if(this.totalvisits){
      this.totalvisits.destroy()
    }
    this.totalvisits = new Chart("totalvisits",{
      data:{
        labels:label,
        datasets:[{
          label:"Returning Views",
          type:"bar",
          data:bar1,
          backgroundColor:"#cf8584",
          borderColor:"#cf8584"
        },{
          label:"New Views",
          type:"bar",
          data:bar2,
          borderColor:"#6f9e70",
          backgroundColor:"#6f9e70"
        },{
          label:"Total Views",
          type:"line",
          data:line1,
          backgroundColor:"#777a85",
          borderColor:"#777a85"
        },{
          label:"Total Views",
          type:"line",
          data:line2,
          backgroundColor:"#b3b8c9",
          borderColor:"#b3b8c9"
        }]
      },
      options:{
        scales: { 
          x: { 
              stacked: true, 
          }, 
          y: { 
              stacked: true 
          },

      } 
      }
    })
  }


// =======================================================================================================================


getChartInfoByDevice(year:any,month:any,type:any){
  if(type=="quarter" || type=="month"){
    type="total"
  } else if(type=="week" || type=="day"){
    type="month"
  }
  return this.http.get(`http://103.168.198.88/demo/dm_api.php?action=dm_proxy_url&param1=device_data&dm_token=f5b8b4e8ad952fb4a3f15a2e51a6f1a6&type=${type}&year=${year}&month=${month}&chart_name=&visitor_type=`).subscribe((data:any)=>{
  this.ByDevice = data
  this.bydevice_desktop = this.ByDevice.desktop
})
}

getChartInfoByCity(year:any,month:any,type:any){
  if(type=="quarter" || type=="month"){
    type="total"
  } else if(type=="week" || type=="day"){
    type="month"
  }
  return this.http.get(`http://103.168.198.88/demo/dm_api.php?action=dm_proxy_url&param1=city_data&dm_token=f5b8b4e8ad952fb4a3f15a2e51a6f1a6&type=${type}&year=${year}&month=${month}&chart_name=&visitor_type=`).subscribe((data:any)=>{
  this.ByCity = data
  
  for(let i=0;i<data.city_data.length;i++){
    console.log(data.city_data[i],i);
    this.citydata_value.push(data.city_data[i].value)
    this.citydata_name.push(data.city_data[i].name)
    this.cityData.push({"city_name":data.city_data[i].name, "city_count":data.city_data[i].value })
  }
  console.log(this.citydata_name);
  console.log(this.cityData);
})


}

getChartInfoTop5(year:any,month:any,type:any){
  if(type=="quarter" || type=="month"){
    type="total"
  } else if(type=="week" || type=="day"){
    type="month"
  }
  return this.http.get(`http://103.168.198.88/demo/dm_api.php?action=dm_proxy_url&param1=top_page_data&dm_token=f5b8b4e8ad952fb4a3f15a2e51a6f1a6&type=${type}&year=${year}&month=${month}`).subscribe((data:any)=>{
  this.TopFive = data
  console.log(data.page_count.sort());
  this.top5_label = data.page_name
  this.top5_data = data.page_count
})
}

getChartInfoConversionRate(year:any,month:any,type:any){
  if(type=="quarter" || type=="month"){
    type="total"
  } else if(type=="week" || type=="day"){
    type="month"
  }
  return this.http.get(`http://103.168.198.88/demo/dm_api.php?action=dm_proxy_url&param1=conversation_data&dm_token=f5b8b4e8ad952fb4a3f15a2e51a6f1a6&type=${type}&year=${year}&month=${month}&chart_name=&visitor_type=`).subscribe((data:any)=>{
  this.ConversionRate = data
  for(let key in data){
    this.conversion_label.push(key)
    this.conversion_data.push(data[key])
  }
})
}

getChartInfoInteractionPerVisit(year:any,month:any, type:any){
  if(type=="quarter" || type=="month"){
    type="total"
  } else if(type=="week" || type=="day"){
    type="month"
  }
  return this.http.get(`http://103.168.198.88/demo/dm_api.php?action=dm_proxy_url&param1=interaction_data&dm_token=f5b8b4e8ad952fb4a3f15a2e51a6f1a6&type=${type}&year=${year}&month=${month}&chart_name=&visitor_type=`).subscribe((data:any)=>{
  this.InteractionPerVisit = data
})
}

getChartInfoPageViews(year:any,month:any,type:any){
  return this.http.get(`http://103.168.198.88/demo/dm_api.php?action=dm_proxy_url&param1=pageview_data&dm_token=f5b8b4e8ad952fb4a3f15a2e51a6f1a6&type=${type}&year=${year}&month=${month}&s_date=&e_date=&q_drilldown=`).subscribe((data:any)=>{
  this.PageViews = data
})
}

getChartInfoTotalVisits(year:any,month:any,type:any){
  return this.http.get(`http://103.168.198.88/demo/dm_api.php?action=dm_proxy_url&param1=visitors_data&dm_token=f5b8b4e8ad952fb4a3f15a2e51a6f1a6&type=${type}&year=${year}&month=${month}&chart_name=&visitor_type=`).subscribe((data:any)=>{
  this.TotalVisits = data
})
}
}