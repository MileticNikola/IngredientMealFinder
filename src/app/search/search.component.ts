import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormGroup, FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  foodForm!: FormGroup;

  @Output() messageEvent = new EventEmitter<string>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.foodForm = this.fb.group({
      ingredient: '' //TODO add min length validator
    })

    //this.foodForm.valueChanges.subscribe(console.log) //TODO learn how the hell ajax works here
  }

  onSubmit(): void {
    this.messageEvent.emit(this.foodForm.value.ingredient);
  }
}
