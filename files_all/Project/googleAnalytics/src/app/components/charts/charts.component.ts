import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../services/service.service';
import { Chart,registerables } from 'chart.js/auto';
import { NavbarLogComponent } from '../../navbar-log/navbar-log.component';
Chart.register(...registerables)

@Component({
  selector: 'app-charts',
  standalone: true,
  imports: [NavbarLogComponent],
  templateUrl: './charts.component.html',
  styleUrl: './charts.component.css'
})
export class ChartsComponent implements OnInit{
  year:number = 0

  constructor(private service:ServiceService){

  }
  ngOnInit(): void {
    this.canAccess()
  }
  canAccess(){
    return this.service.canAccess()
  }
  isAuthenticated(){
    return this.service.isAuthenticated()
  }
  storeToken(token:string){
    return this.service.storeToken(token)
  }
  // getDataFromService(){
  //   return this.service.getChartInfo().subscribe(result=>{
  //     this.chartdata = result    
  //     if(this.chartdata!=null){
  //       for(let i=0;i<this.chartdata.length;i++){
          
  //         console.log(this.chartdata);
          
  //         this.colordata.push(this.chartdata[i].colorcode)
  //         this.labeldata_year.push(this.chartdata[i].year)
  //         this.salesdata.push(this.chartdata[i].amount)
  //         console.log(this.chartdata[i]);
          
  //       }
  //       this.renderPieCharatTwo(this.labeldata_year,this.colordata,this.salesdata) // calling service to display chart
  //     }
  //   })
  // }

  renderPieCharatTwo(label:any, color:any, data:any){
    const myChartTwo = new Chart("chartTwo",{
      type:"bar",
      data: {
        labels:label,
        datasets:[{
          label:"yearly sales data",
          data:data,
          backgroundColor:color,
          borderColor:color,
          borderWidth:0.8
        }]
      },
      options:{
        scales:{
          y:{
            beginAtZero:true
          }
        }
      }
    })
  }
}
