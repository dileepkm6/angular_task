import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
public message:string;
@Output() public childEvent=new EventEmitter;
public fireEvent()
{
  this.childEvent.emit(this.message);
}
}
