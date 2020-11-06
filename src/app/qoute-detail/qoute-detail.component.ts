import { Component, OnInit ,Input} from '@angular/core';
import { Qoute } from "../qoute";
@Component({
  selector: 'app-qoute-detail',
  templateUrl: './qoute-detail.component.html',
  styleUrls: ['./qoute-detail.component.css']
})
export class QouteDetailComponent implements OnInit {
@Input() qoute:Qoute;
  constructor() { }

  ngOnInit(): void {
  }

}
