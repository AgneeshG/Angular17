import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Tabulator } from 'tabulator-tables';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private tabulator:Tabulator){}
  title = 'projOne';
  
  tabledata = [{
      playerid: 1,
      playername: "Virat Kohli",
      price: "17",
      team: "RCB",
      joiningdate: "01/01/2020"
  }, {
      playerid: 2,
      playername: "Rohit Sharma",
      price: "15",
      team: "MI",
      joiningdate: "02/01/2020"
  }, {
      playerid: 3,
      playername: "MS Dhoni",
      price: "15",
      team: "CSK",
      joiningdate: "03/01/2020"
  }, {
      playerid: 4,
      playername: "Shreyas Iyer",
      price: "7",
      team: "RCB",
      joiningdate: "04/01/2020"
  }, {
      playerid: 5,
      playername: "KL Rahul",
      price: "11",
      team: "KXIP",
      joiningdate: "05/01/2020"
  }, {
      playerid: 6,
      playername: "Dinesh Karthik",
      price: "7",
      team: "KKR",
      joiningdate: "06/01/2020"
  }, {
      playerid: 7,
      playername: "Steve Smith",
      price: "12",
      team: "RR",
      joiningdate: "07/01/2020"
  }, {
      playerid: 8,
      playername: "David Warner",
      price: "12",
      team: "SRH",
      joiningdate: "08/01/2020"
  }, {
      playerid: 9,
      playername: "Kane Williamson",
      price: "3",
      team: "SRH",
      joiningdate: "09/01/2020"
  }, {
      playerid: 10,
      playername: "Jofra Archer",
      price: "7",
      team: "RR",
      joiningdate: "10/01/2020"
  }, {
      playerid: 11,
      playername: "Andre Russell",
      price: "9",
      team: "KKR",
      joiningdate: "11/01/2020"
  }, {
      playerid: 12,
      playername: "Chris Gayle",
      price: "2",
      team: "KXIP",
      joiningdate: "12/01/2020"
  },
  ];

table = new Tabulator("#players", {
  height: 220,
  data: this.tabledata,
  layout: "fitColumns",
  pagination: true,
  paginationSize: 5,
  // tooltips: true,
  columns: [{
          title: "Player Name",
          field: "playername",
          sorter: "string",
          width: 150,
          headerFilter: "input"
      }, {
          title: "Player Price",
          field: "price",
          sorter: "number",
          hozAlign: "left",
          formatter: "progress",
      },

      {
          title: "Team",
          field: "team",
          sorter: "string",
          hozAlign: "center",
          // editor: "select",
          headerFilter: true,
          // headerFilterParams: {
          //     "RCB": "RCB",
          //     "MI": "MI",
          //     "KKR": "KKR",
          // }
      }, {
          title: "Joining Date",
          field: "joiningdate",
          sorter: "date",
          hozAlign: "center"
      },
  ],
  // rowClick: ((e:any, row:any)=> {
  //     alert("Row " + row.getData().playerid + " Clicked!!!!");
  // }),
});
}
