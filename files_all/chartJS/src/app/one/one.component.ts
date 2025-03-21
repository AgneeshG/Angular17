import { Component, OnInit } from '@angular/core';
import { Chart,registerables } from 'chart.js/auto';
import { MasterService } from '../Service/master.service';
import { CommonModule } from '@angular/common';
Chart.register(...registerables)

@Component({
  selector: 'app-one',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './one.component.html',
  styleUrl: './one.component.css'
})
export class OneComponent implements OnInit {
  chartdata:any;
  colordata:any[] = []
  labeldata_year:any[] = []
  salesdata:any[] = []
  chartTypes:string[] = ['pie','line','bar','doughunt','radar','polarArea','bubble']
  constructor(private service:MasterService){

  }

  ngOnInit(): void {
    this.renderBarChart()
    this.getDataFromService()
  }

  getDataFromService(){
    return this.service.getChartInfo().subscribe(result=>{
      this.chartdata = result    
      if(this.chartdata!=null){
        for(let i=0;i<this.chartdata.length;i++){
          
          console.log(this.chartdata);
          
          this.colordata.push(this.chartdata[i].colorcode)
          this.labeldata_year.push(this.chartdata[i].year)
          this.salesdata.push(this.chartdata[i].amount)
          console.log(this.chartdata[i]);
          
        }
        this.renderPieCharatTwo(this.labeldata_year,this.colordata,this.salesdata) // calling service to display chart
        this.renderPieCharatThree(this.labeldata_year,this.colordata,this.salesdata) // calling service to display chart
        this.renderPieCharatFour(this.labeldata_year,this.colordata,this.salesdata) // calling service to display chart
        this.renderPieCharatFive(this.labeldata_year,this.colordata,this.salesdata) // calling service to display chart
        this.renderPieCharatSix(this.labeldata_year,this.colordata,this.salesdata) // calling service to display chart
        this.renderPieCharatSeven(this.labeldata_year,this.colordata,this.salesdata) // calling service to display chart
      }
    })
  }

  renderBarChart(){
    const myChart = new Chart("barchart", {
      type:'bar',
      data:{
        labels:['Red','Blue','Yellow','Green', 'Purple', 'Orange'],
        datasets:[{
          label:'# of votes',
          data:[12,19,3,5,2,3],
          backgroundColor:[
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(155, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ], 
          borderColor:[
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(155, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options:{
        scales:{
          y: {
            beginAtZero:true
          }
        }
      }
    })
  }

 
  renderPieCharatTwo(label:any, color:any, data:any){
    const myChartTwo = new Chart("chartTwo",{
      type:"pie",
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
  

  renderPieCharatThree(label:any, color:any, data:any){
    const myChartTwo = new Chart("chartThree",{
      type:"bubble",
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

  renderPieCharatFour(label:any, color:any, data:any){
    const myChartTwo = new Chart("chartFour",{
      type:"line",
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

  renderPieCharatFive(label:any, color:any, data:any){
    const myChartTwo = new Chart("chartFive",{
      type:"polarArea",
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

  renderPieCharatSix(label:any, color:any, data:any){
    const myChartTwo = new Chart("chartSix",{
      type:"radar",
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

  renderPieCharatSeven(label:any, color:any, data:any){
    const myChartTwo = new Chart("chartSeven",{
      type:"doughnut",
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

  };
