import { Component, OnInit } from '@angular/core';
import { Qoute } from "../qoute";
@Component({
  selector: 'app-qoute',
  templateUrl: './qoute.component.html',
  styleUrls: ['./qoute.component.css']
})
export class QouteComponent implements OnInit {
qoutes :Qoute[] =[
  new Qoute ("victa","petience pays but bail",new Date(1994,4,2)),
  new Qoute ("victa","petience pays but bail",new Date(1994,4,2)),
  new Qoute ("victa","petience pays but bail",new Date(1994,4,2)),
  new Qoute ("victa","petience pays but bail",new Date(1994,4,2)),
  new Qoute ("victa","petience pays but bail",new Date(1994,4,2)),
]
  constructor() { }

  ngOnInit(): void {
  }

}
