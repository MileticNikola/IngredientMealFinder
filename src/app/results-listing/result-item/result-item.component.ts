import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.css']
})
export class ResultItemComponent implements OnInit {

  @Input() text:string;
  @Input() image:string;

  constructor() {
    this.text = "";
    this.image = "";
  }

  ngOnInit(): void {
  }

}
