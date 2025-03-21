import { Component, OnInit } from '@angular/core';
import { MasterService } from '../Service/master.service';
import { Chart,registerables } from 'chart.js/auto';
import { CommonModule } from '@angular/common';
Chart.register(...registerables)


@Component({
  selector: 'app-two',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './two.component.html',
  styleUrl: './two.component.css'
})
export class TwoComponent implements OnInit{

  slides:any  //   ------
  slideIndex = 0; //   ------
  chartdata:any;
  colordata:any[] = []
  labeldata_year:any[] = []
  salesdata:any[] = []
  chartTypes:string[] = ['pie','line','bar','doughunt','radar','polarArea','bubble']
  constructor(private service:MasterService){
  }
  ngOnInit(): void {
    this.renderBarChart()
  }

  renderBarChart(){
    const myChart = new Chart("barchartTwo", {
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






  showSlides() {
    let i;
    this.slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < this.slides.length; i++) {
      this.slides[i].style.display = "none";
    }
    this.slideIndex++;
    if (this.slideIndex > this.slides.length) {this.slideIndex = 1}
    this.slides[this.slideIndex-1].style.display = "block";
    setTimeout(this.showSlides, 2000); // Change image every 2 seconds
  }
}
