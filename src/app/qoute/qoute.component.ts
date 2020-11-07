import { Component, OnInit } from '@angular/core';
import { Qoute } from "../qoute";
@Component({
  selector: 'app-qoute',
  templateUrl: './qoute.component.html',
  styleUrls: ['./qoute.component.css']
})
export class QouteComponent implements OnInit {
qoutes :Qoute[] =[
  new Qoute ("victa","petience pays but pains"),
  new Qoute ("tripplevic","there is no way to success but success is the way"),
  new Qoute ("victa",""),
  new Qoute ("victa","petience pays but bail"),
  new Qoute ("victa","petience pays but bail"),

  
]


toggleDetail(index){
  this.qoutes[index].showDescription= !this.qoutes[index].showDescription;
}
  constructor() { }

  ngOnInit(): void {
  }

}
