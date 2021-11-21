import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-results-listing',
  templateUrl: './results-listing.component.html',
  styleUrls: ['./results-listing.component.css']
})
export class ResultsListingComponent implements OnInit {

  @Input() resultList: any;

  constructor() {
  }

  ngOnInit(): void {

  }

  onScrollDown() {
    console.log("down");
    //TODO load more results
  }
  onScrollUp() {
    console.log("up");
  }

}
