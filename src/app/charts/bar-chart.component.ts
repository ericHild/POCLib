import { Component, Input, OnInit } from '@angular/core';
import { Chart, ChartConfiguration, ChartData, registerables } from 'chart.js';
Chart.register(...registerables);


@Component({
  selector: 'cmp-bar-chart',
  imports: [],
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss',
  standalone: true
})
export class BarCharttComponent implements OnInit {

  barChart!:Chart;

  months_and_datas:ChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Dataset #1",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 2,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [65, 59, 20, 81, 56, 55, 40],
        order: 1
      },
      {
        label: "Dataset #2",
        backgroundColor: "rgba(255,99,132,1)",
        borderColor: "rgba(255,99,132,0.2)",
        borderWidth: 2,
        hoverBackgroundColor: "rgba(255,99,132,1)",
        hoverBorderColor: "rgba(255,99,132,0.4)",
        data: [40, 55, 5,81, 56, 59, 20],
        type: 'line',
        order: 2
      }
    ]
  };

  configs:ChartConfiguration = {
    type: 'bar',
    data: this.months_and_datas,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Combined Line/Bar Chart'
        }
      }
    },
  };
  
  ngOnInit(): void {
    this.initChart();    
  }

  initChart() {
    new Chart('graph', this.configs);
  }

}
