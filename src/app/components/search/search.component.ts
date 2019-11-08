import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor() { }
  inputValue: string;
  inputCont: string = '';

  @Input() search;

    onInput(ev) {
      this.inputValue = ev.target.value;
      console.log(ev.target.value);
    }

    Search() {
      this.inputCont = this.inputValue
    }
  }
