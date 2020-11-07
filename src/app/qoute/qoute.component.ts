import { Component, OnInit } from '@angular/core';
import { Qoute } from "../qoute";
@Component({
  selector: 'app-qoute',
  templateUrl: './qoute.component.html',
  styleUrls: ['./qoute.component.css']
})
export class QouteComponent implements OnInit {
qoutes :Qoute[] =[
  new Qoute ("insperational","victor","petience pays but pains", new Date(2020,4,6)),
  new Qoute ("love","tripplevic","there is no way to success but success is the way", new Date(2020 ,9, 10)),
  new Qoute ("mortivational","manuu","do not boast about tommorrow for you do not know what a day may bring forth" ,new Date (2000,6,12)),
  new Qoute ("love","victa","petience pays but bail" ,new Date(2001,4,7)),
  new Qoute ("insperational","victa","petience pays but bail" ,new Date (1990,6,8)),

  
]


toggleDetail(index){
  this.qoutes[index].showDescription= !this.qoutes[index].showDescription;
}
  constructor() { }

  ngOnInit(): void {
  }

}
