import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit {

  constructor() { }
  ngOnInit() {
  }
  @Output() public childEvent=new EventEmitter();

  fireEvent(message: string)
  {
    this.childEvent.emit(message);
  }

}
