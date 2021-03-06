import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-results-listing',
  templateUrl: './results-listing.component.html',
  styleUrls: ['./results-listing.component.css']
})
export class ResultsListingComponent implements OnInit {

  @Input() resultList: any;
  @Output() scrollEvent = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {

  }

  onScrollDown() {
    console.log("down");
    this.scrollEvent.emit();
  }
  onScrollUp() {
    console.log("up");
  }

}
